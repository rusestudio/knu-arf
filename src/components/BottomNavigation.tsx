import { House, Map, Camera, Stamp, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function BottomNavigation() {
  const navItems = [
    {
      label: '홈',
      path: '/home',
      icon: House,
    },
    {
      label: '지도',
      path: '/map',
      icon: Map,
    },
    {
      label: 'AR',
      path: '/ar',
      icon: Camera,
    },
    {
      label: '도감',
      path: '/stamp',
      icon: Stamp,
    },
    {
      label: 'MY',
      path: '/my',
      icon: User,
    },
  ]

  return (
    <nav className="absolute bottom-0 left-0 right-0 z-50 border-t border-arf-border bg-white">
      <div className="flex h-[72px] items-center justify-around px-2">

        {navItems.map((item) => {
          const Icon = item.icon
          const isAR = item.path === '/ar'

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative flex flex-1 flex-col items-center justify-center ${
                  isAR
                    ? 'h-full'
                    : isActive
                      ? 'text-arf-orange'
                      : 'text-gray-400'
                }`
              }
            >
              {({ isActive }) =>
                isAR ? (
                  <>
                    <div
                      className={`
                        absolute -top-4
                        flex h-[60px] w-[60px]
                        items-center justify-center
                        rounded-full
                        border-[4px] border-white
                        bg-arf-orange
                        shadow-arf-md
                        transition-transform
                        active:scale-95
                        ${
                          isActive
                            ? 'scale-105'
                            : ''
                        }
                      `}
                    >
                      <Camera
                        size={27}
                        strokeWidth={2.4}
                        className="text-white"
                      />
                    </div>

                    <span className="mt-9 text-[11px] font-semibold text-arf-orange">
                      AR
                    </span>
                  </>
                ) : (
                  <>
                    <Icon
                      size={21}
                      strokeWidth={isActive ? 2.5 : 2}
                    />

                    <span
                      className={`mt-1 text-[11px] ${
                        isActive
                          ? 'font-semibold'
                          : 'font-medium'
                      }`}
                    >
                      {item.label}
                    </span>
                  </>
                )
              }
            </NavLink>
          )
        })}

      </div>
    </nav>
  )
}

export default BottomNavigation
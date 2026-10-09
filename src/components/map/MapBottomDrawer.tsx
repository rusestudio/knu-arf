
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Heart,
  MapPin,
  Clock3,
  Info,
  Navigation,
} from 'lucide-react'
import { useRef } from 'react'
import type { TouchEvent } from 'react'

export type MapPlace = {
  id: number
  name: string
  category: string
  description: string
  location: string
  distance: string
  hours: string
  image: string
}

type MapBottomDrawerProps = {
  place: MapPlace | null
  onDetails?: (place: MapPlace) => void
}

function MapBottomDrawer({ place, onDetails }: MapBottomDrawerProps) {
  const navigate = useNavigate()
  const [isFavorite, setIsFavorite] = useState(false)

  if (!place) return null

    
  const [isExpanded, setIsExpanded] = useState(true)
  const touchStartY = useRef<number | null>(null)

  const handleTouchStart = (e: TouchEvent<HTMLElement>) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: TouchEvent<HTMLElement>) => {
    if (touchStartY.current === null) return

    const touchEndY = e.changedTouches[0].clientY
    const swipeDistance = touchEndY - touchStartY.current

    if (swipeDistance > 50) {
      // Swipe down: collapse
      setIsExpanded(false)
    } else if (swipeDistance < -50) {
      // Swipe up: expand
      setIsExpanded(true)
    }

    touchStartY.current = null
  }


  return (
    <section  className={`
                      absolute bottom-0 left-0 right-0 z-30
                      rounded-t-[28px] bg-white px-4 pt-3
                      transition-all duration-300 ease-in-out
                      ${
                        isExpanded
                          ? 'pb-5 shadow-xl'
                          : 'pb-2 shadow-md'
                      }
                    `}
                  >

      {/* Drawer handle */}
      {/* Clickable / Swipeable drawer handle */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={() => setIsExpanded((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsExpanded((prev) => !prev)
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-label={
          isExpanded ? '부스 정보 접기' : '부스 정보 펼치기'
        }
        className={`
          flex cursor-pointer touch-none justify-center
          ${isExpanded ? 'mb-3 py-2' : 'py-1'}
        `}
      >
        <div className="h-1.5 w-12 rounded-full bg-gray-300" />
      </div>

      {isExpanded && (
      <div className="flex gap-3">

        {/* Booth image */}
        <img
          src={place.image}
          alt={place.name}
          className="h-[150px] w-[35%] shrink-0 rounded-[16px] object-cover"
        />

        {/* Booth information */}
        <div className="min-w-0 flex-1">

          <div className="flex items-start justify-between gap-2">
            <span className="text-xs font-semibold text-blue-500">
               {place.category}
            </span>

            <button
              type="button"
              aria-label="즐겨찾기"
              aria-pressed={isFavorite}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart
                size={23}
                fill={isFavorite ? '#FF633E' : 'none'}
                color={isFavorite ? '#FF633E' : '#253047'}
              />
            </button>
          </div>

          <h2 className="mt-1 text-[17px] font-bold text-arf-text">
            {place.name}
          </h2>

          <p className="mt-1 line-clamp-2 text-[12px] leading-5 text-gray-500">
            {place.description}
          </p>

          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-arf-orange" />
              {place.location} · {place.distance}
            </span>

            <span className="flex items-center gap-1">
              <Clock3 size={14} className="text-arf-orange" />
              {place.hours}
            </span>
          </div>

          {/* Action buttons */}
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => onDetails?.(place)}
              className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-[#F4F1EC] px-2 py-3 text-[12px] font-bold text-arf-text"
            >
              <Info size={16} />
              상세보기
            </button>

            <button
              type="button"
              onClick={() => navigate('/ar')}
              className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-arf-orange px-2 py-3 text-[12px] font-bold text-white"
            >
              <Navigation size={16} />
              길찾기
            </button>
          </div>

        </div>
      </div>
      )}
    </section>
  )
}

export default MapBottomDrawer

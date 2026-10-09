
import { ChevronRight, MapPin, Utensils } from 'lucide-react'
import type { FoodTruck } from '../../data/foodTrucks'
import { useRef, useState } from 'react'
import type { TouchEvent } from 'react'

type Props = {
  results: FoodTruck[]
  image: string
  onSelect: (truck: FoodTruck) => void
}

function FoodTruckResultsDrawer({
  results,
  image,
  onSelect,
}: Props) {

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
        // Swipe down: collapse drawer
        setIsExpanded(false)
    } else if (swipeDistance < -50) {
        // Swipe up: expand drawer
        setIsExpanded(true)
    }

    touchStartY.current = null
    }
  return (

    <section className="absolute bottom-0 left-0 right-0 w-full z-[100]
            rounded-t-[28px] bg-white 
            px-4 pb-5 pt-3 shadow-xl
            transition-all duration-300 ease-in-out
            ${
                isExpanded
                    ? 'bottom-[65px] pb-4 shadow-lg'
                    : 'bottom-[65px] pb-1 shadow-none'
                }
        `}">
      {/* Draggable handle */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={() => setIsExpanded(!isExpanded)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsExpanded(!isExpanded)
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-label={
          isExpanded ? '검색 결과 접기' : '검색 결과 펼치기'
        }
       className={`
                flex cursor-pointer touch-none justify-center
                ${isExpanded ? 'py-2' : 'py-1'}
                `}
      >
        <div className="h-1.5 w-12 rounded-full bg-gray-300" />
      </div>

      {/* Drawer content */}
      {isExpanded && (
        <>
          {/* Results header */}
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[14px] font-bold text-arf-text">
              검색 결과 {results.length}개
            </h2>
          </div>

          {/* Food truck list */}
          <div className="max-h-[280px] space-y-3 overflow-y-auto">
            {results.map((truck) => (
              <button
                key={truck.id}
                type="button"
                onClick={() => onSelect(truck)}
                className="flex w-full items-center gap-3 text-left"
              >
                {/* Food truck image */}
                <img
                  src={image}
                  alt={truck.name}
                  className="h-[70px] w-[80px] shrink-0 rounded-lg object-cover"
                />

                {/* Food truck information */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-[13px] font-bold text-arf-text">
                    {truck.name}
                  </h3>

                  <div className="flex items-center gap-1 text-[11px] text-arf-orange">
                    <Utensils size={12} />
                    먹거리
                  </div>

                  <p className="mt-1 line-clamp-1 text-[11px] text-gray-500">
                    {truck.description}
                  </p>

                  <div className="mt-1 flex items-center gap-1 text-[11px] text-gray-500">
                    <MapPin
                      size={12}
                      className="text-arf-orange"
                    />
                    {truck.distance} · {truck.location}
                  </div>
                </div>

                <ChevronRight
                  size={18}
                  className="shrink-0 text-gray-400"
                />
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default FoodTruckResultsDrawer
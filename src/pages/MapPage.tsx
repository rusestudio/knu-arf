
import { useState } from 'react'
import { Search } from 'lucide-react'

import mapBackground from '../assets/map/mainmap.png'
import boothMarker from '../assets/map/markers/pinbooth.png'
import performanceMarker from '../assets/map/markers/pinconcert.png'
import foodMarker from '../assets/map/markers/pin food.png'
import restroomMarker from '../assets/map/markers/pintoilet.png'
import restAreaMarker from '../assets/map/markers/pinforest.png'

import boothIcon from '../assets/map/buttonicon/iconbooth.png'
import performanceIcon from '../assets/map/buttonicon/iconconcert.png'
import foodIcon from '../assets/map/buttonicon/iconfood.png'
import restroomIcon from '../assets/map/buttonicon/icontoilet.png'
import restAreaIcon from '../assets/map/buttonicon/icontree.png'

import MapBottomDrawer from '../components/map/MapBottomDrawer'
import { mapPlaces } from '../data/boothinfo'
import type { MapPlace } from '../components/map/MapBottomDrawer'
import { mapMarkers } from '../data/mapMarkers'

import MapSearch from '../components/map/MapSearch'
import FoodTruckResultsDrawer from '../components/map/FoodTruckResultsDrawer'
import { foodTrucks } from '../data/foodTrucks'
import type { FoodTruck } from '../data/foodTrucks'
import foodTruckImage from '../assets/map/info/foodtruck1.png'

const categories = [
  { name: '전체', icon: null },
  { name: '부스', icon: boothIcon },
  { name: '공연', icon: performanceIcon },
  { name: '먹거리', icon: foodIcon },
  { name: '화장실', icon: restroomIcon },
  { name: '휴게공간', icon: restAreaIcon },
]

const markerImages: Record<string, string> = {
  부스: boothMarker,
  공연: performanceMarker,
  먹거리: foodMarker,
  화장실: restroomMarker,
  휴게공간: restAreaMarker,
}

//const [selectedPlace, setSelectedPlace] = useState(mapPlaces[0])

function MapPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체')

    // Selected booth for bottom drawer
  const [selectedPlace, setSelectedPlace] = useState<MapPlace | null>(
    mapPlaces[0] ?? null
  )

  const visibleMarkers = mapMarkers.filter(
    (marker) =>
      selectedCategory === '전체' ||
      marker.category === selectedCategory
  )

  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')
  const [selectedFoodTruck, setSelectedFoodTruck] =
    useState<FoodTruck | null>(null)

  const isFoodTruckSearch = searchKeyword === '푸드트럭'

  const handleSearch = (keyword: string) => {
      setSearchKeyword(keyword)
      setIsSearchOpen(false)
      setSelectedFoodTruck(null)

      if (keyword === '푸드트럭') {
        setSelectedCategory('먹거리')
      }
    }

  return (
    <main className="min-h-screen bg-arf-background">
      <div className="relative w-full">

        {/* Map background */}
        <img
          src={mapBackground}
          alt="축제 지도"
          className="block h-auto w-full"
        />

        {/* Search button */}
        <button
          onClick={() => setIsSearchOpen(true)}
          type="button"
          aria-label="검색"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-arf-sm"
        >
          <Search size={22} />
        </button>

        {/* Category filters */}
        <div className="absolute left-0 right-0 top-20 z-20 flex gap-2 overflow-x-auto px-3 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => {
                    setSelectedCategory(category.name)
                    setSearchKeyword('')
                    setSelectedFoodTruck(null)
                  }}
              className={`flex shrink-0 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold shadow-arf-sm transition ${
                  selectedCategory === category.name
                    ? 'bg-arf-orange text-white'
                    : 'bg-white text-arf-text'
                }`}
            >
              {category.icon && (
                <img
                  src={category.icon}
                  alt=""
                  className="h-4 w-4 object-contain"
                />
              )}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Map markers */}
        {!isFoodTruckSearch && visibleMarkers.map((marker) => (
          <button
            key={marker.id}
            type="button"
            aria-label={`${marker.category} 위치 ${marker.id}`}
            onClick={() => {
              const place = mapPlaces.find(
                (place) => place.id === marker.id
              )
              if (place) setSelectedPlace(place)
            }}
            className="absolute z-10 w-[8%] -translate-x-1/2 -translate-y-full"
            style={{
              left: `${marker.x}%`,
              top: `${marker.y}%`,
            }}
          >
            <img
              src={markerImages[marker.category]}
              alt={marker.category}
              className="block h-auto w-full"
            />
          </button>
        ))}
        {isFoodTruckSearch &&
            foodTrucks.map((truck) => (
              <button
                key={truck.id}
                type="button"
                onClick={() => setSelectedFoodTruck(truck)}
                aria-label={truck.name}
                aria-pressed={selectedFoodTruck?.id === truck.id}
                className="absolute z-10 w-[7%] -translate-x-1/2 -translate-y-full"
                style={{
                  left: `${truck.x}%`,
                  top: `${truck.y}%`,
                }}
              >
                <img
                  src={markerImages['먹거리']}
                  alt=""
                  className="block h-auto w-full"
                />
              </button>
            ))}


        {isFoodTruckSearch ? (
          <FoodTruckResultsDrawer
            results={foodTrucks}
            image={foodTruckImage}
            onSelect={(truck) => setSelectedFoodTruck(truck)}
          />
        ) : (
          <MapBottomDrawer
            place={selectedPlace}
            onDetails={(place) => {
              console.log('상세보기:', place)
            }}
          />
        )}
      </div>


      {isSearchOpen && (
        <MapSearch
          onClose={() => setIsSearchOpen(false)}
          onSearch={handleSearch}
        />
      )}
    </main>
  )
}

export default MapPage

import homeBanner from '../assets/home/hometopbanner.png'
import armapBanner from '../assets/home/arexplorebanner.png'
import EventCard from '../components/home/EventCard'
import FestivalStatus from "../components/home/FestivalStatus";
import MapleTreeBanner from "../components/home/MapleTreeBanner";
import { festivalEvents } from '../data/events'

import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
   const navigate = useNavigate()
  return (
      <main className="min-h-screen bg-arf-background">
      {/* Top festival banner */}
      <section className="w-full">
        <img
          src={homeBanner}
          alt="우리의 가을 KNU Festival"
          className="block h-auto w-full"
        />
      </section>

      {/* AR Map Banner */}
      <section className="relative z-10 -mt-5 px-3">
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border-[6px]
                border-white
                bg-white
                shadow-arf-sm
              "
            >
          <img
            src={armapBanner}
            alt="AR 지도로 축제를 탐험해요"
            className="block h-auto w-full"
          />

          <button
              type="button"
              onClick={() => navigate('/map')}
              className="
                absolute
                bottom-[7%]
                left-[4%]
                flex
                w-[30%]
                items-center
                justify-center
                gap-1
                rounded-full
                bg-arf-orange
                px-3
                py-2
                text-[9px]
                font-semibold
                text-white
                shadow-arf-sm
                transition
                active:scale-[0.97]
              "
            >
              AR 지도 보기
              <ChevronRight size={14} />
            </button>
        </div>
      </section>

      {/* Currently Running */}
        <section className="mt-3 px-4">
          <div className="px-4">
            <h2 className="text-[20px] font-bold text-arf-text">
              지금 진행 중 🔥
            </h2>
          </div>

          <div
            className="
              mt-3
              flex
              snap-x
              snap-mandatory
              gap-3
              overflow-x-auto
              px-6
              pb-3
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {festivalEvents.map((event, index) => (
              <div
                key={event.id}
                className={`snap-start ${
                  index === 0 ? 'ml-3' : ''
                }`}
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </section>

          {/* New festival status */}
          <FestivalStatus />

          {/* New maple tree banner */}
          <MapleTreeBanner />


    </main>
  )
}

export default HomePage
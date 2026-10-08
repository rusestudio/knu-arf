import { Clock3, MapPin } from 'lucide-react'
import type { FestivalEvent } from '../../data/events'

interface EventCardProps {
  event: FestivalEvent
}

function EventCard({ event }: EventCardProps) {
  return (
    <article className="w-[140px] shrink-0 overflow-hidden rounded-[16px] bg-white shadow-arf-sm ">
      {/* Event image */}
      <div className=" relative h-[88px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover"
        />

        {event.isLive && (
          <span className="absolute left-2 top-2 rounded-full bg-arf-orange px-2.5 py-1 text-[10px] font-semibold text-white">
            진행 중
          </span>
        )}
      </div>

      {/* Event information */}
      <div className="p-2.5">
        <h3 className="truncate text-[13px] font-bold text-arf-text">
          {event.title}
        </h3>

        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-arf-text-secondary">
          <Clock3
            size={13}
            className="shrink-0 text-arf-orange"
          />
          <span>{event.time}</span>
        </div>

        <div className="mt-1 flex items-center gap-1.5 text-[11px] text-arf-text-secondary">
          <MapPin
            size={13}
            className="shrink-0 text-arf-orange"
          />
          <span className="truncate">
            {event.location}
          </span>
        </div>
      </div>
    </article>
  )
}

export default EventCard
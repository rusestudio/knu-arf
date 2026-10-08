
import { useNavigate } from "react-router-dom";

import bookIcon from "../../assets/home/book.png";
import mapleIcon from "../../assets/home/maple.png";
import boothIcon from "../../assets/home/booth2.png";

const stats = [
  {
    title: "도감 등록",
    value: "8 / 12",
    icon: bookIcon,
    bg: "#FFF1D8",
    path: "/stamp",
  },
  {
    title: "획득한 단풍잎",
    value: "18 개",
    icon: mapleIcon,
    bg: "#FDEDEA",
    path: null,
  },
  {
    title: "방문한 부스",
    value: "7 곳",
    icon: boothIcon,
    bg: "#DFEDFF",
    path: "/my",
  },
];

export default function FestivalStatus() {
  const navigate = useNavigate();

  return (
    <section className="px-4 mt-4">
      {/* White background */}
      <div className="bg-white rounded-[20px] p-3 shadow-sm">

        {/* Title */}
        <h2 className="text-[17px] font-bold text-gray-900 mb-2">
          나의 축제 현황
        </h2>

        {/* Cards - swipeable, scrollbar hidden */}
        <div
          className="flex gap-2 overflow-x-auto snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {stats.map((item) => {
            const content = (
              <>
                <img
                  src={item.icon}
                  alt=""
                  className="w-11 h-11 object-contain"
                />

                <p className="text-[12px] font-semibold mt-1 text-gray-800 whitespace-nowrap">
                  {item.title}
                </p>

                <p className="text-[10px] font-bold text-gray-900">
                  {item.value}
                </p>
              </>
            );

            return (
              <button
                key={item.title}
                type="button"
                disabled={!item.path}
                onClick={() => {
                  if (item.path) navigate(item.path);
                }}
                style={{
                  backgroundColor: item.bg,
                  flex: "0 0 calc((100% - 16px) / 3)",
                }}
                className="
                  snap-start rounded-xl
                  py-2 px-1
                  flex flex-col items-center justify-center
                  text-center
                  disabled:cursor-default
                  enabled:cursor-pointer
                  enabled:active:scale-[0.98]
                  transition-transform
                "
              >
                {content}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

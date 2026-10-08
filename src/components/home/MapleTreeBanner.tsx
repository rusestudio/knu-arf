
import { useNavigate } from "react-router-dom";
import mapleTreeBanner from "../../assets/home/bottombanner.png";

export default function MapleTreeBanner() {
  const navigate = useNavigate();

  // Temporary dummy values
  const current = 12483;
  const target = 15000;
  const progress = Math.min(
    100,
    Math.round((current / target) * 100)
  );

  return (
    <section className="px-4 mt-4">
      <div
        className="relative w-full min-h-[125px] rounded-2xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${mapleTreeBanner})`,
        }}
      >
        <div className="relative z-10 flex items-center justify-end min-h-[125px] p-3">
          <div className="w-[43%] bg-white/95 rounded-2xl p-3 shadow-sm">
            <p className="text-[13px] font-bold text-gray-800 whitespace-nowrap">
              {current.toLocaleString()} / {target.toLocaleString()}
            </p>

            <div className="flex items-center gap-2 mt-2 ">
              <div className="h-1.5 flex-1 bg-orange-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FF705A] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <span className="text-[9px] font-bold text-[#FF705A]">
                {progress}%
              </span>
            </div>

            <button
              onClick={() => navigate("/my")}
              className="mt-3 w-full rounded-full border border-[#FF705A] py-0.5 text-xs font-semibold text-[#FF705A] whitespace-nowrap"
            >
              단풍나무 보러가기 ❯
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

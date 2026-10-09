
import {
  // Images
  greetingBanner,
  collectionIcon,
  collectionBear,
  //mapleLeaves,
  visitedIcon,
  matchingRecordIcon,
  spaceRecordIcon,
  mapleTree,
  mapleIcon,
  rewardsIcon,
  settingsIcon,

  // Dummy data
  stats,
  visitedBooths,
  matchingRecords,
  spaceRecords,
  rewards,
  mapleProgress,
  maplePercentage,
} from "../data/my";

function MyPage() {
  return (
    <main className="min-h-screen bg-[#fbf5eb] pb-28">
      <div className="mx-auto w-full max-w-md px-4 pt-6">

            {/* Header */}
            <header className="mb-5 flex items-center justify-between">

              {/* MY + Maple Leaf */}
              <div className="flex items-center gap-2">
                <h1 className="text-4xl font-extrabold text-[#54280F]">
                  MY
                </h1>

                <img
                  src={mapleIcon}
                  alt=""
                  className="h-9 w-9 object-contain"
                />
              </div>

              {/* Settings */}
              <button
                type="button"
                aria-label="설정"
                className="flex h-10 w-10 items-center justify-center"
              >
                <img
                  src={settingsIcon}
                  alt=""
                  className="h-8 w-8 object-contain"
                />
              </button>

            </header>

        {/* Greeting Banner */}
        <section className="mb-4">
          <img
            src={greetingBanner}
            alt="이번 축제도 너무 즐거워요!"
            className="w-full h-auto object-contain"
          />
        </section>

        {/* Statistics */}
        <section className="mb-4 grid grid-cols-4 gap-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{ backgroundColor: stat.bg }}
              className="flex min-w-0 flex-col items-center
                          rounded-2xl
                          border border-[#F2E8DE]
                          px-1 py-3 text-center
                          shadow-[0_2px_6px_rgba(110,72,40,0.08)]"
            >
              <img
                src={stat.icon}
                alt=""
                className="mb-2 h-10 w-10 object-contain"
              />

              <p className="mb-2 whitespace-nowrap text-[10px] font-bold text-[#30241D]">
                {stat.label}
              </p>

              <p className="text-lg font-extrabold text-black">
                {stat.value}
              </p>
            </div>
          ))}
        </section>




        {/* My Collection */}
        <section className="mb-3 rounded-2xl bg-[#fcf8f1] p-3 shadow-sm">

          {/* Section Header */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={collectionIcon}
                alt=""
                className="h-7 w-7 object-contain"
              />
              <h2 className="text-[18px] font-bold text-[#241C16]">
                나의 도감
              </h2>
            </div>
          </div>

          {/* Collection Content */}
          <div className="flex items-center gap-3">
            <img
              src={collectionBear}
              alt="곰두리"
              className="h-24 w-24 shrink-0 object-contain"
            />

            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-[#241C16]">
                발견한 곰두리
              </p>

              <p className="mt-1 text-2xl font-extrabold text-black">
                3 / 12
              </p>

              {/* Dummy Progress Bar */}
              <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-[#F8E3D2]">
                <div
                  className="h-full rounded-full bg-[#FF7945]"
                  style={{ width: "25%" }}
                />
              </div>

              <p className="mt-2 text-xs text-gray-500">
                더 많은 곰두리를 만나보세요!
              </p>
            </div>
          </div>
        </section>

        {/* Visited Booths */}
        <section className="mb-3 rounded-2xl bg-[#fcf8f1] p-3 shadow-sm">

          {/* Section Header */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={visitedIcon}
                alt=""
                className="h-7 w-7 object-contain"
              />
              <h2 className="text-[18px] font-bold text-[#241C16]">
                방문한 부스
              </h2>
            </div>
          </div>

          {/* Booth Cards */}
          <div className="grid grid-cols-4 gap-2">
            {visitedBooths.map((booth) => (
              <div
                key={booth.name}
                className="min-w-0 text-center"
              >
                <img
                  src={booth.image}
                  alt={booth.name}
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <p className="mt-1 text-[12px] font-semibold text-[#241C16]">
                  {booth.name}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* Matching Records */}
        <section className="mb-3 rounded-2xl bg-[#fcf8f1] p-3 shadow-sm">

          {/* Header */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={matchingRecordIcon}
                alt=""
                className="h-7 w-7 object-contain"
              />
              <h2 className="text-[18px] font-bold text-[#241C16]">
                인연매칭 기록
              </h2>
            </div>
          </div>

          {/* Matching Cards */}
          <div className="grid grid-cols-3 gap-2">
            
            {matchingRecords.map((person) => (
              <div
                key={person.id}
                className="
                  flex min-w-0 flex-col items-center
                  rounded-2xl
                  border border-[#F8EDE0]
                  bg-[#faf2e7]
                  px-1.5 py-3
                  text-center
                  shadow-[0_2px_5px_rgba(120,80,40,0.05)]
                "
              >
                {/* Character PNG */}
                <img
                  src={person.image}
                  alt={person.name}
                  className="mb-1 h-20 w-20 max-w-full object-contain"
                />

                {/* Name */}
                <p className="text-[13px] font-bold text-[#241C16]">
                  {person.name}
                </p>

                {/* Date */}
                <p className="mt-1 text-[12px] text-[#888888]">
                  {person.date}
                </p>

                {/* Description */}
                <p className="mt-2 text-[10px] leading-4 text-[#74594B]">
                  {person.description}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* Space Decoration Records */}
        <section className="mb-3 rounded-2xl bg-[#fcf8f1] p-3 shadow-sm">

          {/* Header */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={spaceRecordIcon}
                alt=""
                className="h-7 w-7 object-contain"
              />
              <h2 className="text-[18px] font-bold text-[#241C16]">
                공간 꾸미기 기록
              </h2>
            </div>

            </div>

          {/* Space Images */}
          <div className="grid grid-cols-3 gap-2">
            {spaceRecords.map((space) => (
              <div
                key={space.id}
                className="min-w-0 overflow-hidden rounded-xl"
              >
                <img
                  src={space.image}
                  alt={`공간 꾸미기 기록 ${space.id}`}
                  className="aspect-square w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>



        {/* Maple Tree Contribution */}
        <section className="mb-3 rounded-2xl bg-[#fcf8f1] p-3 shadow-sm">

          {/* Header */}
          <div className="mb-3 flex items-center gap-2">
            <img
              src={mapleIcon}
              alt=""
              className="h-7 w-7 object-contain"
            />
            <h2 className="text-[18px] font-bold text-[#241C16]">
              나의 단풍나무 기여도
            </h2>
          </div>

          {/* Tree + Progress */}
          <div className="flex items-center gap-3">
            <img
              src={mapleTree}
              alt="단풍나무"
              className="h-36 w-36 shrink-0 object-contain"
            />

            <div className="min-w-0 flex-1">
              <p className="mb-3 text-[13px] leading-5 text-gray-500">
                축제의 추억을 모아
                <br />
                함께 단풍나무를 완성해요!
              </p>

              {/* Dummy Progress Bar */}
              <div
                className="h-3 w-full overflow-hidden rounded-full bg-[#F8E3D2]"
                role="progressbar"
                aria-valuenow={mapleProgress.collected}
                aria-valuemin={0}
                aria-valuemax={mapleProgress.total}
                aria-label="단풍나무 기여도"
              >
                <div
                  className="h-full rounded-full bg-[#FF7945]"
                  style={{
                    width: `${maplePercentage}%`,
                  }}
                />
              </div>

              <div className="mt-3 flex items-center gap-2">
                <img
                  src={mapleIcon}
                  alt=""
                  className="h-6 w-6 object-contain"
                />

                <p className="text-xl font-extrabold text-[#241C16]">
                  {mapleProgress.collected} / {mapleProgress.total}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rewards */}
        <section className="mb-3 rounded-2xl bg-[#fcf8f1] p-3 shadow-sm">

          {/* Header */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={rewardsIcon}
                alt=""
                className="h-7 w-7 object-contain"
              />

              <h2 className="text-[18px] font-bold text-[#241C16]">
                획득한 리워드
              </h2>
            </div>
          </div>

          {/* Reward Cards */}
          <div className="grid grid-cols-4 gap-2">
            {rewards.map((reward) => (
              <div
                key={reward.id}
                className="min-w-0 text-center"
              >
                <div className="flex aspect-square items-center justify-center rounded-xl bg-[#faf2e6] p-1">
                  <img
                    src={reward.image}
                    alt={reward.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="mt-1 text-[10px] font-semibold leading-tight text-[#241C16]">
                  {reward.name}
                </p>
              </div>
            ))}
          </div>
        </section>


      </div>
    </main>
  );
}

export default MyPage;



type CharacterCardProps = {
  name: string
  image: string
  unlocked: boolean
  selected?: boolean
  onClick?: () => void
}

function CharacterCard({
  name,
  image,
  unlocked,
  selected = false,
  onClick,
}: CharacterCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={unlocked ? name : '미발견 캐릭터'}
      className={`
        flex w-full items-center justify-center
        overflow-hidden
        rounded-[16px]
        border-2
        bg-[#FFF9F1]
        p-0
        transition
        active:scale-[0.97]
        ${
          selected
            ? 'border-arf-orange'
            : 'border-transparent'
        }
      `}
    >
      <img
        src={image}
        alt={unlocked ? name : '미발견 캐릭터'}
        className="block h-auto w-full object-contain"
      />
    </button>
  )
}

export default CharacterCard



import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { characters } from '../../data/characters'

function CharacterDetail() {
  const navigate = useNavigate()
  const { characterId } = useParams()

  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const character = characters.find(
    (item) => item.id === Number(characterId)
  )

  if (!character || !character.unlocked) {
    return (
      <main className="min-h-screen bg-arf-background p-6">
        <p>캐릭터를 찾을 수 없습니다.</p>
        <button
          onClick={() => navigate('/stamp')}
          className="mt-4 text-arf-orange"
        >
          도감으로 돌아가기
        </button>
      </main>
    )
  }

  const gallery = character.gallery ?? []
  const mainImage = character.detailImage ?? character.image

  const previousImage = () => {
    setGalleryIndex((index) =>
      (index - 1 + gallery.length) % gallery.length
    )
  }

  const nextImage = () => {
    setGalleryIndex((index) =>
      (index + 1) % gallery.length
    )
  }

  return (
    <main className="min-h-screen bg-arf-background pb-28">

      {/* Main Character Artwork */}
      <section className="relative w-full">
        <img
          src={mainImage}
          alt={character.name}
          className="block h-auto w-full"
        />

        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate('/stamp')}
          aria-label="도감으로 돌아가기"
          className="
            absolute left-4 top-5
            flex h-12 w-12
            items-center justify-center
            rounded-full bg-white
            shadow-arf-sm
          "
        >
          <ChevronLeft size={28} strokeWidth={3} />
        </button>

        {/* Favorite Button */}
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="즐겨찾기"
          aria-pressed={isFavorite}
          className="
            absolute right-4 top-5
            flex h-12 w-12
            items-center justify-center
            rounded-full bg-white
            shadow-arf-sm
          "
        >
          <Star
            size={27}
            className="text-[#FFB800]"
            fill={isFavorite ? '#FFB800' : 'none'}
          />
        </button>
      </section>

      {/* Character Category */}
      <section className="mt-3 px-5">
        <div className="flex items-center gap-3">
          <span
            className="
              rounded-full bg-arf-orange
              px-5 py-2
              text-[14px] font-bold text-white
            "
          >
            {character.category}
          </span>

          <span className="text-[14px] text-arf-text">
            {character.festival ?? ''}
          </span>
        </div>
      </section>

      {/* Description */}
      <section className="mt-4 px-5">
        <div
          className="
            rounded-[18px]
            bg-[#F7F1E7]
            px-5 py-4
          "
        >
          <p className="whitespace-pre-line text-[14px] leading-6 text-arf-text">
            {character.description ?? '캐릭터 소개를 준비 중입니다.'}
          </p>
        </div>
      </section>

      {/* Character Information */}
      <section className="mt-3 px-5">
        <div className="overflow-hidden rounded-[16px] bg-[#F7F1E7]">

          <div className="flex items-center border-b border-white px-4 py-3">
            <span className="mr-3 text-[22px]">🍁</span>
            <span className="w-[110px] text-[13px] text-arf-text">
              좋아하는 것
            </span>
            <span className="flex-1 text-[13px] text-arf-text">
              {character.likes ?? '-'}
            </span>
          </div>

          <div className="flex items-center border-b border-white px-4 py-3">
            <span className="mr-3 text-[22px]">💗</span>
            <span className="w-[110px] text-[13px] text-arf-text">
              특징
            </span>
            <span className="flex-1 text-[13px] text-arf-text">
              {character.feature ?? '-'}
            </span>
          </div>

          <div className="flex items-center px-4 py-3">
            <span className="mr-3 text-[22px]">📍</span>
            <span className="w-[110px] text-[13px] text-arf-text">
              발견한 장소
            </span>
            <span className="flex-1 text-[13px] text-arf-text">
              {character.location ?? '-'}
            </span>
          </div>

        </div>
      </section>

      {/* Character Gallery */}
      {gallery.length > 0 && (
        <section className="mt-4 px-4">
          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={previousImage}
              aria-label="이전 이미지"
              className="shrink-0 text-arf-text"
            >
              <ChevronLeft size={25} strokeWidth={3} />
            </button>

            <div className="grid min-w-0 flex-1 grid-cols-4 gap-2 rounded-[14px] bg-[#FFE8D8] p-2">
              {gallery.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setGalleryIndex(index)}
                  aria-label={`갤러리 이미지 ${index + 1}`}
                  aria-pressed={galleryIndex === index}
                  className={`
                    overflow-hidden rounded-[10px]
                    border-2 bg-white
                    ${
                      galleryIndex === index
                        ? 'border-arf-orange'
                        : 'border-transparent'
                    }
                  `}
                >
                  <img
                    src={image}
                    alt={`${character.name} ${index + 1}`}
                    className="aspect-square w-full object-contain"
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={nextImage}
              aria-label="다음 이미지"
              className="shrink-0 text-arf-text"
            >
              <ChevronRight size={25} strokeWidth={3} />
            </button>

          </div>
        </section>
      )}

    </main>
  )
}

export default CharacterDetail

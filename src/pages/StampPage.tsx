
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import CharacterCard from '../components/stamp/CharacterCard'
import { characters } from '../data/characters'

import bookIcon from '../assets/stamp/book3.png'

type StampCategory = '전체' | '일반' | '특별' | '이벤트'

const categories: StampCategory[] = [
  '전체',
  '일반',
  '특별',
  '이벤트',
]

function StampPage() {
    const navigate = useNavigate()
    const [activeCategory, setActiveCategory] =
      useState<StampCategory>('전체')

    const [currentPage, setCurrentPage] = useState(1)

    const ITEMS_PER_PAGE = 9

    const filteredCharacters =
      activeCategory === '전체'
        ? characters
        : characters.filter(
            (character) => character.category === activeCategory
          )

    const totalPages = Math.max(
      1,
      Math.ceil(filteredCharacters.length / ITEMS_PER_PAGE)
    )

    const visibleCharacters = filteredCharacters.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    )

    const handleCategoryChange = (category: StampCategory) => {
      setActiveCategory(category)
      setCurrentPage(1)
    }


  return (
    <main className="min-h-screen bg-arf-background px-4 pt-6 pb-28">

      {/* Collection Header */}
      <section className="flex items-center justify-between gap-3">

        <div className="flex items-center gap-2">
          <img
            src={bookIcon}
            alt="도감 아이콘"
            className="h-[36px] w-[36px] object-contain"
          />

          <h1 className="text-[28px] font-bold text-arf-text">
            도감
          </h1>
        </div>

        {/* Collection Progress */}
        <div className="rounded-full bg-[#F8F4ED] px-3 py-2">
          <p className="whitespace-nowrap text-[12px] font-semibold text-arf-text">
            발견한 금두리 {characters.filter((c) => c.unlocked).length} / {characters.length} 🍁 
          </p>
        </div>

      </section>

      {/* Category Tabs */}
      <section className="mt-5">
        <div className="grid grid-cols-4 rounded-[16px] bg-[#F1F1F1] p-1">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              aria-pressed={activeCategory === category}
              className={`
                rounded-[13px]
                py-3
                text-[14px]
                font-semibold
                transition-colors
                ${
                  activeCategory === category
                    ? 'bg-arf-orange text-white'
                    : 'text-[#666666]'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      
      
        {/* Character Grid */}
        <section className="mt-5">
          <div className="grid grid-cols-3 gap-2">
            
{visibleCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
              unlocked={character.unlocked}
              selected={character.id === 1}
              onClick={() => {
                if (character.unlocked) {
                  navigate(`/stamp/${character.id}`)
                }
              }}
            />
          ))}
          </div>
        </section>

        {/* Pagination */}
        <section className="mt-5 flex items-center justify-center gap-5">

          {/* Previous */}
          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) => Math.max(1, page - 1))
            }
            disabled={currentPage === 1}
            aria-label="이전 페이지"
            className="text-arf-text disabled:opacity-30"
          >
            <ChevronLeft size={28} strokeWidth={3} />
          </button>

          {/* Page Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentPage(index + 1)}
                aria-label={`${index + 1} 페이지`}
                aria-current={
                  currentPage === index + 1 ? 'page' : undefined
                }
                className={`
                  h-3 w-3 rounded-full transition-colors
                  ${
                    currentPage === index + 1
                      ? 'bg-arf-orange'
                      : 'bg-[#D6D0C8]'
                  }
                `}
              />
            ))}
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) =>
                Math.min(totalPages, page + 1)
              )
            }
            disabled={currentPage === totalPages}
            aria-label="다음 페이지"
            className="text-arf-text disabled:opacity-30"
          >
            <ChevronRight size={28} strokeWidth={3} />
          </button>

          <span className="text-[12px] text-gray-500">
            {currentPage} / {totalPages}
          </span>
        </section>



    </main>
  )
}

export default StampPage

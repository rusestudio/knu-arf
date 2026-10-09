
import { useEffect, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'

type MapSearchProps = {
  onClose: () => void
  onSearch: (keyword: string) => void
}

const suggestions = [
  '푸드트럭',
  '푸드트럭존',
  '먹거리',
  '먹거리존',
  '음식',
  '간식',
  '카페',
  '디저트',
]

function MapSearch({ onClose, onSearch }: MapSearchProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const filteredSuggestions = suggestions.filter((word) =>
    word.includes(query.trim())
  )

  const submitSearch = (keyword: string) => {
    const value = keyword.trim()
    if (!value) return

    onSearch(value)
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[#F8F7F4]">
      <div className="mx-auto flex h-full w-full max-w-[480px] flex-col">

        {/* Search input */}
        <div className="flex items-center gap-2 bg-white px-4 pb-3 pt-5">
          <div className="flex flex-1 items-center gap-2 rounded-full bg-[#F4F3F0] px-4 py-3">
            <Search size={18} className="shrink-0 text-gray-400" />

            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') submitSearch(query)
              }}
              placeholder="장소를 검색하세요"
              className="min-w-0 flex-1 bg-transparent text-sm text-arf-text outline-none"
            />

            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  inputRef.current?.focus()
                }}
                aria-label="검색어 지우기"
              >
                <X size={18} className="text-gray-400" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="shrink-0 text-sm text-gray-600"
          >
            취소
          </button>
        </div>

        {/* Keyword suggestions */}
        <div className="flex-1 overflow-y-auto px-4 pt-2">
          {filteredSuggestions.map((word) => (
            <button
              key={word}
              type="button"
              onClick={() => submitSearch(word)}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-gray-700 active:bg-gray-100"
            >
              <Search size={17} className="text-gray-400" />
              {word}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MapSearch

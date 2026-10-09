
import gaeuli from '../assets/stamp/char1.png'
import danpung from '../assets/stamp/char2.png'
import dotori from '../assets/stamp/char3.png'
import nagyeop from '../assets/stamp/char4.png'

import locked1 from '../assets/stamp/newchar2.png'
import locked2 from '../assets/stamp/newchar1.png'
import locked3 from '../assets/stamp/newchar3.png'

import gaeuliMain from '../assets/stamp/charinfo1.png'
import gaeuli1 from '../assets/stamp/ci1.png'
import gaeuli2 from '../assets/stamp/ci11.png'
import gaeuli3 from '../assets/stamp/ci1.png'
import gaeuli4 from '../assets/stamp/ci11.png'

import danpungMain from '../assets/stamp/charinfo2.png'
import danpung1 from '../assets/stamp/ci2.png'
import danpung2 from '../assets/stamp/ci22.png'
import danpung3 from '../assets/stamp/ci2.png'
import danpung4 from '../assets/stamp/ci22.png'

import dotoriMain from '../assets/stamp/charinfo3.png'
import dotori1 from '../assets/stamp/ci3.png'
import dotori2 from '../assets/stamp/ci33.png'
import dotori3 from '../assets/stamp/ci3.png'
import dotori4 from '../assets/stamp/ci33.png'

import nagyeopMain from '../assets/stamp/charinfo4.png'
import nagyeop1 from '../assets/stamp/ci4.png'
import nagyeop2 from '../assets/stamp/ci44.png'
import nagyeop3 from '../assets/stamp/ci4.png'
import nagyeop4 from '../assets/stamp/ci44.png'

export type Character = {
  id: number
  name: string
  image: string
  category: '일반' | '특별' | '이벤트'
  unlocked: boolean

    detailImage?: string
    description?: string
    festival?: string
    likes?: string
    feature?: string
    location?: string
    gallery?: string[]
}

const lockedImages = [locked1, locked2, locked3]

// Generate a stable random order once when the module loads.
const lockedCharacters: Character[] = Array.from(
  { length: 14 },
  (_, index) => ({
    id: index + 5,
    name: '???',
    image:
      lockedImages[
        Math.floor(Math.random() * lockedImages.length)
      ],
    category: '특별',
    unlocked: false,
  })
)

export const characters: Character[] = [
  {
    id: 1,
    name: '가을이',
    image: gaeuli,
    category: '일반',
    unlocked: true,

    detailImage: gaeuliMain,
    festival: '가을 축제',
    description:
        '가을 낙엽을 모으는 것을 좋아하는 호기심 많은 금두리!\n축제 곳곳을 돌아다니며 친구들에게 행복을 나눠줘요!',
    likes: '낙엽, 단풍, 산책',
    feature: '항상 가방을 메고 다님',
    location: '축제 미래광장',
    gallery: [
        gaeuli1,
        gaeuli2,
        gaeuli3,
        gaeuli4,
    ],
  },
  {
        id: 2,
        name: '단풍링',
        image: danpung,
        category: '일반',
        unlocked: true,
        detailImage: danpungMain,
        festival: '가을 축제',
        description: '단풍링의 캐릭터 소개를 입력하세요.',
        likes: '정보 입력 예정',
        feature: '정보 입력 예정',
        location: '정보 입력 예정',
        gallery: [],
  },
  {
    id: 3,
    name: '도토리',
    image: dotori,
    category: '일반',
    unlocked: true,
    detailImage: dotoriMain,
    festival: '가을 축제',
    description: '도토리의 캐릭터 소개를 입력하세요.',
    likes: '정보 입력 예정',
    feature: '정보 입력 예정',
    location: '정보 입력 예정',
    gallery: [],
  },
  {
    id: 4,
    name: '낙엽토',
    image: nagyeop,
    category: '일반',
    unlocked: true,
    detailImage: nagyeopMain,
    festival: '가을 축제',
    description: '낙엽토의 캐릭터 소개를 입력하세요.',
    likes: '정보 입력 예정',
    feature: '정보 입력 예정',
    location: '정보 입력 예정',
    gallery: [],
  },
  ...lockedCharacters,
]
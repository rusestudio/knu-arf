import mainStageImg from '../assets/home/stage.jpg'
import computerBoothImg from '../assets/home/booth.jpg'
import foodTruckImg from '../assets/home/foodtruck.jpg'
import fourthEventImg from '../assets/home/stage.jpg'

export interface FestivalEvent {
  id: number
  title: string
  time: string
  location: string
  image: string
  isLive?: boolean
}

export const festivalEvents: FestivalEvent[] = [
  {
    id: 1,
    title: '메인무대 공연',
    time: '19:00 ~ 20:00',
    location: '중앙광장',
    image: mainStageImg,
    isLive: true,
  },
  {
    id: 2,
    title: '컴퓨터공학과 부스',
    time: '~ 21:00',
    location: '공과대학 앞',
    image: computerBoothImg,
  },
  {
    id: 3,
    title: '푸드트럭 존',
    time: '10:00 ~ 22:00',
    location: '학생회관 앞',
    image: foodTruckImg,
  },
  {
    id: 4,
    title: '이벤트 부스',
    time: '13:00 ~ 20:00',
    location: '미래광장',
    image: fourthEventImg,
  },
]

export type FoodTruck = {
  id: number
  name: string
  category: '먹거리'
  description: string
  location: string
  distance: string
  x: number
  y: number
}

export const foodTrucks: FoodTruck[] = [
  {
    id: 101,
    name: '푸드트럭 존 A',
    category: '먹거리',
    description: '다양한 음식과 음료를 즐기는 푸드트럭존이에요!',
    location: '중앙광장',
    distance: '120m',
    x: 78,
    y: 39,
  },
  {
    id: 102,
    name: '푸드트럭 존 B',
    category: '먹거리',
    description: '맛있는 먹거리가 준비되어 있어요!',
    location: '학생회관 앞',
    distance: '230m',
    x: 66,
    y: 52,
  },
  {
    id: 103,
    name: '푸드트럭 존 C',
    category: '먹거리',
    description: '다양한 간식과 음료를 즐겨보세요!',
    location: '교육대학 부근',
    distance: '450m',
    x: 86,
    y: 65,
  },
]

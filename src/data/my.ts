import greetingBanner from "../assets/my/top.PNG";
import bearIcon from "../assets/stamp/book3.png";
import boothIcon from "../assets/my/ip2.PNG";
import matchingIcon from "../assets/my/ip3.PNG";
import rewardIcon from "../assets/my/ip4.PNG";


import collectionIcon from "../assets/stamp/book3.png";
import collectionBear from "../assets/my/t2.PNG";
import mapleLeaves from "../assets/my/maple3.png";
import visitedIcon from "../assets/my/ip2.PNG";

import boothFood from "../assets/my/i1.PNG";
import boothPerformance from "../assets/my/i2.PNG";
import boothGame from "../assets/my/i3.PNG";
import boothExperience from "../assets/my/i4.PNG";


import matchingRecordIcon from "../assets/my/ip5.PNG";
import spaceRecordIcon from "../assets/my/ip6.PNG";

import matchOne from "../assets/my/p1.PNG";
import matchTwo from "../assets/my/p2.PNG";
import matchThree from "../assets/my/p3.PNG";

import spaceOne from "../assets/my/d1.PNG";
import spaceTwo from "../assets/my/d2.PNG";
import spaceThree from "../assets/my/d3.png";

import mapleTree from "../assets/my/t1.PNG";
import mapleIcon from "../assets/my/s1.PNG";
import rewardsIcon from "../assets/my/ip1.png";

import rewardSticker from "../assets/my/s2.PNG";
import rewardTicket from "../assets/my/s1.PNG";
import rewardHeadband from "../assets/my/s3.PNG";
import rewardAR from "../assets/my/s4.PNG";

import settingsIcon from "../assets/my/setting.PNG";


export {
  greetingBanner,
  collectionIcon,
  collectionBear,
  mapleLeaves,
  visitedIcon,
  matchingRecordIcon,
  spaceRecordIcon,
  mapleTree,
  mapleIcon,
  rewardsIcon,
  settingsIcon,
};


export const mapleProgress = {
  collected: 12,
  total: 50,
};

export const rewards = [
  {
    id: 1,
    name: "단풍 스티커",
    image: rewardSticker,
  },
  {
    id: 2,
    name: "축제입장권 (일반)",
    image: rewardTicket,
  },
  {
    id: 3,
    name: "곰두리 팔머리띠",
    image: rewardHeadband,
  },
  {
    id: 4,
    name: "AR 아이템",
    image: rewardAR,
  },
];

export const maplePercentage =
  (mapleProgress.collected / mapleProgress.total) * 100;


export const stats = [
  {
    label: "발견한 곰두리",
    value: "3 / 12",
    icon: bearIcon,
    bg: "#FFF7EB",
  },
  {
    label: "방문한 부스",
    value: "8 / 20",
    icon: boothIcon,
    bg: "#FFF0F0",
  },
  {
    label: "인연매칭",
    value: "5",
    icon: matchingIcon,
    bg: "#F3EFFF",
  },
  {
    label: "획득한 리워드",
    value: "3",
    icon: rewardIcon,
    bg: "#FFF8DF",
  },
];


export const visitedBooths = [
  { name: "푸드존", image: boothFood },
  { name: "공연존", image: boothPerformance },
  { name: "게임존", image: boothGame },
  { name: "체험존", image: boothExperience },
];


export const matchingRecords = [
  {
    id: 1,
    name: "하루게",
    date: "9월 26일",
    description: "🎮 게임 취향이 같아요!",
    image: matchOne,
  },
  {
    id: 2,
    name: "모찌토끼",
    date: "9월 27일",
    description: "☕ 맛집을 추천했어요!",
    image: matchTwo,
  },
  {
    id: 3,
    name: "펭귄",
    date: "9월 28일",
    description: "💗 같이 사진을 찍었어요!",
    image: matchThree,
  },
];

export const spaceRecords = [
  { id: 1, image: spaceOne },
  { id: 2, image: spaceTwo },
  { id: 3, image: spaceThree },
];


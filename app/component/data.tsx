 
"use client"
import { create } from "zustand"
import { useState } from "react"

// 控制是否播放
type Play = {
  play: boolean;
  setplay: (newVaule: boolean) => void;
}
export const playstore = create<Play>()((set) => ({
  play: false,
  setplay: (newValue: any) => set({ play: newValue })
}))

// // 控制是否显示播放按钮
 type Isplay = {
   isPlaying: boolean;
   setIsPlaying: (newVaule: boolean) => void;
 }
 export const Isplaystore = create<Isplay>()((set) => ({
   isPlaying: false,
  setIsPlaying: (newValue) => set({ isPlaying: newValue })
 }))

// 当前点击盒子的id
type MusicID = {
  musicId: number;
  setMusicId: (newVaule: number) => void;
}
 export const MusicIdstore = create<MusicID>()(
   (set: (arg0: { musicId: any; }) => any) => ({
   musicId: 1,
   setMusicId: (newValue: any) => set({ musicId: newValue })
 }))

 export type musicList = {
  shouting: number
  dianzan:number
  jianjie:string
  id: number
  title: string
  artist:number
  duration:string
  imgUrl:string
  songUrl: string
  
}
type currentPlay = {
  currentPlayList : musicList[],
  setCurrentPlay: (newValue: musicList[]) => void;
};
export const currentPlayStore = create<currentPlay>((set: (arg0: { currentPlayList: any; }) => any) => ({
  currentPlayList: [],
  setCurrentPlay: (newValue: any) => set({ currentPlayList: newValue }),
}));

type NewestList = {
  newestData: musicList[]; // 使用上面定义的对象类型
  setNewestData: (newValue: musicList[]) => void;
};


type TrendingList = {
  trendingData: musicList[]; // 使用上面定义的对象类型
  setTrendingData: (newValue: musicList[]) => void;
};

type RoamingList = {
  roamingData: musicList[]; // 使用上面定义的对象类型
  setRoamingData: (newValue: musicList[]) => void;
};

export const newestListStore = create<NewestList>((set: (arg0: { newestData: any; }) => any) => ({
  newestData: [],
  setNewestData: (newValue: any) => set({ newestData: newValue }),
}));

export const trendingListStore = create<TrendingList>((set: (arg0: { trendingData: any; }) => any) => ({
  trendingData: [],
  setTrendingData: (newValue: any) => set({ trendingData: newValue }),
}));

export const roamingListStore = create<RoamingList>((set: (arg0: { roamingData: any; }) => any) => ({
  roamingData: [],
  setRoamingData: (newValue: any) => set({ roamingData: newValue }),
}));


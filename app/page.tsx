"use client"
import Image from "next/image";
import { MdLocalFireDepartment } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";
import { IoMdRadio } from "react-icons/io";
import { useEffect, useState } from "react";
import { playstore, Isplaystore, MusicIdstore, newestListStore, currentPlayStore,trendingListStore, roamingListStore } from '@/app/component/data';
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
export default function Page() {
  const { newestData, setNewestData } = newestListStore();
  const { trendingData, setTrendingData } = trendingListStore();
  const { roamingData, setRoamingData } = roamingListStore();
  const { play, setplay } = playstore();
  const { isPlaying, setIsPlaying } = Isplaystore();
  const { musicId, setMusicId } = MusicIdstore();
  const { setCurrentPlay } = currentPlayStore(); // Ensure currentPlayList is updated
  
  const metadata: Metadata = {
    title: 'Next.js',
  };

  const handleplay = (item: number) => {
    setplay(true);
    setMusicId(item);
    if (musicId === item) {
        setIsPlaying(!isPlaying);
    } else {
        setIsPlaying(true);
    }
    console.log(item);
    console.log(musicId);
};


useEffect(() => {
  async function fetchData() {
    const newest = await fetch('http://localhost:3000/api/newest');
    const newestData = await newest.json();
    console.log('Newest Data:', newestData.message); 
    setNewestData(newestData.message);
    
    
    const trending = await fetch('http://localhost:3000/api/trending');
    const trendingData = await trending.json();
    setTrendingData(trendingData.message);
     // Update the current play list

     const roaming = await fetch('http://localhost:3000/api/roaming');
    const roamingData = await roaming.json();
    setRoamingData(roamingData.message);
     // Update the current play list
}
fetchData();
}, []);

  return (
    <div className="relative top-[80px] left-[280px] w-[1020px] h-[900px]">
      <div className=" absolute top-[32px] left-[31px] text-2xl font-semibold tracking-tight ">Discover</div>
      <div className="absolute top-[100px] w-[170px] h-[50px]">
      <div className="absolute left-[33px] py-1.5 ">
    <MdLocalFireDepartment />
      </div>
      <div className="absolute  left-[59px] text-primary text-xl font-semibold hover:text-primary">
        Trending
      </div>
      </div>
      <div className="absolute top-[155px] overflow-hidden hover:overflow-y-auto hover:overflow-x-auto  w-[1020px]">
      <div className=" w-[1700px] h-[140px] ml-[35px] flex " onClick={() => setCurrentPlay(newestData)} >
      {newestData.map((item,index) => (
      <div className=" h-[135px] w-[120px] ml-[10px]" key={item.id} onClick={() => handleplay(index)}><img className="w-[112px] border rounded-[7px]" src={`https://tgfczjpwswnhwlqbmuav.supabase.co/storage/v1/object/public/music%20player/image/${item.title}.png`}></img><div className="text-sm text-primary font-semibold">{item.title}</div></div>
      ))}
      <div className=" h-[135px] w-[120px] ml-[8px]"><img className="w-[112px] border rounded-[7px]" src="image_ccf4d692-3e12-4501-9b7e-101f9bed25ef.webp"></img><div className="text-[13px] text-primary font-semibold">C-A-P-Y-B-A-R-A</div></div>

      </div>
      </div>
      <div className="absolute top-[340px] w-[170px] h-[50px]">
      <div className="absolute left-[33px] py-1.5 ">
      <FaWifi />
      </div>
      <div className="absolute  left-[59px] text-primary text-xl font-semibold hover:text-primary">
        Newest
      </div>
      </div>
      <div className="absolute top-[400px] overflow-hidden hover:overflow-y-auto hover:overflow-x-auto w-[1020px]">
      <div className=" w-[1700px] h-[140px] ml-[35px] flex " onClick={() => setCurrentPlay(trendingData)}>
      {trendingData.map((item,index) => (
      <div className=" h-[135px] w-[120px] ml-[10px]" key={item.id} onClick={() => handleplay(index)}><img className="w-[112px] border rounded-[7px]" src={item.imgUrl}></img><div className="text-sm text-primary font-semibold">{item.title}</div></div>
    ))}
      <div className=" h-[135px] w-[120px] ml-[8px]"><img className="w-[112px] border rounded-[7px]" src="image_ba10fa70-a7cb-4d9d-96e4-499800685344.webp"></img><div className="text-[13px] text-primary font-semibold">Một bài hát vui v</div></div>
      </div>
      </div>
      <div className="absolute top-[585px] w-[170px] h-[50px]">
      <div className="absolute left-[33px] py-1.5 ">
      <IoMdRadio />
      </div>
      <div className="absolute  left-[59px] text-primary text-xl font-semibold hover:text-primary">
      Roaming
      </div>
      </div>
      <div className="absolute top-[645px] overflow-hidden hover:overflow-y-auto hover:overflow-x-auto w-[1020px]">
      <div className=" w-[1700px] h-[140px] ml-[35px] flex " onClick={() => setCurrentPlay(roamingData)}>
      {roamingData.map((item,index) => (
      <div className=" h-[135px] w-[120px] ml-[10px]" key={item.id} onClick={() => handleplay(index)}><img className="w-[112px] border rounded-[7px]" src={item.imgUrl}></img><div className="text-sm text-primary font-semibold">{item.title}</div></div>
    ))}
      <div className=" h-[135px] w-[120px] ml-[8px]"><img className="w-[112px] border rounded-[7px]" src="image_87d29929-62f1-48a8-8b02-57de2b87f47d.webp"></img><div className="text-[13px] text-primary font-semibold">Infinito Viaggio</div></div>
      </div>
      </div>



      </div>
  );
}




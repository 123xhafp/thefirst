"use client";
import { BsHeadphones } from "react-icons/bs";
import { MdOutlineThumbUpAlt } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { currentPlayStore, Isplaystore, MusicIdstore, playstore, trendingListStore } from "../component/data";

export default function Page(){

    const { play, setplay } = playstore();
    const { isPlaying, setIsPlaying } = Isplaystore();
    const { musicId, setMusicId } = MusicIdstore();
    const { trendingData, setTrendingData } = trendingListStore();
    const { setCurrentPlay } = currentPlayStore(); // Ensure currentPlayList is updated
    const [currentSongIndex, setCurrentSongIndex] = useState<number>(0); // 当前播放歌曲的索引

    const handleplay = (songId: number) => {
        if (musicId === songId) {
          setIsPlaying(!isPlaying);
        } else {
          setMusicId(songId);
          setIsPlaying(true);
        }
      };
    
      useEffect(() => {
        async function fetchData() {
          const trending = await fetch("http://localhost:3000/api/trending");
          const trendingData = await trending.json();
          setTrendingData(trendingData.message);
          setCurrentPlay(trendingData.message); // Update the current play list
          // Assuming musicId should be set based on some logic, adjust if necessary
          if (trendingData.message.length > 0) {
            setMusicId(trendingData.message[0].id); // Set initial musicId
          }
        }
        fetchData();
      }, []);
    return(
        <div className="relative border  top-[80px] left-[280px] w-[1020px] h-[1120px]">
            <div className="mt-[32px] ml-[32px] h-[20px] mb-[32px] transition-colors text-base-content text-sm hover:text-primary" >
                <div className="absolute hover:text-yellow-400 transition-colors"><a href="http://localhost:3000">Home</a></div>
                <div className="absolute ml-[51px] mt-[3.5px]"><IoIosArrowForward /></div>
                <div className="absolute ml-[74px] text-yellow-400">Newest</div> 
                 
            </div>
            <div className="ml-[32px] mb-[22px] h-[25px] text-2xl font-semibold tracking-tight ">Newest</div>
            <div className="ml-[32px] w-[315px] mb-[25px] h-[40px] flex bg-gray-100 border border-transparent rounded-[8px]">
                <div className="mt-[3px] border rounded-[8px] pl-[15px] pt-[4px] text-[15px] h-[33px] w-[49px] ml-[4px]  bg-yellow-400"><a href="http://localhost:3000/newest">All</a></div>
                <div className=" mt-[3px]  rounded-[8px] pl-[12px] pt-[5.5px] text-[14.5px] h-[33px] w-[130px] ml-[4px] "><a href="http://localhost:3000/newest/suno-ai-songs">Suno AI Songs</a></div>
                <div className="mt-[3px]  rounded-[8px] pl-[11.5px] pt-[5.5px] text-[14.5px] h-[33px] w-[130px] ml-[4px] "><a href="http://localhost:3000/newest/udio-ai-songs">Udio AI Songs</a></div>
            </div>
            <div className="border h-10 border-b-gray-200 border-transparent ml-[32px] flex">
                <div className="h-10 ml-[15px] mt-[4.5px] mr-[177px] align-middle font-medium text-[13px]  text-neutral-700">#</div>
                <div className="h-10 ml-[1px] mt-[5px] mr-[127px] align-middle font-medium text-[14px]  text-neutral-700">Title</div>
                <div className="h-10 ml-[px] mt-[5px] mr-[467px] align-middle font-medium text-[14px]  text-neutral-700">Tags</div>
                <div className="h-10 mt-[5px] mr-[177px] align-middle font-medium text-[14px]  text-neutral-700">Duration</div>
            </div>
            {trendingData.slice(0,8).map((item,index) => (
            <div className="ml-[32px] border border-t-transparent border-l-transparent border-r-transparent h-[96px] flex " key={item.id} onClick={() => handleplay(index)}>
                <div className="h-[96px] ml-[15px] mt-[35.5px] text-[14px]">{index+1}</div>
                <div><img className=" ml-[56px] mt-[14.5px] w-[65px] border rounded-[7px]" src={item.imgUrl}></img></div>
                <div className="h-[96px]  w-[150px] ml-[57px]"><div className="absolute pl-[2px] mt-[24px]  text-[14.5px]">{item.title}</div><div className="absolute mt-[50px] ml-[1px]"><BsHeadphones /></div> <div className="absolute mt-[48px] ml-[18px] text-[14px]">{item.shouting}</div> <div className="absolute mt-[50px] ml-[84px]"><MdOutlineThumbUpAlt /></div><div className="absolute mt-[48px] text-[14px] ml-[101px]">{item.dianzan}</div></div>
                <div className="ml-[9px] w-[497px]"><div className="absolute mt-[23px] text-[14px]">{item.jianjie}</div><div className="absolute mt-[50px] pl-[8px]  border rounded-[10px] h-[20px] w-[50px] text-[14px] bg-yellow-400">suno</div></div>
                <div className=" text-[14.5px] mt-[36px]">{item.duration}</div>
            </div>
            ))}
        </div>
    );
}
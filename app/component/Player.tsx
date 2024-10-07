"use client";
import { useEffect, useRef, useState } from "react";
import { CgPlayButton } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { GiNextButton, GiPauseButton, GiPreviousButton } from "react-icons/gi";



import { Isplaystore, MusicIdstore, currentPlayStore } from "./data";




export default function Home(){
  const { currentPlayList } = currentPlayStore(); // 获取当前播放列表
  const { isPlaying, setIsPlaying } = Isplaystore();// 获取和设置播放状态
  const { musicId, setMusicId } = MusicIdstore(); // 获取当前播放音乐的 ID
  const audioPlayer = useRef<HTMLAudioElement | null>(null);// 创建 audio 元素引用
  const progressBar = useRef<HTMLInputElement | null>(null);
  const [volume, setVolume] = useState(0.5);// 音量控制状态，范围 0 到 1
  const [duration, setDuration] = useState<number>(0);
  const [currentPlayedTime, setCurrentPlayedTime] = useState<number>(0);
  let animationId: number;
   // 根据 musicId 获取当前播放的歌曲
  const song = currentPlayList[musicId] || { songUrl: "", title: "Unknown", duration: "0:00" };
  

  useEffect(() => {
    const handleLoadedMetadata = () => {
      const second: number = Math.floor(audioPlayer?.current?.duration || 0);
      setDuration(second);
      progressBar.current?.setAttribute('max', `${second}`);
    };

    if (audioPlayer.current) {
      audioPlayer.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      if (audioPlayer.current) {
        audioPlayer.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, []);

  useEffect(() => {
    const second: number = Math.floor(audioPlayer?.current?.duration || 0);
    setDuration(second);
    progressBar.current?.setAttribute('max', `${second}`);
  }, [audioPlayer.current?.onloadedmetadata]);

  const sliding = () => {
    if(progressBar.current){
    progressBar.current!.value = `${audioPlayer.current?.currentTime}` || '0';
    setCurrentPlayedTime(parseInt(progressBar.current?.value || '0', 10));

    progressBar.current?.style.setProperty(
      '--selected-region',
      `${(parseInt(progressBar.current?.value || '0', 10) / duration) * 100}%`
    );
    animationId = requestAnimationFrame(sliding);}
  };

  useEffect(() => {
    if (audioPlayer.current) {
       audioPlayer.current.addEventListener('timeupdate', sliding);
    }
    return () => {
       if (audioPlayer.current) {
         audioPlayer.current.removeEventListener('timeupdate', sliding);
       }
    };
   }, [audioPlayer.current]);

  const calculateTime = (second: number) => {
    const hours: number = Math.floor(second / 3600);
    const returnedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const minutes: number = Math.floor((second % 3600) / 60);
    const returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
    const seconds: number = Math.floor(second % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedHours == '00' ? '' : returnedHours + ':'}${returnedMinutes}:${returnedSeconds}`;
  };


  const changeRange = () => {
    const currentTimeInSeconds = parseInt(progressBar.current?.value || '0', 10);

    if (!isNaN(currentTimeInSeconds)) {
      audioPlayer.current!.currentTime = currentTimeInSeconds;
    }
    progressBar.current?.style.setProperty(
      '--selected-region',
      `${(parseInt(progressBar.current?.value || '0', 10) / duration) * 100}%`
    );
  }
  
  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.volume = volume;
    }
  }, [volume]);

  // 处理播放/暂停功能
  const handlePlay = () =>{
    if(!isPlaying&&audioPlayer.current){
      audioPlayer.current.play();
      setIsPlaying(true);// 更新播放状态
    }else if(audioPlayer.current){
      setIsPlaying(false);
      setCurrentPlayedTime(audioPlayer.current.currentTime);// 更新播放状态
    }
  }

    // 当 isPlaying 或 song.songUrl 变化时触发播放或暂停
    useEffect(() => {
      if ( audioPlayer.current && song.songUrl !== audioPlayer.current.src) {
        audioPlayer.current.src = song.songUrl;
        
        if(isPlaying){
        audioPlayer.current.play();
      } else if (audioPlayer.current) {
        audioPlayer.current.pause();
      }}
    }, [isPlaying, song.songUrl]); // 添加依赖项 


  
  const handlePrevSong = () => {
    const newId = musicId > 0 ? musicId - 1 : currentPlayList.length - 1;
    setMusicId(newId);
  }

  const handleNextSong = () => {
    const newId = musicId < currentPlayList.length - 1 ? musicId + 1 : 0;
    setMusicId(newId);
  }

  // 监听 musicId 变化，自动播放新歌曲
  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.src = song.songUrl;
      audioPlayer.current.load(); 
      if (isPlaying) {
        audioPlayer.current.play().catch(error => {
          console.error('Failed to play audio:', error);
        });
      }
    }
  }, [musicId, isPlaying, song.songUrl] );
  

    return (

      <div className="bottom-0 h-[83px] w-full border-b-inherit border  bg-white fixed flex z-10">
        <div id="music-line" className="absolute w-[100%] h-[3px] bg-gray-200 ">
          <div id="line" >
          <input
          ref={progressBar}
          type="range"
          min="0"
          max={duration}
          value={currentPlayedTime}
          onChange={() => changeRange()}
          className="progress-bar progress-point absolute h-[100%] w-[100%] bg-yellow-400 "
         
          />
          </div>
        </div>
          <div className=" mt-[19px] ml-[0px]"><img src={song.imgUrl} className=" w-[49px] border rounded-[7px] absolute"></img>
            <div id="name" className="absolute mt-[4px] ml-[57px] text-[14.5px]">{song.title}</div>
            <div id="current-time" className="absolute mt-[25px] ml-[58px] text-[14.5px]">{calculateTime(currentPlayedTime)}</div>
            <div className="absolute mt-[25px] ml-[92px] text-[14.5px]">/</div>
            <div id="time" className="absolute mt-[25px] ml-[100px] text-[14.5px]">{song.duration}</div>
            <div className="absolute text-[14px] ml-[132px] mt-[25px] bg-yellow-400 h-[21px] w-[45px] pl-[8px] pb-[10px] border rounded-l-[10px] rounded-r-[2px]">suno</div></div>
          <div className="flex  w-[100px] h-[60px] ml-[510px]">
          
            
            
            <div className=" ml-[20px] mt-[35px] "><FiHeart size={18} className="text-gray-500 " /></div>
            <button onClick={handlePrevSong}><GiPreviousButton size={26} color="#ffc93c" className="mt-[30px] ml-[20px]"/></button>
            <button  onClick={handlePlay}>
              {isPlaying?
              (<GiPauseButton  size={40} className=" bg-yellow-400  mt-[22px] ml-[17px] pl-[3px] rounded-full  "/>):
              (<CgPlayButton size={40} className=" bg-yellow-400 mt-[22px] ml-[17px] pl-[3px] rounded-full  "/>)}
              </button>
            <button onClick={handleNextSong} ><GiNextButton size={25} color="#ffc93c" className="mt-[30px] ml-[20px]"/></button>
            
            
            <div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="absolute text-xl text-gray-500 mt-[30px] ml-[10px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"></path></svg></div>
          </div>
          <div className="flex  ml-[468px]" >
            <div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="absolute mt-[32px] text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg></div>
            <div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="absolute mt-[32px] ml-[36px] text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8L760 344z"></path></svg></div>
            <div><input min="0" max="1" step="0.01" className=" ml-[68px] mt-[34px] volume-slider mx-2 appearance-none bg-slate-300 rounded-lg" type="range" value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))}></input></div>
          </div>


          <audio ref={audioPlayer}/>


        </div>
  );
}
function setProgress(arg0: any) {
  throw new Error("Function not implemented.");
}



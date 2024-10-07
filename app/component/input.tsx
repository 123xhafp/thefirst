'use client'

import { useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { FaHeart, FaWifi } from "react-icons/fa6";
import { IoIosArrowDown, IoMdMusicalNote, IoMdRadio } from "react-icons/io";
import { IoPlayCircleOutline, IoSunnyOutline } from "react-icons/io5";
import { LuCupSoda, LuParkingCircle } from "react-icons/lu";
import { MdAudioFile, MdLocalFireDepartment } from "react-icons/md";
import { PiMedalDuotone } from "react-icons/pi";
import { SlEnvolopeLetter } from "react-icons/sl";

export function Input() {
  const [guang, setGuang] = useState(0);

  const handleguang=()=>{
    if(guang==0){
      setGuang(1);
    }else{
      setGuang(0);
    }

  }
  return (
    <div className=" h-[80px] w-full border-b-inherit border  fixed bg-white z-10"> 
    <div className="flex">
    <img src=" https://app.suno.is/logo.png" className="w-16 h-16 ml-5 mt-2"></img>
    
    <div className=" ml-3 mt-6 text-2xl font-medium">
    Melodisco
    </div>
    <div className=" text-bs ml-[40px] mt-[30px]">
    Pricing
    </div>
    <div className=" ml-[755px] mt-[30px] ">
      <button onClick={handleguang}>
    {(guang==0)?(<BsMoonStars size={18}/>):(<IoSunnyOutline size={18}/>)}
    </button>
    </div>
    <div className=" w-[90px] h-10 mt-5 border border-b-inherit flex ml-[16px]">
    <select id="language" name="language">
            <option value="chinese">English</option>
            <option value="English">中文</option>
            <option value="Jopan">日本語</option>
            <option value="bangyu">한국어</option>
    </select>
    </div>
    <div className=" bg-yellow-400 w-[77px] h-10 my-5 ml-[15px] pl-4 pt-2.5 rounded-md text-sm">
    Sign in
    </div>
    </div>
    </div>
  );
}
export function Shu(){
  
  return(
    <div className=" top-[80px] w-[280px] h-[498px] border border-r-inherit fixed">
    <div className="absolute w-[220px] h-[380px] overflow-y-auto">
    <div className=" pl-7 mt-8 mb-2 px-4 text-sm font-semibold tracking-tight">Music</div>
    <div className=" h-9 mb-1">
      <div className="absolute left-[30px] py-2.5 ">
      <IoMdMusicalNote />
      </div>
      <div className="absolute py-2 left-[50px] text-primary text-sm hover:text-primary">
      <a href="http://localhost:3000">Discover</a>
      </div>
    </div>
    <div className=" h-9 mb-1">
    <div className="absolute left-[30px] py-2.5 ">
    <MdLocalFireDepartment />
      </div>
      <div className="absolute py-2 left-[50px] text-primary text-sm hover:text-primary">
      <a href="http://localhost:3000/trending">Trending</a>
      </div>
    </div>
    <div className="h-9 mb-1">
    <div className="absolute left-[30px] py-2.5 ">
    <FaWifi />
      </div>
      <div className="absolute py-2 left-[50px] text-primary text-sm hover:text-primary">
        <a href="http://localhost:3000/newest">Newest</a>
      </div>
    </div>
    <div className="h-9 mb-1">
    <div className="absolute left-[30px] py-2.5 ">
    <IoMdRadio />
      </div>
      <div className="absolute py-2 left-[50px] text-primary text-sm hover:text-primary">
      <a href="http://localhost:3000/roaming">Roaming</a>
      </div>
    </div>
    <div className=" pl-7 mt-8 mb-2 px-4 text-sm font-semibold tracking-tight">Library</div>
    <div className="h-9 mb-1">
    <div className="absolute left-[30px] py-2.5 ">
    <FaHeart />
      </div>
      <div className="absolute py-2 left-[50px] text-primary text-sm hover:text-primary">
      <a href=""></a>Favorites
      </div>
    </div>
    <div className="h-9 mb-1">
    <div className="absolute left-[30px] py-2.5 ">
    <IoPlayCircleOutline />
      </div>
      <div className="absolute py-2 left-[50px] text-primary text-sm hover:text-primary">
      <a href=""></a>Recently
      </div>
    </div>
    <div className="h-9 mb-1">
    <div className="absolute left-[30px] py-2.5 ">
    <PiMedalDuotone />
      </div>
      <div className="absolute py-2 left-[50px] text-primary text-sm hover:text-primary">
      <a href=""></a>Creations
    </div>
    </div>
    <div className=" pl-7 mt-8 mb-2 px-4 text-sm font-semibold tracking-tight">Tool</div>
    <div className="h-9 mb-[130px]">
    <div className="absolute left-[30px] py-2.5 ">
    <MdAudioFile />
      </div>
      <div className="absolute py-2 left-[50px] text-primary text-sm hover:text-primary">
      <a href=""></a>Greate Music
    </div>
    </div>
    </div>
    <div className="absolute w-[280px] h-[118px]  top-[380px] ">
    <div className="absolute top-[7px] left-[34px]">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"></path></svg>
    </div>
    <div className="absolute top-[7px] left-[80px] ">
    <LuParkingCircle />
    </div>
    <div className="absolute top-[7px] left-[120px] ">
    <LuCupSoda />
    </div>
    <div className="absolute top-[7px] left-[160px] ">
    <SlEnvolopeLetter />
    </div>
    <div className="absolute text-xs top-[41px] left-[15px]">
      <a href="https://app.suno.is/privacy-policy">Privacy Policy</a>
    </div>
    <div className="absolute text-xs top-[41px] left-[108px]">
      <a href="https://app.suno.is/terms-of-service">Terms of Service</a>
    </div>
    </div>
    </div>
  );
}
 

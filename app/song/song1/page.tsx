import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-white h-[3000px] w-[990px] ml-[280px] pt-[110px] pl-[40px] pr-[40px]">
      <div className=" flex"><a href="#" className=" text-sm flex">Home<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right "><path d="m9 18 6-6-6-6"></path></svg></a><a href="#" className=" text-sm flex">Roaming<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right "><path d="m9 18 6-6-6-6"></path></svg></a><a href="#" className=" text-yellow-400 text-sm flex">Golden Sunshine 윤아</a></div>
      <div className=" bg-base-100 h-[230px] border-b">
      <ul>
        <li className=" float-left"><div className="h-[160px] w-[160px] mt-8"><img src="https://app.suno.is/_next/image?url=https%3A%2F%2Fcdn1.suno.ai%2Fimage_458b08de-274b-431b-94ce-6cfd739e163e.png&w=384&q=75" alt="" className="rounded-[8px]"></img></div></li>
        <li className=" float-left"><div className="h-[144px] w-[350px] flex flex-col mt-9 ml-8">
          <p className=" text-[21px]">Golden Sunshine 윤아</p>
          <p className=" mt-2">bossa nova, uk drill, electric piano</p>
          <p className=" flex mt-2">March 10th, 2024<div className=" bg-yellow-400 rounded-[12px] h-[20px] w-[52px] flex ml-2"><p className="pl-2">suno</p></div></p>
          <div className="flex h-[61px] w-[350px] mt-4">
              <button className="flex bg-yellow-400 h-[36px] w-[80px] rounded-[6px] pl-2 pt-1.5 gap-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M10 8.64 15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"></path></svg>Play</button>
              <button className=" flex bg-gray-200 h-[36px] w-[100px] rounded-[6px] ml-4 pt-1.5 pl-2 gap-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z" opacity=".1"></path><path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z"></path></svg>448655</button>
              <button className=" flex bg-gray-200 h-[36px] w-[80px] rounded-[6px] ml-4 pt-1.5 pl-2 gap-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path></svg>5941</button>
              <button className=" flex bg-gray-200 h-[36px] w-[40px] rounded-[6px] ml-4 pt-2 pl-2 gap-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg></button>
          </div>
          </div></li>
      </ul>
      </div>
      <div className=" bg-base-100 w-[1000px] h-[1500px] flex ">
      <div className="bg-base-100 h-[1500px] w-[650px] mt-[45px] leading-8">
        <h1 className=" text-[18px] ">Lyrics</h1>
        <div className=" h-[270px] bg-base-100 mt-[60px]">
          Ho-Ohhhh<br/>
          Baby<br/>
          [Verse]<br/>
          You can be my golden sunshine<br/>
          Baby<br/>
          You can be the one I call mine<br/>
          Ho-oh<br/><br/>
          [Chorus]<br/>
          When it's cold at night you can warm me up<br/>
          All right<br/>
          When it's cold at night you can warm me up<br/>
          All right<br/><br/>
          [Verse]<br/>
          We can play undercovers<br/>
          Oh-oh<br/>
          We can play like lovers<br/>
          Oh-oh<br/><br/>
          [Chorus]<br/>
          When it's cold at night you can warm me up<br/>
          All right<br/>
          When it's cold at night you can warm me up<br/>
          All right<br/><br/><br/><br/>
          Here and now with you, put me down for two<br/>
          all right<br/><br/>
          [Chorus]<br/>
          You can be my golden sunshine<br/> 
          hey-ey<br/>
          You can be the one I call mine<br/>
          Ho-oh<br/>
          When it's cold at night you can warm me up<br/>
          All right<br/>
          When I'm empty you can fill me up<br/>
          All right, all right<br/><br/>
          [Scat]<br/>
          [End]<br/><br/>
          Chorus, Strong Emotional, Outro<br/>
          You can be my golden sunshine <br/>
          Baby<br/>
          You can be the one I call mine<br/>
          Ho-oh<br/>
          When it's cold at night you can warm me up<br/>
          Ha-oh<br/>
          When it's cold at night you can warm me up<br/>
          All right<br/>
          [Fade]<br/>
          [End]<br/><br/>
          [End]
        </div>
      </div>
      <div className=" bg-base-100 h-[1800px] w-[390px] mt-[45px] border-l ">
        <h2 className="pl-9 pt-6 text-[20px] h-[80px]">Recommended</h2>
        <div className="h-[75px] w-[320px] bg-base-100 flex ml-9 border-b">
          <img src="https://app.suno.is/_next/image?url=https%3A%2F%2Fcdn1.suno.ai%2Fimage_abe47354-0c39-4914-bdc2-d53b85213fc2.png&w=128&q=75" alt=""  className="h-[64px] w-[64px] rounded-[8px]"/>
          <div className="pl-[10px]">
            <a href="#" className="h-[20px]">cizas</a>
            <p className="h-[20px]">church organy,melodyjne tec...</p>
          </div>
        </div>
        <div className="h-[75px] w-[320px] bg-base-100 flex ml-9 mt-1 border-b">
          <img src="https://app.suno.is/_next/image?url=https%3A%2F%2Fcdn1.suno.ai%2Fimage_4dd62ed1-f140-450c-9a19-539d833db030.png&w=128&q=75" alt=""  className="h-[64px] w-[64px] rounded-[8px]"/>
          <div className="pl-[10px]">
            <a href="#" className="h-[20px]">cizas</a>
            <p className="h-[20px]">church organy,melodyjne tec...</p>
          </div>
        </div>
        <div className="h-[75px] w-[320px] bg-base-100 flex ml-9 mt-1 border-b">
          <img src="https://app.suno.is/_next/image?url=%2Fcover.png&w=128&q=75" alt=""  className="h-[64px] w-[64px] rounded-[8px]"/>
          <div className="pl-[10px]">
            <a href="#" className="h-[20px]">cizas</a>
            <p className="h-[20px]">church organy,melodyjne tec...</p>
          </div>
        </div>
        <div className="h-[75px] w-[320px] bg-base-100 flex ml-9 mt-1 border-b">
          <img src="https://app.suno.is/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FC9yUr1FL21Q6JwfYYh2ozQ%2Ff2100f9d-36d2-4d44-4586-ad297e080e00%2Fpublic&w=128&q=75" alt=""  className="h-[64px] w-[64px] rounded-[8px]"/>
          <div className="pl-[10px]">
            <a href="#" className="h-[20px]">cizas</a>
            <p className="h-[20px]">church organy,melodyjne tec...</p>
          </div>
        </div>
        <div className="h-[75px] w-[320px] bg-base-100 flex ml-9 mt-1 border-b">
          <img src="https://app.suno.is/_next/image?url=https%3A%2F%2Fcdn1.suno.ai%2Fimage_abe47354-0c39-4914-bdc2-d53b85213fc2.png&w=128&q=75" alt=""  className="h-[64px] w-[64px] rounded-[8px]"/>
          <div className="pl-[10px]">
            <a href="#" className="h-[20px]">cizas</a>
            <p className="h-[20px]">church organy,melodyjne tec...</p>
          </div>
        </div>
        <div className="h-[75px] w-[320px] bg-base-100 flex ml-9 mt-1 border-b">
          <img src="https://app.suno.is/_next/image?url=https%3A%2F%2Fcdn1.suno.ai%2Fimage_abe47354-0c39-4914-bdc2-d53b85213fc2.png&w=128&q=75" alt=""  className="h-[64px] w-[64px] rounded-[8px]"/>
          <div className="pl-[10px]">
            <a href="#" className="h-[20px]">cizas</a>
            <p className="h-[20px]">church organy,melodyjne tec...</p>
          </div>
        </div>
        <div className="h-[75px] w-[320px] bg-base-100 flex ml-9 mt-1 border-b">
          <img src="https://app.suno.is/_next/image?url=https%3A%2F%2Fcdn1.suno.ai%2Fimage_abe47354-0c39-4914-bdc2-d53b85213fc2.png&w=128&q=75" alt=""  className="h-[64px] w-[64px] rounded-[8px]"/>
          <div className="pl-[10px]">
            <a href="#" className="h-[20px]">cizas</a>
            <p className="h-[20px]">church organy,melodyjne tec...</p>
          </div>
        </div>
        <div className="h-[75px] w-[320px] bg-base-100 flex ml-9 mt-1 border-b">
          <img src="https://app.suno.is/_next/image?url=https%3A%2F%2Fcdn1.suno.ai%2Fimage_abe47354-0c39-4914-bdc2-d53b85213fc2.png&w=128&q=75" alt=""  className="h-[64px] w-[64px] rounded-[8px]"/>
          <div className="pl-[10px]">
            <a href="#" className="h-[20px]">cizas</a>
            <p className="h-[20px]">church organy,melodyjne tec...</p>
          </div>
        </div>
        <div className="h-[75px] w-[320px] bg-base-100 flex ml-9 mt-1 border-b">
          <img src="https://app.suno.is/_next/image?url=https%3A%2F%2Fcdn1.suno.ai%2Fimage_abe47354-0c39-4914-bdc2-d53b85213fc2.png&w=128&q=75" alt=""  className="h-[64px] w-[64px] rounded-[8px]"/>
          <div className="pl-[10px]">
            <a href="#" className="h-[20px]">cizas</a>
            <p className="h-[20px]">church organy,melodyjne tec...</p>
          </div>
        </div>
        <div className="h-[75px] w-[320px] bg-base-100 flex ml-9 mt-1 border-b">
          <img src="https://app.suno.is/_next/image?url=https%3A%2F%2Fcdn1.suno.ai%2Fimage_abe47354-0c39-4914-bdc2-d53b85213fc2.png&w=128&q=75" alt=""  className="h-[64px] w-[64px] rounded-[8px]"/>
          <div className="pl-[10px]">
            <a href="#" className="h-[20px]">cizas</a>
            <p className="h-[20px]">church organy,melodyjne tec...</p>
          </div>
        </div>
        <div className="h-[75px] w-[320px] bg-base-100 flex ml-9 mt-1 border-b">
          <img src="https://app.suno.is/_next/image?url=https%3A%2F%2Fcdn1.suno.ai%2Fimage_abe47354-0c39-4914-bdc2-d53b85213fc2.png&w=128&q=75" alt=""  className="h-[64px] w-[64px] rounded-[8px]"/>
          <div className="pl-[10px]">
            <a href="#" className="h-[20px]">cizas</a>
            <p className="h-[20px]">church organy,melodyjne tec...</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
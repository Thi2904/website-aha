import Button from "@/src/components/Button/Button";
import {Calendar, MapPin, Clock} from "lucide-react";


export default function WinnersNightHero() {
  return (
    <div className="w-full min-h-screen overflow-hidden relative bg-[#0F1420]">
      <img 
        src="/BackgroundImage/hangngocrong.jpg"
        alt="Winners Night Background"
        className="absolute inset-0 w-full h-full opacity-30 mix-blend-luminosity object-cover"
      />
      <img 
        src="/BackgroundImage/background.png"
        alt="Winners Night Overlay"
        className="absolute inset-0 w-full h-full mix-blend-screen object-cover"      
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
        <img 
          src="/logoLandingPage/logo.png"
          alt="Winners Night Logo"
          className="w-[300px] h-auto"
        />
        <div className="flex flex-col justify-center items-center mt-20">
          <p 
            className="text-[100px] h-[165px] font-normal"
            style={{
              background: `
                linear-gradient(270deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 11.79%, rgba(255,255,255,0) 25.24%, rgba(255,255,255,0.7) 29.5%, rgba(255,255,255,0) 34.37%, rgba(255,255,255,0) 46.32%, rgba(255,255,255,0.7) 56.11%, rgba(255,255,255,0) 68.56%, rgba(255,255,255,0.7) 89%, rgba(255,255,255,0) 96.5%),
                linear-gradient(134.67deg, rgba(255,255,255,0.25) 21.67%, rgba(255,255,255,0) 62.39%),
                #C48F7F
              `,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",

            }}
          >
            <i>W</i>INNERS' NIGHT
          </p>
          <img 
            src="/frame/hightlight.png"
            className="absolute top-22"
          />
          <p
            className="text-[35px] h-[54px] font-normal"
            style={{
              background: `
                linear-gradient(270deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 11.79%, rgba(255,255,255,0) 25.24%, rgba(255,255,255,0.7) 29.5%, rgba(255,255,255,0) 34.37%, rgba(255,255,255,0) 46.32%, rgba(255,255,255,0.7) 56.11%, rgba(255,255,255,0) 68.56%, rgba(255,255,255,0.7) 89%, rgba(255,255,255,0) 96.5%),
                linear-gradient(134.67deg, rgba(255,255,255,0.25) 21.67%, rgba(255,255,255,0) 62.39%),
                #C48F7F
              `,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",

            }}
          >
            2026 ASIA HOSPITALITY AWARDS
          </p>
        </div>
        <div className="flex flex-row gap-10 mt-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <Calendar className="text-white block" />
            <p className="text-white">26 June 2026</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <MapPin className="text-white block" />
            <p className="text-white text-[20px] uppercase">Dragon Pearl Cave</p>
            <p className="text-white text-[11px]">CAM PHA, QUANG NINH, VIETNAM</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Clock className="text-white block" />
            <p className="text-white">Time: 7:00 PM</p>
          </div>
        </div>
        <p 
          className="uppercase text-[32px] mt-10"
          style={{
            background:`
              linear-gradient(90deg, #F4DDD5 0%, #C48F7F 100%)
            `,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "25px",
          }}

        >
          the world’s first award ceremony inside a natural cave!
        </p>
        <button 
          className="text-white rounded p-4 mt-5 uppercase"
          style={{
            background: `linear-gradient(90deg, #F4DDD5 0%, #C48F7F 100%)`,           
          }}
        >
          Participate Now
        </button>
      </div>

    </div>
  );
}
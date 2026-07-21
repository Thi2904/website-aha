import { ChevronDown } from "lucide-react";

export default function FirstSection() {
    return (
        <div className="h-[905px] w-full bg-[url('/BackgroundImage/img3.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
            <img className="w-[975px] h-[378px]" src="/AHALogo/AHA25_BackdropText_2.png" alt="" />
            <div className="w-[880px] text-[18px] text-white">
                <span className="text-[#C48F7F]">The Asia Hospitality Awards</span> aspires to provide a global program that constantly make innovative breakthrough in hospitality industry where benchmarks are easily accessible. The journey that acknowledges identification and values of great accomplishment in this ever-changing modernization world.
            </div>
            <button className="w-[360px] h-[45px] text-white bg-[#C48F7F] mt-10">EXPLORE THE CATEGORIES</button>
            <p className="mt-75 text-white flex flex-row w-[294px] justify-around"><ChevronDown className="animate-bounce" size={20} strokeWidth={2} />Scroll down for more information</p>
        </div>
    );

}
import { ChevronDown } from "lucide-react";

export default function FirstSection() {
    return (
        <div className="h-[905px] w-full bg-[url('/BackgroundImage/img3.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
            <p className="text-center text-white text-[28px] font-normal">UNCOVER</p>
            <img className="w-[975px] h-[378px]" src="/AHALogo/AHA25_BackdropText_2.png" alt="" />
            <div className="w-[880px] text-[18px] text-white text-center">
                Embracing the theme of <span className="text-[#C48F7F]"> “Influential Asia”, </span>the <span className="text-[#C48F7F]"> 2026 Asia Hospitality Awards </span> embarks on a mission to honor outstanding projects across diverse sectors in travel and hospitality industry. Beyond recognition, AHA serves as a conduit, weaving together enterprises from various corners of the continent's tourism landscape, fostering collaboration to collectively propel the growth of the entire travel industry in Asia.
            </div>
        </div>
    );

}
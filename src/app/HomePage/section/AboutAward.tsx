import {ArrowRight} from "lucide-react";

export default function AboutAward() {
    return(
        <div className="w-full min-h-screen relative overflow-hidden">
            <img 
                src="/BackgroundImage/black-background-with-white-line-that-says-blue.jpg"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="flex flex-col gap-2 justify-center items-center absolute inset-0 w-full h-full">
                <img 
                    src="/AHALogo/AHA25_BackdropText_1.png"
                    className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] h-auto"
                />
                <div className="flex flex-col gap-6 justify-center items-center w-[70%]">
                    <p className="text-[#F4DDD5] text-normal text-[18px] text-center">
                        Experience the extraordinary evolution of Asia’s hospitality industry at the 2026 Asia Hospitality Awards (AHA), proudly presented by the Asia Awards Organization. 
                    </p>
                    <p className="text-[#F4DDD5] text-normal text-[18px] text-center">                       
                        This year’s edition unfolds under the compelling theme “Influential Asia,” celebrating the region’s rising impact on the global stage through excellence, innovation, and visionary leadership.
                    </p>
                    <p className="text-[#F4DDD5] text-normal text-[18px] text-center">                       
                        More than an awards ceremony, AHA is a distinguished platform that honors the pioneers and changemakers redefining hospitality across Asia. From heritage-rich resorts and boutique hotels to sustainable retreats and culinary trailblazers, this year’s honorees reflect a dynamic convergence of tradition and progress—shaping how the world experiences Asia, one remarkable story at a time.
                    </p>
                </div>
                <p className="text-[#F4DDD5] text-base text-[28px] mt-10 text-center">Welcome to the 2026 Asia Hospitality Awards - Influential Asia!</p>
                <a className="block border border-[1px] border-white min-w-[300px] h-[44px] flex flex-row justify-between mt-5">
                    <span className="text-white uppercase my-2 mx-2 block">about the award</span>
                    <ArrowRight className="text-white block my-2 mx-2"/>
                </a>
            </div>

        </div>
    );
}
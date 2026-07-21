export default function GalleryPage() {
    return (
        <div className="w-full mx-auto min-h-screen flex flex-col justify-center items-center mt-10 mb-20 px-4">
            <p className="text-[#C48F7F] text-[28px] md:text-[45px] mb-10">Gallery</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-10 w-full px-5 md:px-30">
                <div className="w-full h-[250px] md:h-[375px] relative overflow-hidden">
                    <img className="w-full h-full object-cover" src="/imggla/1.jpg" alt="" />
                    <a className="text-[14px] md:text-[18px] text-white font-bold absolute bottom-3 md:bottom-5 left-3 md:left-5" href="">2023 AADA Winners' Night</a>
                </div>
                <div className="w-full h-[250px] md:h-[375px] relative overflow-hidden">
                    <img className="w-full h-full object-cover" src="/imggla/2.jpg" alt="" />
                    <a className="text-[14px] md:text-[18px] text-white font-bold absolute bottom-3 md:bottom-5 left-3 md:left-5" href="">Winners' Night - Hall Of Fame</a>
                </div>
                <div className="w-full h-[250px] md:h-[375px] relative overflow-hidden">
                    <img className="w-full h-full object-cover" src="/imggla/3.jpg" alt="" />
                    <a className="text-[14px] md:text-[18px] text-white font-bold absolute bottom-3 md:bottom-5 left-3 md:left-5" href="">Winners' Night - Moments</a>
                </div>
                <div className="w-full h-[250px] md:h-[375px] relative overflow-hidden">
                    <img className="w-full h-full object-cover" src="/imggla/4.jpg" alt="" />
                    <a className="text-[14px] md:text-[18px] text-white font-bold absolute bottom-3 md:bottom-5 left-3 md:left-5" href="">Winners' Night - Speech</a>
                </div>
            </div>

            <a
                href="/media-center"
                className="border border-[#222D43] text-[#222D43] text-[12px] md:text-[14px] tracking-wide px-6 md:px-10 py-3 md:py-4 hover:bg-[#222D43] hover:text-white transition-colors"
            >
                EXPLORE ALL
            </a>
        </div>
    );
}
export default function FirstSection() {
    return (
        <div className="flex flex-col relative justify-center gap-5 items-center overflow-hidden w-full min-h-screen bg-[#222D43] px-4 py-10">
            <img
                src="/imggla/6.jpg"
                className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
                alt=""
            />

            <div className="flex flex-row flex-wrap justify-center gap-5 z-10">
                <img className="w-[120px] h-[50px] sm:w-[160px] sm:h-[70px] md:w-[190px] md:h-[80px]" src="/logo/1.png" alt="" />
                <img className="w-[100px] h-[65px] sm:w-[130px] sm:h-[85px] md:w-[160px] md:h-[100px]" src="/logo/2.png" alt="" />
            </div>

            <p className="uppercase z-10 text-white text-center text-lg sm:text-2xl md:text-[35px] font-bold">
                Congratulations to all the
            </p>

            <p className="uppercase z-10 font-bold text-center text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px] bg-gradient-to-r from-[#F4DDD5] to-[#C48F7F] bg-clip-text text-transparent leading-none">
                winners'
            </p>

            <p className="uppercase z-10 text-white text-center text-lg sm:text-2xl md:text-[35px] font-bold">
                Asia hospitality awards
            </p>
        </div>
    );
}
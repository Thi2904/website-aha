export default function LastSection() {
    return (
        <div className="flex justify-center items-center">
            <div className="relative w-[1060px] h-[160px] bg-[#222D43] mb-2 overflow-hidden mb-20">
                <div
                    className="absolute z-1 h-full aspect-[160/160] left-0 bg-[#C48F7F]"
                    style={{
                        WebkitMaskImage: "url('/frame/Frame_9.svg')",
                        maskImage: "url('/frame/Frame_9.svg')",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                    }}
                />
                <div
                    className="absolute z-1 h-full aspect-[160/160] right-0 rotate-180 bg-[#C48F7F]"
                    style={{
                        WebkitMaskImage: "url('/frame/Frame_9.svg')",
                        maskImage: "url('/frame/Frame_9.svg')",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                    }}
                />
                <div className="absolute inset-0 flex flex-row justify-around items-center mx-10 ">
                    <img
                        src="/AHALogo/LogoPink.svg"
                        alt="Logo"
                        className="w-[100px] h-[60px]"
                    />
                    <p className="text-[35px] text-white">Register Now</p>
                    <div className="">
                        <p className="text-white">CONTACT US</p>
                        <p className="text-[#C48F7F]">hello@ahawards.co</p>
                        <p className="text-[#C48F7F]">+65 9799 2280</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
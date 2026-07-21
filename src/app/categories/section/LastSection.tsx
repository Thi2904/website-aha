export default function LastSection() {
    return (
        <div className="flex justify-center items-center">
            <div className="relative w-[1060px] h-[160px] bg-[#111826] mb-2 overflow-hidden mb-20">
                <img src="/BackgroundImage/harmonyBG.jpg" className="absolute -top-50 opacity-55 mix-blend-screen " alt="" />
                <div
                    className="absolute z-1 h-full aspect-[160/160] left-0"
                    style={{
                        WebkitMaskImage: "url('/frame/Frame_9.svg')",
                        maskImage: "url('/frame/Frame_9.svg')",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        backgroundImage: "url('/BackgroundImage/rose-gold-metal-texture-background.jpg')",
                        backgroundSize: "cover",
                    }}
                />
                <div
                    className="absolute z-1 h-full aspect-[160/160] right-0 rotate-180"
                    style={{
                        WebkitMaskImage: "url('/frame/Frame_9.svg')",
                        maskImage: "url('/frame/Frame_9.svg')",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        backgroundImage: "url('/BackgroundImage/rose-gold-metal-texture-background.jpg')",
                        backgroundSize: "cover",
                    }}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center ">
                    <p
                        className="text-[50px] bg-no-repeat bg-cover bg-clip-text text-transparent"
                        style={{
                            WebkitMaskSize: "contain",
                            maskSize: "contain",
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundImage: "url('/BackgroundImage/rose-gold-metal-texture-background.jpg')"
                        }}
                    >
                        Ready to Submit
                    </p>
                    <button className="border border-[1px] text-white text-center border-[#C48F7F] w-[244px] h-[44px]">Register Now</button>
                </div>
            </div>
        </div>
    );
}
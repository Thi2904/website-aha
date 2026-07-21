type Props = {
    title: string,
    description?: string,
};

export default function CardCategory({ title, description }: Props) {
    return (
        <div className="w-[550px] h-[166px]">
            <div className="relative w-full h-[75px] rounded-xl bg-[#111826] mb-2 overflow-hidden">
                <img src="/BackgroundImage/harmonyBG.jpg" className="absolute -top-50 opacity-55 mix-blend-screen " alt="" />
                <div
                    className="absolute z-1 h-full aspect-[76/75] left-0 rounded-xl"
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
                    className="absolute z-1 h-full aspect-[76/75] right-0 rotate-180 rounded-xl"
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
                <div className="absolute inset-0 flex flex-row ml-15 mb-2 items-center gap-5">
                    <img src="/AHALogo/LogoWhite.svg" className="h-[75px] w-[76px]" alt="" />
                    <p className="text-white uppercase font-bold w-[284px]">{title}</p>
                </div>
            </div>
            <p className="w-full text-[15px] mt-5">{description}</p>
        </div>
    );
}
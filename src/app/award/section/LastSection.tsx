export default function LastSection() {
    return (
        <div className="flex justify-center items-center bg-[white] h-[270px] w-full ">
            <div className="bg-[#111826] relative w-[73%] h-[160px] overflow-hidden">
                <img src="/BackgroundImage/harmonyBG.jpg" className="absolute opacity-55 mix-blend-screen" alt="" />
                <div className="relative z-10 flex h-full flex-row justify-center items-center">
                    <p className="text-[25px] text-[#C48F7F] mr-20">
                        INTERESTED IN <b>SPONSORSHIP?</b>
                    </p>
                    <button className="w-[240px] h-[40px] text-[#C48F7F] border-[#C48F7F] border-[1px]">Become our Exclusive Partner</button>
                </div>
            </div>
        </div>
    );
}
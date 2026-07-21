export default function FirstSection() {
    return (
        <div className="w-full relative min-h-screen bg-[url('/image/image2.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2  z-10">
                <p className="uppercase text-[#F4DDD5] text-[20px] text-center">Contribute to a better asia with us by</p>
                <p className="w-[950px] text-[150px] text-center bg-[url('/BackgroundImage/rose-gold-metal-texture-background.jpg')] bg-cover bg-no-repeat bg-center text-transparent bg-clip-text">Becoming Our Sponsor</p>
                <button className="w-[456px] h-[55px] bg-[#C48F7F] border border-[1px] border-[#FFFFFF] text-[#F4DDD5]">Contact Us</button>
            </div>
            <div className="absolute inset-0 bg-[#222D4380] opacity-50"></div>

        </div>
    );
}
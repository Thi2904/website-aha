export default function FirstSection() {
    return (
        <section className="relative w-full overflow-hidden bg-[#0F1830] py-24 md:py-32 px-6 md:px-20 min-h-screen flex flex-col justify-center items-center">
            <div
                className="pointer-events-none absolute inset-0 opacity-40 bg-[url('/BackgroundImage/background2.png')] bg-cover bg-center bg-no-repeat"
            />
            <div className="relative z-10 mx-auto max-w-4xl">
                <h1 className="font-condensed leading-[0.9] tracking-tight flex flex-col justify-center items-center ">
                    <span className="block font-bold uppercase text-[60px] md:text-[100px] text-center  text-[#C48F7F] bg-[url('/background/img2.jpg')] bg-cover bg-center bg-no-repeat bg-clip-text text-transparent">
                        Media Center
                    </span>
                </h1>
                <p className="mt-6 font-condensed text-[24px] md:text-[32px] text-white text-center tracking-wide">
                    Media center AHA
                </p>
            </div>
        </section>
    );
}
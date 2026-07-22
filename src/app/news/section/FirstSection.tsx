export default function FirstSection() {
    return (
        <section className="relative w-full overflow-hidden bg-[#0F1830] py-24 md:py-32 px-6 md:px-20 min-h-screen flex flex-col justify-center items-center">
            <div
                className="pointer-events-none absolute inset-0 opacity-40 bg-[url('/BackgroundImage/background2.png')] bg-cover bg-center bg-no-repeat"
            />
            <div className="relative z-10 max-w-6xl">
                <h1 className="font-condensed font-bold uppercase text-[78px] md:text-[140px] leading-[0.95] text-[#C48F7F] bg-[url('/background/img2.jpg')] bg-cover bg-center bg-no-repeat bg-clip-text text-transparent tracking-tight ">
                    Latest update
                </h1>
                <p className="mt-4 font-condensed text-[24px] md:text-[32px] text-center text-white tracking-wide">
                    FROM ASIA HOSPITALITY AWARDS 2026
                </p>
            </div>
        </section>
    );
}
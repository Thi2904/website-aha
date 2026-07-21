"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Slide = {
    img: string;
    title: string;
    subtitle: string;
    href?: string;
};

const slides: Slide[] = [
    {
        img: "/imggla/1.jpg",
        title: "2023 AADA Winners' Night",
        subtitle: "A Night to remember in Singapore",
    },
    {
        img: "/imggla/2.jpg",
        title: "Winners' Night - Hall Of Fame",
        subtitle: "Celebrating excellence across Asia",
    },
    {
        img: "/imggla/3.jpg",
        title: "Winners' Night - Moments",
        subtitle: "Highlights from the ceremony",
    },
    {
        img: "/imggla/4.jpg",
        title: "Winners' Night - Speech",
        subtitle: "Designing livable cities in Asia",
    },
];

export default function VideoSlider() {
    const [current, setCurrent] = useState(0);

    const goPrev = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goNext = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const activeSlide = slides[current];

    return (
        <div className="w-full flex flex-col items-center py-5 px-4">
            <p className="text-[#C48F7F] text-[28px] md:text-[45px] mb-10">Video</p>

            <div className="relative w-full max-w-6xl px-8 md:px-0">
                <button
                    onClick={goPrev}
                    aria-label="Previous slide"
                    className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 text-[#222D43] hover:text-[#C48F7F] transition-colors"
                >
                    <ArrowLeft size={28} className="md:w-10 md:h-10" strokeWidth={1.5} />
                </button>

                <div className="relative w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden">
                    <img
                        key={activeSlide.img}
                        src={activeSlide.img}
                        alt={activeSlide.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute bottom-3 md:bottom-6 lg:bottom-10 left-3 md:left-6 lg:left-10">
                        <p className="text-white text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] font-bold">
                            {activeSlide.title}
                        </p>
                        <p className="text-white text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] mt-1">
                            {activeSlide.subtitle}
                        </p>
                    </div>
                </div>

                <button
                    onClick={goNext}
                    aria-label="Next slide"
                    className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 text-[#222D43] hover:text-[#C48F7F] transition-colors"
                >
                    <ArrowRight size={28} className="md:w-10 md:h-10" strokeWidth={1.5} />
                </button>
            </div>

            <div className="flex gap-2 mt-4">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2 w-2 rounded-full transition-colors ${i === current ? "bg-[#C48F7F]" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>

            <a
                href="/media-center"
                className="mt-5 md:mt-6 border border-[#222D43] text-[#222D43] text-[12px] md:text-[14px] tracking-wide px-6 md:px-10 py-3 md:py-4 hover:bg-[#222D43] hover:text-white transition-colors"
            >
                EXPLORE ALL
            </a>
        </div>
    );
}
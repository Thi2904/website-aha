"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Slide = {
    img: string;
    title: string;
};

const slides: Slide[] = [
    { img: "/imggla/6.png", title: "2023 Hall of Fame Yearbook" },
    { img: "/imggla/6.png", title: "Start with why #01" },
    { img: "/imggla/6.png", title: "Start with why #02" },
    { img: "/imggla/6.png", title: "Start with why #03" },
    { img: "/imggla/6.png", title: "Start with why #04" },
];

export default function PDFAsset() {
    const [current, setCurrent] = useState(0);

    const goPrev = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goNext = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const visibleSlides = [0, 1, 2].map(
        (offset) => slides[(current + offset) % slides.length]
    );

    return (
        <div className="w-full flex flex-col items-center py-16 px-4">
            <p className="text-[#C48F7F] text-[28px] md:text-[45px] mb-10">PDF Assets</p>

            <div className="relative w-full max-w-6xl">
                <button
                    onClick={goPrev}
                    aria-label="Previous slide"
                    className="absolute -left-2 md:-left-16 top-1/2 -translate-y-1/2 z-10 text-[#222D43] hover:text-[#C48F7F] transition-colors"
                >
                    <ArrowLeft size={24} className="md:w-9 md:h-9" strokeWidth={1.5} />
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-8 md:px-0">
                    {visibleSlides.map((slide, i) => (
                        <div key={`${slide.title}-${i}`} className="flex flex-col items-center">
                            <div className="relative w-full h-[240px] md:h-[300px] lg:h-[380px] overflow-hidden">
                                <img
                                    src={slide.img}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute top-2 md:top-4 left-2 md:left-4 bg-[#B98D5A] text-white text-[11px] md:text-[14px] font-semibold px-3 md:px-4 py-1 md:py-1.5">
                                    PDF
                                </span>
                            </div>
                            <p className="mt-2 md:mt-4 text-[#222D43] text-[14px] md:text-[18px] lg:text-[20px] font-bold text-center">
                                {slide.title}
                            </p>
                        </div>
                    ))}
                </div>

                <button
                    onClick={goNext}
                    aria-label="Next slide"
                    className="absolute -right-2 md:-right-16 top-1/2 -translate-y-1/2 z-10 text-[#222D43] hover:text-[#C48F7F] transition-colors"
                >
                    <ArrowRight size={24} className="md:w-9 md:h-9" strokeWidth={1.5} />
                </button>
            </div>

            <a
                href="/media-center"
                className="mt-8 md:mt-10 border border-[#222D43] text-[#222D43] text-[12px] md:text-[14px] tracking-wide px-6 md:px-10 py-3 md:py-4 hover:bg-[#222D43] hover:text-white transition-colors"
            >
                EXPLORE ALL
            </a>
        </div>
    );
}
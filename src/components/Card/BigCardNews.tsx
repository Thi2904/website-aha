import React from "react";
import { ArrowRight } from "lucide-react";

type Props = {
    title: string;
    description: string;
    image?: string;
};

export default function BigCardNews({ title, description, image }: Props) {
    return (
        <div
            className="
                flex w-full max-w-[587px] flex-col
                shadow-[0px_6px_40px_0px_#1A1D1D1A]
                shadow-[0px_2px_4px_0px_#1A1D1D0D]
            "
        >
            <img src={image} className="h-[461px] w-full object-cover" alt="" />
            <div className="mt-6 flex flex-col gap-4 px-5 pb-10">
                <p className="line-clamp-2 text-[18px] font-bold text-[#222D43]">
                    {title}
                </p>
                <p className="line-clamp-3 text-[16px] text-[#9DA4AE]">
                    {description}
                </p>
                <a href="#" className="flex items-center gap-2 text-[#222D43] font-semibold">
                    See More <ArrowRight size={18} />
                </a>
            </div>
        </div>
    );
}
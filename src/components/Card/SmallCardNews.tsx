import React from "react";
import { ArrowRight } from "lucide-react";

type Props = {
    title: string;
    description: string;
    image?: string;
};

export default function SmallCardNews({ title, description, image }: Props) {
    return (
        <div className="
            flex w-full flex-row gap-4
            shadow-[0px_6px_40px_0px_#1A1D1D1A]
            shadow-[0px_2px_4px_0px_#1A1D1D0D]
            h-[200px]
        "
        >
            <img src={image} className="h-[200px] w-[200px] flex-shrink-0 object-cover" alt="" />
            <div className="flex flex-col justify-center gap-2 p-5">
                <p className="line-clamp-2 text-[15px] font-bold text-[#222D43]">
                    {title}
                </p>
                <p className="line-clamp-2 text-[13px] text-[#9DA4AE]">
                    {description}
                </p>
                <a href="#" className="flex items-center gap-1 text-[#222D43] text-sm font-semibold">
                    See More <ArrowRight size={16} />
                </a>
            </div>
        </div>
    );
}
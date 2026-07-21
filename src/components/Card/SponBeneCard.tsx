import React from 'react';

type Props = {
    title: string;
    icon?: React.ReactNode;
    description?: string;
};

export default function SponBeneCard({ title, icon, description }: Props) {
    return (
        <div className="w-[410px] h-[350px] border border-black border-[1px] relative pt-10">
            <div className="absolute -top-[38px] left-1/2 -translate-x-1/2 w-[76px] h-[76px] rounded-full border border-black bg-white flex items-center justify-center">
                {icon}
            </div>

            <div className="text-center text-[25px] font-bold px-[35px] mt-6 mb-4">
                {title}
            </div>
            <div className="text-justify text-[14px] leading-relaxed px-[35px] text-gray-700">
                {description}
            </div>
        </div>
    );
}
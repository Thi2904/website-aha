import React from 'react';

type Props = {
    title: string;
    description?: string;
};

export default function DWCard({ title, description }: Props) {
    return (
        <div className="w-[320px] h-[205px]">
            <p className="text-[22px] font-bold bg-gradient-to-r from-[#F4DDD5] to-[#C48F7F] bg-clip-text text-transparent mb-8">{title}</p>
            <p className="text-[12px] text-white">{description}</p>
        </div>
    );
}
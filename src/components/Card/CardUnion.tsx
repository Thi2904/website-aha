import React from "react";

type Props = {
    stepNumber: number;
    icon: React.ReactNode;
    description: string;
    image?: string;
    isFirst?: boolean;
    zIndex: number;
};

export default function CardUnion({
    stepNumber,
    icon,
    description,
    image,
    isFirst,
    zIndex,
}: Props) {
    return (
        <div
            className={`relative ${isFirst ? "" : "-ml-20"}`}
            style={{ zIndex }}
        >
            {image ? (
                <img src={image} />
            ) : (
                <div className="h-[427px] w-[296px] rounded-xl border border-[1px] border-[#C48F7F] bg-[#F4DDD5]" />
            )}

            <div className="absolute top-[20%] left-[20%] flex flex-col gap-4">
                <div className={`${isFirst ? "" : "ml-10"}  relative flex h-25 w-25 items-center justify-center rounded-[50%] bg-[#C48F7F]`}>
                    <div className="text-[30px] text-white">{icon}</div>
                </div>
                <div>
                    <h3 className={`${isFirst ? "" : "ml-15"} text-[24px] font-bold uppercase text-[#1C2A42]`}>
                        Step {stepNumber}
                    </h3>
                    <p className={`${isFirst ? "" : "ml-15"} text-[16px] font-semibold text-[#1C2A42] w-[110px]`}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
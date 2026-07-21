import React from 'react';

type Props = {
    title: string;
    icon?: React.ReactNode;
    description?: string;
};

export default function CardTimeLine({ title, icon, description }: Props) {
    return (
        <div className="card-timeline flex flex-row w-[700px] h-[70px] relative">
            <div style={{ background: 'linear-gradient(90deg, #F4DDD5 0%, #C48F7F 100%)' }} className=" flex flex-row items-center rounded-l min-w-[200px]">
                <p className="max-w-[150px] uppercase text-[18px] mx-5 text-center">{title}</p>
            </div>
            <img
                src="/frame/Frame_9.svg"
                className="absolute left-45 h-[70px] w-[100px]"
            />
            <div className="flex flex-row items-center bg-[url('/BackgroundImage/harmonyBG.jpg')] bg-no-repeat bg-cover bg-center rounded-r flex-1">
                {icon && (
                    <span className="block ml-20 text-white flex-shrink-0 w-6 h-6">
                        {icon}
                    </span>
                )}
                <p className="text-white uppercase text-[20px] mx-5">{description}</p>
            </div>
        </div>
    );
}
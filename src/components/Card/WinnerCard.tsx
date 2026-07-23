type Props = {
    award: string,
    title: string,
    name: string
}

export default function WinnerCard({ award, title, name }: Props) {
    return (
        <div className="flex flex-col w-[260px] h-[343px] border border-[0.5px] border-[#C48F7F]">
            <div className="w-full relative">
                <img className="w-[260px] h-[260px]" src="/imggla/7.jpg" alt="" />
                <div className="absolute bottom-0 w-[260px] h-[54px] bg-black/30 z-0">
                    <p className="uppercase z-10 text-[9px] text-center text-white">{award}</p>
                    <p className="z-10 text-[15px] text-center text-white">{title}</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
                <p className="uppercase  text-[9px] text-gray-500">PROJECT</p>
                <p className="uppercase text-[13px]">{name}</p>
            </div>
        </div>
    );
}
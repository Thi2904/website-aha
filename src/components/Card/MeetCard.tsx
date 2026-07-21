type Props = {
    name: string,
    title: string,
    description?: string,
    isLeft: boolean,
    img: string,
    country: string,
};

export default function MeetCard({ name, title, description, isLeft, img, country }: Props) {
    return (
        <div className="w-full max-w-6xl bg-[#222D43] overflow-hidden h-auto md:h-[330px] flex flex-col md:flex-row">
            {isLeft ? (
                <>
                    <img
                        className="w-full md:w-[330px] h-[250px] md:h-[330px] object-cover object-top shrink-0 order-first md:order-none grayscale"
                        src={img}
                        alt={name}
                    />
                    <div className="flex-1 py-6 md:py-10 px-5 md:px-8 flex flex-col justify-center overflow-hidden">
                        <h2 className="text-[32px] md:text-[48px] lg:text-[50px] text-white leading-tight font-bold">{name}</h2>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#C48F7F] mt-1 lg:mt-2">{country}</p>
                        <p className="text-[16px] md:text-[18px] lg:text-[21px] text-white mt-2 lg:mt-3 font-semibold">{title}</p>
                        <p className="text-[11px] md:text-[11px] lg:text-[12px] text-white mt-2 line-clamp-3 leading-relaxed">{description}</p>
                    </div>
                </>
            ) : (
                <>
                    <img
                        className="w-full md:w-[330px] h-[250px] md:h-[330px] object-cover object-top shrink-0 order-first md:order-last grayscale"
                        src={img}
                        alt={name}
                    />
                    <div className="flex-1 py-6 md:py-10 px-5 md:px-8 flex flex-col justify-center overflow-hidden">
                        <h2 className="text-[32px] md:text-[48px] lg:text-[50px] text-white leading-tight font-bold">{name}</h2>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#C48F7F] mt-1 lg:mt-2">{country}</p>
                        <p className="text-[16px] md:text-[18px] lg:text-[21px] text-white mt-2 lg:mt-3 font-semibold">{title}</p>
                        <p className="text-[11px] md:text-[11px] lg:text-[12px] text-white mt-2 line-clamp-3 leading-relaxed">{description}</p>
                    </div>
                </>
            )}
        </div>
    );
}
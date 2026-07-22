import Image from "next/image";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

import Link from "next/link";

type Props = {
    src: string;
    imageAlt: string;
    title: string;
    description: string;
    href: string;
    variant?: "full" | "half";
}

export function ImageSection({
    src,
    imageAlt,
    title,
    description,
    href,
    variant = "half",
}: Props) {
    return (
        <div
            className={`relative w-full overflow-hidden ${variant === "full" ? "aspect-[21/8]" : "aspect-[4/3]"
                }`}
        >
            <Image
                src={src}
                alt={imageAlt}
                fill
                sizes={
                    variant === "full"
                        ? "(max-width: 768px) 100vw, 1280px"
                        : "(max-width: 768px) 100vw, 640px"
                }
                className="object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black/60 to-transparent">
                <h3
                    className={`uppercase font-bold text-white leading-tight mb-2 ${variant === "full" ? "text-[22px] md:text-[32px] max-w-[800px]" : "text-[16px] md:text-[20px]"
                        }`}
                >
                    {title}
                </h3>
                <p className="text-white/80 text-[12px] md:text-[14px] leading-relaxed max-w-[800px] line-clamp-2 mb-3">
                    {description}
                </p>
                <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-white text-[13px] hover:gap-3 transition-all"
                >
                    See More <ArrowRight size={14} />
                </Link>
            </div>
        </div>
    );
}
const ITEMS_PER_PAGE = 6;

export default function SecondSection() {
    return (
        <div className="w-full flex flex-row justify-center items-center my-10">
            <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-center items-center gap-5 px-4">
                <div>
                    <p className="text-[#C48F7F] text-[50px] font-bold">The latest news and updates from AHA</p>
                    <p className="text-sm text-center">Inspire transformation, elevate standards and celebrate the pioneers shaping the landscape of Asian Hospitality</p>
                </div>
                <div className="flex flex-col w-full gap-1">
                    <ImageSection
                        variant="full"
                        src="/imggla/im1.png"
                        imageAlt="Vietnam Design & Build Center partnership"
                        title="Vietnam Design & Build Center is now Asia Awards Organization's exclusive strategic partner"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        href="/news/strategic-partner"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        <ImageSection
                            variant="half"
                            src="/imggla/im2.png"
                            imageAlt="I.F.O. SRL interior design"
                            title="I.F.O. SRL: Setting new standards in interior design and construction"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            href="/news/ifo-srl"
                        />
                        <ImageSection
                            variant="half"
                            src="/imggla/im3.png"
                            imageAlt="VACONS office design"
                            title="VACONS: A decade of excellence in executing office design and construction for multinational projects in Vietnam"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            href="/news/vacons"
                        />
                    </div>

                    <ImageSection
                        variant="full"
                        src="/imggla/im4.png"
                        imageAlt="2023 Asia Architecture Design Awards Winners Night"
                        title="2023 Asia Architecture Design Awards unveils exceptional winners, with its winners' night at Marina Bay Sands, Singapore"
                        description="The winners of the 2023 Asia Architecture Design Awards represent a diverse range of architectural typologies."
                        href="/news/2023-winners"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        <ImageSection
                            variant="half"
                            src="/imggla/im5.png"
                            imageAlt="I.F.O. SRL interior design"
                            title="AADA CHIEF OF JUDGE: ASIAN ARCHITECTURE TRULY STANDS OUT DUE OF UNIQUE CULTURAL IDENTITY"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            href="/news/aada"
                        />
                        <ImageSection
                            variant="half"
                            src="/imggla/im6.png"
                            imageAlt="VACONS office design"
                            title="XUAN THAO REAL ESTATE: BUILDING A SUSTAINABLE FUTURE FOR BEN LUC"
                            description="Xuan Thao Real Estate's dedication to quality, innovation, and sustainability has positioned them as a key player in the real estate market."
                            href="/news/xuan-thao"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center gap-6 text-gray-500">
                    <ChevronsLeft size={20} className="hover:text-[#C48F7F] cursor-pointer" />
                    <ChevronLeft size={20} className="hover:text-[#C48F7F] cursor-pointer" />

                    <div className="flex items-center gap-1 text-[15px]">
                        <span>Page</span>
                        <span className="font-bold text-[#222D43]">1</span>
                        <span>,</span>
                        <span>2</span>
                        <span>,</span>
                        <span>3</span>
                        <span>,</span>
                        <span>4,</span>
                        <span>......</span>
                    </div>

                    <ChevronRight size={20} className="hover:text-[#C48F7F] cursor-pointer" />
                    <ChevronsRight size={20} className="hover:text-[#C48F7F] cursor-pointer" />
                </div>
            </div>

        </div>
    );

}
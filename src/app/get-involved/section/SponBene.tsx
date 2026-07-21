import SponBeneCard from "@/src/components/Card/SponBeneCard";
import { Megaphone, User, Share2, Fingerprint, Gem } from "lucide-react";
const steps = [
    {
        title: "DIRECT ADVERTISEMENT",
        icon: <Megaphone size={28} />,
        description:
            "Give your brand and product an opportunity to be involved in direct marketing, get the right solicitation of advertisement to specific segmented audience for better exposure and reach out. Be part of our strategies in direct communication through effective channels such as online adverts, newspapers, magazines, newswires and collateral advertising.",
    },
    {
        title: "REASONS TO GET PUBLIC",
        icon: <User size={28} />,
        description:
            "Hopping into the next level of business growth is the ultimate reason for getting involved whilst demonstrating the beautiful creation of creativities that the world has come to expect. Increase your business prestige is the chance that this partnership can provide.",
    },
    {
        title: "ENGAGEMENT",
        icon: <Share2 size={28} />,
        description:
            "It is your value that drives your business to delight the users or customers. Enormous engagement creates a path to better reach out which essentially generate wider awareness.",
    },
    {
        title: "DIFFERENTIATION",
        icon: <Fingerprint size={28} />,
        description:
            "The focus into innovation and sustainability are what our next generation of creation will be moving forward. Be part of this strategy to position your creation in a unique proposition and stand out amongst competitors.",
    },
    {
        title: "EXCLUSIVE ACCESS",
        icon: <Gem size={28} />,
        description:
            "Get your exclusive access to all our events, networks, and other events organized by AAO, alongside with our strategic business partners for boundless connection. You will have a full liberty to showcase your invention that generate higher prospect of wider audience.",
    },
];
export default function SponBene() {
    return (
        <div className="w-full h-min-screen bg-white flex flex-col justify-center items-center mb-30">
            <p className="uppercase text-[#222D43] text-[100px] font-bold">SPONSORSHIP <span className="uppercase font-bold text-[#C48F7F] text-[100px]">BENEFITS</span></p>
            <div className="w-[1078px] h-min-screen">
                <div className="flex flex-row gap-5 justify-center mt-16">
                    {steps.slice(0, 2).map((item) => (
                        <SponBeneCard key={item.title} {...item} />
                    ))}
                </div>

                <div className="flex flex-row gap-5 justify-center mt-16">
                    {steps.slice(2).map((item) => (
                        <SponBeneCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
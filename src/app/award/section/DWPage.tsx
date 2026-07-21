import DWCard from "@/src/components/Card/DWCard";
import { title } from "process";

const steps = [
    { title: "MEDIA APPROACH", description: "Upon securing victory in the 2026 Asia Hospitality Awards, your achievement will be magnified through inclusion in our international media roster, featuring an array of press releases, exclusive interviews, and captivating spotlight videos that span the entirety of the competition." },
    { title: "MARKETING OPPORTUNITIES", description: "Experience tailored pre and post-event marketing campaigns highlighting Sponsors across diverse platforms, including newswires and websites. As part of the 2026 Asia Hospitality Awards, enjoy exclusive branding opportunities such as logo placement on AADA POSM and a dedicated showcase at the Winners’ Night." },
    { title: "GLOBAL PROMOTION", description: "Amplify brand visibility across an extended media network that spans beyond Asia, connecting with diverse audiences in the field, while also showcasing the brand's industry leadership and unwavering support within the architecture and design sector." },
    { title: "RECOGNITION", description: "Cultivating acknowledgment within and outside the industry by garnering credibility from influential figures spanning industry professionals, journalists, scholars, and entrepreneurs. This is achieved through a comprehensive standardized scoring system meticulously applied to each criterion." },
    { title: "INCREASED CREDIBILITY", description: "Discover personalized sponsorship avenues that empower businesses to elevate their brand, establishing robust connections with design enthusiasts and cultivating a prominent industry presence." },
    { title: "NETWORKING", description: "Forge meaningful connections with industry stalwarts and experts, all while paving the way for novel business prospects during the prestigious 2026 Winners' Night. This exclusive event offers a unique platform to interact, exchange insights, and foster collaborations that resonate within the architecture and design sphere." },
]

export default function DWPage() {
    return (
        <div className="w-full h-[905px] bg-white flex flex-col justify-center items-center">
            <p className="text-[#222D43] text-[75px]">Discover The Worth</p>
            <p className="w-[695px] text-[16px] text-center mb-10">Securing victory at the 2026 Asia Hospitality Awards stands as a distinguished honor, bestowing an elevated international branding identity and amplifying your global recognition.</p>
            <div className="w-[1144px] h-[534px] rounded-2xl relative bg-[#222D43] overflow-hidden">
                <img className="absolute inset-0 opacity-40 rounded-2xl" src="/BackgroundImage/line-bg.jpg" alt="" />
                <div className="grid grid-cols-3 gap-6 absolute top-18 left-18">
                    {steps.map((step, i) => (
                        <DWCard
                            key={i}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
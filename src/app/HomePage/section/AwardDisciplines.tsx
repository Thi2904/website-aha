import CardAward from "@/src/components/Card/CardAward";

export default function AwardDisciplines() {
    return (
        <div className="w-full min-h-screen relative overflow-hidden bg-[#C48F7F]">
            <img
                src="/BackgroundImage/bgad.png"
                className="inset-0 w-full h-full object-cover opacity-50 mix-blend-screen scale-x-[-1]"
            />
            <div className="flex flex-col gap-4 justify-center items-center absolute inset-0 w-full h-full">
                <div className="w-[80%] flex flex-col gap-4 justify-center items-center">
                    <h1 className="text-[85px] font-bold uppercase">
                        AWARD Disciplines
                    </h1>
                    <div className="flex flex-col justify-center items-center w-[1209px]">
                        <p className="text-[21px] my-4">The 2026 AHA honors those who lead with bold vision and passionate dedication across key disciplines in hospitality.</p>
                        <p className="text-[21px] my-4">Open to individuals and organizations alike, submissions are welcomed from those whose contributions have made a meaningful impact—seeking not just accolades, but global recognition for shaping the future of the industry.</p>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <CardAward title="2026 ASIA'S FINEST HOTEL" description="This category refers to a broad field of service industry players that provide temporary living such as hotels, serviced apartments and others with a wide range of services and facilities." />
                    <CardAward title="2026 ASIA'S FINEST RESORT" description="Honorary winners will have their profiles to be displayed and promoted noticeably through AHA website for greater reach-out." />
                    <CardAward title="2026 ASIA'S FINEST LIFESTYLE & WELLNESS" description="Providing the utmost benefits of a healthy living for all mankind that improves both physical & mental health." />
                    <CardAward title="2026 asia's finest CRUISE & YACHT" description="A voyage full of pleasure and effortless style whether in cruise ship or luxury yacht that makes every trip nostalgically memorable." />
                    <CardAward title="2026 ASIA'S SPECIAL ACHIEVEMENT" description="Special recognition is reserved for individuals and entities with outstanding achievements and significant contributions to the hospitality industry" />

                </div>
            </div>
        </div>
    );
}
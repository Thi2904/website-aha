import CardAward from "@/src/components/Card/CardAward";

export default function BriefIntroduction() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#FFFFFF] justify-center items-center gap-10 mb-10">
            <p className="text-[#C48F7F] text-[100px]">A Brief Introduction</p>
            <div className="flex flex-row gap-10">
                <CardAward title="THE PRESTIGIOUS RECOGNITION" description="This inaugural prestigious award is not just to recognize the diligent and dedicated work  towards societal well-being but also to provide motivational force for better output in the hospitality industry." />
                <CardAward title="5 DISCLIPLINES" description="Exceptionally designed to cover almost all fields in the industry to ensure players are not missed out on the opportunity of being acknowledged." />
                <CardAward title="30 AWARD CATEGORIES" description="Not limiting to a single entry, one can submit multiple entries to stand a better chance of bagging the distinctive yet respectable awards." />
                <CardAward title="20 DISTINCTIVE EXPERTS" description="A cleverly selected panel of expertise in the field of tourism and hospitality to ensure the mechanism process and organizing structure are well engineered throughout the event." />


            </div>
        </div>
    );
}
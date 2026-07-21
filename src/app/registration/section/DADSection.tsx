import CardTimeLine from "@/src/components/Card/CardTimeline";
import { UserCheck, Pencil, Megaphone, ListChecks, Gem, Crown, FileEdit } from "lucide-react"

export default function DADSection() {
    return (
        <div className="bg-[#F4DDD5] relative w-full h-[905px] overflow-hidden">
            <div className="absolute left-25 top-20 text-black z-10 text-[70px] w-[371px] h-[214px]">_Dates and Deadlines</div>

            <img className="-left-50 top-0 absolute" src="/BackgroundImage/Vector3.png" alt="" />
            <div className="flex flex-col gap-8 justify-center items-center mt-10 mb-20 absolute right-55 top-40">
                <CardTimeLine title="UNTIL 30 NOVEMBER 2025" icon={<UserCheck size={24} strokeWidth={1.5} />} description="Early bird Registration" />
                <CardTimeLine title="UNTIL 25 FEBRUARY 2026" icon={<Pencil size={24} strokeWidth={1.5} />} description="standard Entry Registration" />
                <CardTimeLine title="APRIL 2026" icon={<Megaphone size={24} strokeWidth={1.5} />} description="SHORTLIST ANNOUNCEMENT" />
                <CardTimeLine title="APRIL - mAY 2026" icon={<ListChecks size={24} strokeWidth={1.5} />} description="Judging Process" />
                <CardTimeLine title="MAY 2026" icon={<Gem size={24} strokeWidth={1.5} />} description="winner announcement" />
                <CardTimeLine title="JULY 2026" icon={<Crown size={24} strokeWidth={1.5} />} description="2026 AHA Winners' NIGHT" />

            </div>
        </div>
    );
}
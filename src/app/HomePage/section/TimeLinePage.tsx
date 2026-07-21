import CardTimeLine from "@/src/components/Card/CardTimeline";
import { UserCheck, Pencil, Megaphone, ListChecks, Gem, Crown, FileEdit } from "lucide-react"

export default function TimeLinePage() {
    return (
        <div className="relative w-full min-h-screen bg-[#F4DDD5] overflow-hidden">
            <img
                src="/BackgroundImage/Vector_2.png"
                className="absolute inset-0 object-cover"
            />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#222D43] text-[95px] z-10">Timeline</h1>
                <div className="flex flex-col gap-8 justify-center items-center mt-10 mb-20">
                    <CardTimeLine title="UNTIL 30 NOVEMBER 2025" icon={<UserCheck size={24} strokeWidth={1.5} />} description="Early bird Registration" />
                    <CardTimeLine title="UNTIL 25 FEBRUARY 2026" icon={<Pencil size={24} strokeWidth={1.5} />} description="standard Entry Registration" />
                    <CardTimeLine title="APRIL 2026" icon={<Megaphone size={24} strokeWidth={1.5} />} description="SHORTLIST ANNOUNCEMENT" />
                    <CardTimeLine title="APRIL - mAY 2026" icon={<ListChecks size={24} strokeWidth={1.5} />} description="Judging Process" />
                    <CardTimeLine title="MAY 2026" icon={<Gem size={24} strokeWidth={1.5} />} description="winner announcement" />
                    <CardTimeLine title="JULY 2026" icon={<Crown size={24} strokeWidth={1.5} />} description="2026 AHA Winners' NIGHT" />

                </div>
            </div>
        </div>
    );
}
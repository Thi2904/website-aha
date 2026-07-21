import BigCardNews from "@/src/components/Card/BigCardNews";
import SmallCardNews from "@/src/components/Card/SmallCardNews";

export default function LastUpdate() {
    return (
        <div className="bg-[#F7F8FA]">
            <div className="flex w-full max-w-[1205px] flex-col items-center justify-center mb-20 mx-auto px-4 ">
                <p className="uppercase text-[65px] text-[#C48F7F] mb-10 leading-[1.13] tracking-[2.85px]">Latest update</p>
                <div className="flex w-full flex-col lg:flex-row items-start justify-center gap-10 mb-10">
                    <BigCardNews
                        title="VIETNAM DESIGN & BUILD CENTER IS NOW ASIA AWARDS ORGANIZATION'S EXCLUSIVE STRATEGIC PARTNER"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image="/image/img1.png"
                    />
                    <div className="flex w-full flex-1 flex-col gap-10">
                        <SmallCardNews
                            title="I.F.O. SRL: SETTING NEW STANDARDS IN INTERIOR DESIGN AND CONSTRUCTION"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            image="/image/img2.png"
                        />
                        <SmallCardNews
                            title="VACONS: A DECADE OF EXCELLENCE IN EXECUTING OFFICE DESIGN AND CONSTRUCTION FOR MULTINATIONAL PROJECTS IN VIETNAM"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            image="/image/img3.png"
                        />
                        <SmallCardNews
                            title="VACONS: A DECADE OF EXCELLENCE IN EXECUTING OFFICE DESIGN AND CONSTRUCTION FOR MULTINATIONAL PROJECTS IN VIETNAM"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            image="/image/img3.png"
                        />
                    </div>
                </div>
                <button className="w-[213px] h-[44px] bg-[#C48F7F]">
                    <p className="text-[13px] text-white">See More</p>
                </button>
            </div>
        </div>
    );
}
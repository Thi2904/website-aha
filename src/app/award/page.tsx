import FirstSection from "./section/FirstSection";
import BriefIntroduction from "./section/BriefIntroducton";
import InfuAsia from "./section/InfuAsia";
import DWPage from "./section/DWPage";
import WinnerNight from "./WinnerNight";
import LastSection from "./section/LastSection";


export default function AwardPage() {
    return (
        <>
            <FirstSection />
            <BriefIntroduction />
            <img className="w-full" src="frame/upper1.png" alt="" />
            <InfuAsia />
            <img className="w-full rotate-180" src="frame/upper1.png" alt="" />
            <DWPage />
            <WinnerNight />
            <LastSection />


        </>
    );
}
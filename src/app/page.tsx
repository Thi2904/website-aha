import AboutAward from "./HomePage/section/AboutAward";
import AwardDisciplines from "./HomePage/section/AwardDisciplines";
import WinnersNightHero from "./HomePage/homepage/WinnersNightHero";
import TimeLinePage from "./HomePage/section/TimeLinePage";
import UnionPage from "./HomePage/section/UnionPage";
import AwardOrg from "./HomePage/section/AwardOrg";
import LastUpdate from "./HomePage/section/LastUpdate";
import Contributos from "./HomePage/section/Contributos";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full h-min-screen">
      <WinnersNightHero />
      <AboutAward />
      <AwardDisciplines />
      <TimeLinePage />
      <UnionPage />
      <AwardOrg />
      <div className="w-full h-[270px] flex flex-row justify-center items-center bg-[#F7F8FA]">
        <img src="/image/proBanner.png" alt="" />
      </div>
      <LastUpdate />
      <Contributos />
      <div className="w-full h-[270px] flex flex-row justify-center items-center bg-[#F7F8FA]">
        <img src="/image/proBanner.png" alt="" />
      </div>

    </div>
  );
}
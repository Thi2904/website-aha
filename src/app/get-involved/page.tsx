import FirstSection from "./section/FirstSection";
import LastSection from "./section/LastSection";
import SecondSection from "./section/SecondSection";
import SponBene from "./section/SponBene";
import The2ASection from "./section/The2ASection";
import TheAcco from "./section/TheAcco";

export default function getInvolved() {
    return (
        <>
            <FirstSection />
            <SecondSection />
            <TheAcco />
            <SponBene />
            <The2ASection />
            <LastSection />
        </>
    );
}
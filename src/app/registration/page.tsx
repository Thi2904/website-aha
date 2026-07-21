import DADSection from "./section/DADSection";
import FirstSection from "./section/FirstSection";
import LastSection from "./section/LastSection";
import MidSection from "./section/MidSection";
import RegistrationProcess from "./section/RegistrationProcess";
import SecondSection from "./section/SecondSection";
import TipsSection from "./section/TipsSection";

export default function RegistrationPage() {
    return (
        <>
            <FirstSection />
            <SecondSection />
            <RegistrationProcess />
            <MidSection />
            <DADSection />
            <TipsSection />
            <LastSection />
        </>
    );
}
import RegistrationCard from "@/src/components/Card/RegistrationCard";

export default function RegistrationProcess() {
    return (
        <div className="w-full min-h-screen bg-[#111826] relative overflow-hidden py-15">
            <img className="absolute inset-0 opacity-55 mix-blend-screen" src="/BackgroundImage/background2.png" alt="" />
            <p className="text-[60px] text-center text-transparent bg-[url('/BackgroundImage/rose-gold-metal-texture-background.jpg')] bg-no-repeat bg-cover bg-center bg-clip-text">REGISTRATION PROCESS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 max-w-[1300px] mx-auto mt-20">
                <RegistrationCard number="1" title="Create your account" description="You are to create an account to commence your submission and may use similar account detail every time you login." />
                <RegistrationCard number="2" title="Select your Categories" description="Select a category or more that you yearn for and provide a thorough information of the submission. Multiple entries are welcome as you wish for." />
                <RegistrationCard number="3" title="Payment of Fees" description="All fees are charge per entry by 2025 AHA. Upon completion of your submission, you will be directed to Paypal payment gateway. An e-invoice will be send to your email to acknowledge receipt your successful payment." />
                <RegistrationCard number="4" title="Prepare your Documents" description="Do ensure that you have your documents ready as annex to your submission. A complete supportive document will help to ease the assessment process." />
                <RegistrationCard number="5" title="REVIEW AND SUBMIT YOUR ENTRIES" description="Do a final review to ensure a complete compliance to the requirement before final submission." />
                <div className="flex justify-end mt-10 pr-4">
                    <a className="text-white text-[36px] italic font-condensed border-b-2 h-[72px] border-[#C48F7F] pb-1">
                        Register Now!
                    </a>
                </div>
            </div>

        </div>
    );
}
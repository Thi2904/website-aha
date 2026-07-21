import ContactForm from "@/src/components/Form/ContactForm";

export default function LastSection() {
    return (
        <div className="w-full h-min-screen bg-[#F6F6F6] pb-30">
            <div className="flex flex-col justify-center items-center">
                <h2 className="uppercase text-center text-[70px] font-bold leading-none mt-20">
                    <span className="text-[#222D43]">Become </span>
                    <span className="text-[#C48F7F]">Our Sponsor</span>
                </h2>

                <p className="text-center text-[#C48F7F] text-[24px] max-w-[900px] mx-auto mt-6 mb-16">
                    Contact us by filling out the form and let us talk about the possibility of a sponsorship.
                </p>
                <ContactForm />
            </div>
        </div>
    );
}
export default function Footer() {
    return (
        <footer className="bg-[#222D43] w-full">
            <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row justify-between items-start gap-10 md:gap-6 px-6 sm:px-10 md:px-16 lg:px-[190px] lg:pr-[120px] xl:pr-[290px] pt-10 md:pt-[30px] pb-6">

                {/* Logo + địa chỉ */}
                <div className="flex flex-col gap-5 text-[#C48F7F] text-base">
                    <img
                        src="/AHALogo/LogoPink.svg"
                        alt="Logo"
                        className="w-[140px] h-[87px] md:w-[181px] md:h-[112px]"
                    />
                    <div className="flex flex-col gap-2">
                        <p>ASIA AWARDS ORGANIZATION PTE. LTD</p>
                        <p className="max-w-[308px]">
                            470 North Bridge Road, #05-12 Bugis Cube, Singapore (188735)
                        </p>
                    </div>
                </div>

                {/* General Information */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg md:text-xl font-bold text-white">
                        GENERAL INFORMATION
                    </h3>
                    <div className="flex flex-col gap-2 text-base text-[#C48F7F]">
                        <a href="#">Home</a>
                        <a href="#">The Organizer</a>
                        <a href="#">Submission Guidelines</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Legal Notice</a>
                        <a href="#">FAQs</a>
                    </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg md:text-xl font-bold text-white">
                        CONTACT
                    </h3>
                    <div className="flex flex-col gap-2 text-base text-[#C48F7F]">
                        <a href="mailto:submit@ahawards.co" className="underline">submit@ahawards.co</a>
                        <a href="tel:+6588057032">+65 8805 7032</a>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#C48F7F]/30 mt-8">
                <p className="py-4 text-center text-[#C48F7F]/30 text-sm md:text-base px-6">
                    © 2023 - All rights reserved - Asia Awards Organization.
                </p>
            </div>
        </footer>
    );
}
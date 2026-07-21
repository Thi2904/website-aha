
type Clause = {
    id: string;
    text: string;
    highlight?: boolean;
};

type Section = {
    number: string;
    title: string;
    intro?: string[];
    clauses?: Clause[];

    custom?: React.ReactNode;
};

const sections: Section[] = [
    {
        number: "1",
        title: "General Terms",
        intro: [
            "The Asia Hospitality Awards (2026 AHA) is an annual, prestigious award organized by the Asia Awards Organization (AAO). There are 30 award categories in 5 disciplines: Hotel; Resort; Lifestyle & wellness; Cruise & Yacht; Special Lifetime Achievements.",
            "Submissions to the The Asia Hospitality Awards – 2026 AHA are accepted through the award's official website: https://ahawards.co/. Upon nominating your project to the 2026 AHA and confirming the entry fees, the applicant consents to AHA's Terms and Conditions, and gives permission to receive correspondence and information related to AHA",
        ],
    },
    {
        number: "2",
        title: "Conditions For Participation",
        clauses: [
            { id: "2.1", text: "Projects from any location in Asia are eligible to submit to the AHA. Applications are accepted whether the projects are complete or partially finished, regardless of their newness or antiquity." },
            { id: "2.2", text: "Projects that have won a prize in another contest are entitled to participate." },
            { id: "2.3", text: "The submission is open for any project related to hoteliers, hotel developers and managers, recreations and destination, cruises and yachts, tours and excursions, airlines and airports, special lifetime achievements." },
            { id: "2.4", text: "Applicants can submit as many projects as they wish in an unlimited number of entries. Each category, however, requires an additional fee to be paid." },
            { id: "2.5", text: "For registration, each project must include a publicly disclosed name of the representative, organization, or business that owns the project. Submitted works must have prior authorization from their original owner or creator." },
            { id: "2.6", text: "AHA retains the right to eliminate any duplicate project under the same organization." },
            { id: "2.7", text: "AHA reserves the right to participate if the information provided is imprecise or the jury has concerns about the transparency and accuracy of the submission." },
            { id: "2.8", text: "Applicants can review their submissions by logging in to the AHA website https://ahawards.co/. All applications must be submitted in English; submissions written in any other language will be immediately disqualified." },
        ],
    },
    {
        number: "3",
        title: "Request",
        clauses: [
            { id: "3.1", text: "The submission must take place before 11:59 PM Singapore time on February 25, 2026; failure to comply with this deadline will result in the ineligibility of applications.", highlight: true },
            { id: "3.2", text: "All submissions must be nominated through the form on the website: https://ahawards.co/. The form requires applicants to provide their name, address, email, and phone number. Account holders have the capability to modify this information any time." },
            { id: "3.3", text: "Unless fees are settled, applications will not be accepted." },
            { id: "3.4", text: "After completion of the submission process, the applicant is not able to make any further changes." },
            { id: "3.5", text: "Applicants are allowed to apply in multiple categories or multiple projects in one category." },
        ],
    },
    {
        number: "4",
        title: "Photo",
        clauses: [
            { id: "4.1", text: "Entries are evaluated solely on the content that is presented. Applicants are required to submit 10 images of the project as part of their application. For photos to be considered, they must be genuine and of superior quality. Digital manipulation of images that drastically alter the texture of the project is not accepted. Each photograph must not exceed 5MB and be in one of the following formats: PNG, JPG, or JPEG." },
            { id: "4.2", text: "If the quality of the image is substandard or insufficient to evaluate the project, AHA does not have an obligation to rectify or adjust it." },
            { id: "4.3", text: "The applicants are obligated to take full responsibility for all copyright and related rights issues associated with the project, and provide AHA indemnification in case of any potential legal disputes. (If any dispute arises.)" },
        ],
    },
    {
        number: "5",
        title: "Registration Fees",
        clauses: [
            { id: "5.1", text: "The registration fee is determined by the submission date set according to the time of registration indicated on the AHA website. Registration fee is 160 USD per nomination (paid before November 30, 2025) and 200 USD per nomination (paid from December 1, 2025 - February 25, 2026). The registration fee is converted from local currency to USD.", highlight: true },
            { id: "5.2", text: "The participation fee will be paid via wire transfer to the AHA official bank account or via a third-party payment gateway on the AHA website https://ahawards.co/." },
            { id: "5.3", text: "Payment invoices will be sent to the registered billing address within 14 days from the date of payment." },
        ],
    },
    {
        number: "6",
        title: "Refund",
        clauses: [
            { id: "6.1", text: "Submitted projects can be withdrawn from AHA at any stage; however, the registration fees are non-refundable." },
        ],
    },
    {
        number: "7",
        title: "Registration Timeline",
        custom: (
            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
                {[
                    { label: "Official Open for Registration", date: "August 2025" },
                    { label: "Early Entry Deadlines", date: "30 November 2025" },
                    { label: "Standard Entry Deadlines", date: "25 February 2026" },
                ].map((t) => (
                    <div key={t.label}>
                        <p className="text-[#C48F7F] font-semibold text-[15px]">{t.label}</p>
                        <p className="text-[#222D43] text-[15px]">{t.date}</p>
                    </div>
                ))}
            </div>
        ),
    },
    {
        number: "8",
        title: "Evaluation Procedure",
        clauses: [
            { id: "8.1", text: "After completing the submission, the applicant receives a confirmation email from AHA within 3–5 business days." },
            { id: "8.2", text: "A panel of Judges is comprised of 20 distinctive experts in: Hospitality, Award-winning Chefs, Real Estate Developers, Social Initiators, Journalists/ Media Experts from global agencies. Information about the jury's members is published on the awards website after registration ends." },
            { id: "8.3", text: "AHA ensures fairness and transparency in the judging process. The decision of the jury is final. AHA does not accept and is not responsible for resolving any appeals against the jury's decision." },
            { id: "8.4", text: "The winner in each category is determined by the project that receives the highest score, which is based on both the judging panel's evaluation and online voting. Each project is assessed individually according to the specific criteria of the category in which it is registered." },
        ],
    },
    {
        number: "9",
        title: "Winner Announcement",
        clauses: [
            { id: "9.1", text: "Projects that have been shortlisted will be notified via email. Applicants who are not shortlisted will not receive any emails from AHA." },
            { id: "9.2", text: "The winners of the 2026 AHA are revealed on the website https://ahawards.co/ on May 2026 and are invited to attend the 2026 AADA Winners' Night in July 2026.\n\nWinners can confirm their recognition with the official Winner's Kit, available at USD 2,800, which includes:\n• An AHA trophy\n• An AHA certificate\n• An AHA Hall of Fame yearbook\n• All digital assets to be used on the winner's online platforms: badge, certificate, Hall of Fame yearbook\n• Admission for 2 pax to the Winner's Night", highlight: true },
            { id: "9.3", text: "All applicants who wish to receive transcripts and comments from the jury have to pay an additional 500 USD." },
            { id: "9.4", text: "The process of announcing nominations and winners is entirely determined by AHA. Applicants must accept that awards may not be announced or awarded in the same way." },
        ],
    },
    {
        number: "10",
        title: "Privacy Policy",
        clauses: [
            { id: "10.1", text: "AHA does not store any debit, credit card, or other financial related information." },
            { id: "10.2", text: "The personal information provided by the applicants will not be shared with any third parties. Only AHA staff and the jury have access to this information for marketing purposes." },
            { id: "10.3", text: "Applicants must ensure that the personal information provided to AHA is accurate, unmodified, and does not violate local laws. AHA reserves the right to claim compensation for any expenses incurred as a result of the applicant providing false information." },
        ],
    },
    {
        number: "11",
        title: "Copyrights",
        clauses: [
            { id: "11.1", text: "Copyright and other rights remain with the project's owner." },
            { id: "11.2", text: "AHA reserves the right to use the information submitted by applicants for non-commercial purposes, which includes: unlimited use of AHA publications, media channels (print and digital), AHA media partners. AHA will fully credit the source of the information." },
            { id: "11.3", text: "By nominating your project, you have granted AHA permission to use the submitted photos for marketing purposes in any event, such as exhibition, print and digital." },
            { id: "11.4", text: "AHA Winners' information and images are used for marketing and advertising campaigns related to the Asian Hospitality Awards (AHA) and the Asia Awards Organization (AAO).", highlight: true },
            { id: "11.5", text: "After the submission is finished, it is the responsibility of applicants to make sure that they are aware of and fulfilling all legal rights and obligations connected with any data or images presented to AHA. Furthermore, AHA holds the right to seek recompense for any costs caused by the applicant giving false information." },
        ],
    },
    {
        number: "12",
        title: "Legal Responsibilities",
        clauses: [
            { id: "12.1", text: "Should the AHA become aware of any alleged copyright infringements, we reserve the right to delete the relevant data, visuals, or cancel the corresponding award without the approval of the owners." },
            { id: "12.2", text: "AHA is not responsible for any unfavorable effects (diminished profits, harmed credibility, impaired business, destruction or deterioration of data or information) which may result from the provision of the aforementioned information to AHA." },
            { id: "12.3", text: "At any given time, AHA reserves the right to uphold obligations as prescribed by these terms. To legally and validly do so, all applicants must obtain AHA's written consent prior to exercising their rights and responsibilities stated in these terms. AHA is not liable for failure to meet its obligations under these terms in case any circumstances arise without notice." },
        ],
    },
    {
        number: "13",
        title: "Data Storage",
        clauses: [
            { id: "13.1", text: "By providing the information found on https://ahawards.co/, the applicant acknowledges that AHA has permission to store documents relating to projects, businesses, and organizations in its database. This information is strictly restricted to only the AHA staff and the judging panel." },
            { id: "13.2", text: "The creation of a user account on the website to manage the Applicant record and access the Participant Dashboard may include the User's first and last name, address, phone number and email/optional phone number. Other services included registration to the newsletter and AHA events also. By using Asia Hospitality Awards websites, you consent to the terms of this privacy statement." },
            { id: "13.3", text: "The AHA limits its use and disclosure of personal information to the purpose for which it was collected and other related purposes that would be expected by you." },
            { id: "13.4", text: "The AHA may disclose personal information with third parties, including: Organizations within the AHA and/or to the appropriate Award Organizers responsible for administering Award delivery; Contractors, suppliers, or other third parties that provide services on our behalf (such as website host providers);" },
        ],
    },
    {
        number: "14",
        title: "Purposes Of Data Collection",
        clauses: [
            { id: "14.1", text: "To assist with queries: Your personal data on AHA's websites enables us to respond to requests for information on our websites." },
            { id: "14.2", text: "Marketing: Based on your consent, we process your personal data for the purpose of informing you of AHA and our subsidiaries activities. AHA wishes to inform you of Award news, activities, and events for which you consent prior to sending you any marketing communications." },
            { id: "14.3", text: "You can unsubscribe from our email communications by following the instructions in any email that we send you, or you can withdraw your consent and request us to remove your personal information at any time by emailing us at hello@ahawards.co" },
            { id: "14.4", text: "To promote our winners, we share information about their projects with media, partners, and in press releases. We will not share any of your personal information, or information that is not intended for publicity. We require third parties and partners to respect the security of your personal information and to treat it in accordance with the law." },
        ],
    },
];

export default function TermsAndConditionsPage() {
    return (
        <div className="w-full bg-[#F4F4F2]">

            <section className="relative w-full overflow-hidden bg-[#0F1830] py-24 md:py-32 px-6 md:px-20 min-h-screen flex flex-col justify-center items-center">
                <div
                    className="pointer-events-none absolute inset-0 opacity-40 bg-[url('/BackgroundImage/background2.png')] bg-cover bg-center bg-no-repeat"
                />
                <div className="relative z-10 max-w-4xl ">
                    <h1 className="font-condensed text-[56px] md:text-[100px] leading-[0.95] text-[#C48F7F] bg-[url('/background/img2.jpg')] bg-cover bg-center bg-no-repeat bg-clip-text text-transparent tracking-tight ">
                        Terms &amp; Conditions
                    </h1>
                    <p className="mt-4 font-condensed text-[24px] md:text-[32px] text-center text-white tracking-wide">
                        2026 ASIA HOSPITALITY AWARDS
                    </p>
                </div>
            </section>

            <main className="mx-auto max-w-5xl px-6 md:px-0 py-16 md:py-24">
                {sections.map((section) => (
                    <section key={section.number} className="mb-14 md:mb-16">
                        <h2 className="font-condensed text-[#C48F7F] text-[28px] md:text-[34px] tracking-wide mb-4">
                            {section.number}. {section.title.toUpperCase()}
                        </h2>

                        {section.intro?.map((p, i) => (
                            <p
                                key={i}
                                className="text-[#C48F7F] text-[14px] md:text-[15px] leading-relaxed mb-3"
                            >
                                {p}
                            </p>
                        ))}

                        {section.clauses && (
                            <ol className="space-y-3">
                                {section.clauses.map((c) => (
                                    <li key={c.id} className="flex gap-3 text-[14px] md:text-[15px] leading-relaxed">
                                        <span
                                            className={`shrink-0 ${c.highlight ? "text-[#C48F7F]" : "text-[#222D43]"
                                                }`}
                                        >
                                            ({c.id.split(".")[1]})
                                        </span>
                                        <span
                                            className={`whitespace-pre-line ${c.highlight ? "text-[#C48F7F]" : "text-[#222D43]"
                                                }`}
                                        >
                                            {c.text}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        )}

                        {section.custom}
                    </section>
                ))}
            </main>

        </div>
    );
}
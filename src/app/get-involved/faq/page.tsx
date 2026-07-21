type Question = {
    id: number;
    question: string;
    answer: string[];
    highlight?: boolean;
};

type Category = {
    title: string;
    questions: Question[];
};

const categories: Category[] = [
    {
        title: "Registration",
        questions: [
            {
                id: 1,
                question: "Are the awards open for all?",
                answer: [
                    "Submissions are welcome for any projects or works related to hotels, resorts, restaurants, bars, lounges & bistros, spas & beauty centers, cruises and yachts, hotel developers and managers, chefs, and tour operators.",
                    "Completed, incomplete, or under conceptual stage projects but has been granted approval are qualified to participate in the relevant awards categories.",
                ],
            },
            {
                id: 2,
                question: "Can I enter one project into multiple categories?",
                answer: [
                    "Yes. Participants can submit single or multiple entries in an unlimited number of entries. Additional fee applies for different award categories you enter.",
                ],
            },
            {
                id: 3,
                question: "Can I submit multiple entries at one time?",
                answer: [
                    "Yes. Multiple entries are encouraged for any firms that conduct multi-disciplinary projects.",
                ],
            },
            {
                id: 4,
                question: "Can I enter one project in multiple award categories?",
                answer: [
                    "Yes. One project can enter more than one award category, based on the qualified criteria that are mentioned on each award category. However, there is an additional fee for each additional category you enter.",
                ],
            },
            {
                id: 5,
                question: "Is there any limit to the number of entries I can submit?",
                answer: ["No. You can submit as many categories as you see fit to your project."],
            },
            {
                id: 6,
                question: "Can I submit an award-winning project from other competitions?",
                answer: ["Yes. Past Award-Winning projects in other competitions are eligible to participate."],
            },
            {
                id: 7,
                question: "How will I know whether my submission is completed or not?",
                answer: [
                    "You can access your admin dashboard to check the progress/ status of your entry submission. A clear guideline and overview of submission for each entered category is demonstrated with percentage of completion for you to review, edit and submit.",
                ],
            },
            {
                id: 8,
                question: "How will I know whether AHA receives my submission or not?",
                answer: [
                    "Upon completing your submission, you will receive a confirmation email from AHA within 3-5 days to acknowledge your submission and payment of fees.",
                ],
            },
        ],
    },
    {
        title: "Payment Of Fees",
        questions: [
            {
                id: 9,
                question: "Are there any fees for registration?",
                highlight: true,
                answer: [
                    "Entry fee applies for each nomination to selected award category.",
                    "Early entry fee until 30 November 2025: USD 160 per entry",
                    "Standard entry fee from 1 December 2025: USD 200 per entry",
                ],
            },
            {
                id: 10,
                question: "What are payment options for the submission fee?",
                answer: [
                    "Paypal: You are directed to a third-party payment gateway to complete your payment of fees. Upon confirming your payment, you are granted to your AHA official account to complete the award registration form for each project enrolled.",
                    "Bank transfer: An alternative method of payment enables you to complete your payment of fees via wire transfer to Asia Awards Organization authorized bank account. Within 24 hours upon receipt of payment, you are granted to your AHA official account to complete the award registration form for each project enrolled.",
                ],
            },
            {
                id: 11,
                question: "Can I make changes to my entry category after processing payment?",
                answer: [
                    "No. You can only make changes to project description upon finishing payment of fees. The entered category cannot be adjusted.",
                ],
            },
            {
                id: 12,
                question: "Can I cancel my payment and get a refund?",
                answer: [
                    "You can withdraw your entry within 48 hours after registration is confirmed. Please email to hello@ahawards.co for refund assistance and please be noted that a deductible processing fee is applied.",
                ],
            },
            {
                id: 13,
                question: "Are all fees in USD?",
                answer: ["Yes. All fees are in USD."],
            },
        ],
    },
    {
        title: "Project Qualification",
        questions: [
            {
                id: 14,
                question: "Who is the Judge?",
                answer: [
                    "A panel of Judges comprised 20 distinctive experts in: hospitality, award-winning chefs, real estate developers, social initiators and journalists/media experts from global agencies. A board of judges will be announced upon the deadline of the registration process.",
                ],
            },
            {
                id: 15,
                question: "Can I receive a scoring board from judges?",
                answer: [
                    "Yes. Individual feedback and scoring boards are provided with an additional fee of USD 500 per entry.",
                ],
            },
        ],
    },
    {
        title: "Awards",
        questions: [
            {
                id: 16,
                question: "How are the winners announced?",
                highlight: true,
                answer: [
                    "All winners are going to be announced upon the completion of the judging process in May 2026. Winners will be announced online in the AHA website and across social media platforms and also media partners channels.",
                ],
            },
            {
                id: 17,
                question: "What do I get if I am qualified to be the winner of 2026 AHA?",
                highlight: true,
                answer: [
                    "Winners can confirm their recognition with the official Winner's Kit, available at USD 3,200, which includes:",
                    "• An AHA trophy",
                    "• An AHA certificate",
                    "• An AHA Hall of Fame yearbook.",
                    "• All digital assets to be used on the winner's online platform: Badge, certificate, Hall of Fame yearbook.",
                    "• Admission for 2 pax to the Winner's Night",
                ],
            },
            {
                id: 18,
                question: "Who is eligible to attend 2026 AHA Winners' Night?",
                answer: [
                    "All winners are eligible to attend 2026 AHA Winners' Night. Each category winner receives an invitation to partake in the Winners' Night in Vietnam.",
                ],
            },
            {
                id: 19,
                question: "Are there any fee to attend 2026 AHA Winners' Night?",
                highlight: true,
                answer: [
                    "Additional participants who wish to attend are required to pay a fee of USD 180 per person. The fee grants access to:",
                    "• A ticket to attend the 2026 Winners' Night in Vietnam",
                    "• Access to the ceremony",
                    "• Access to the cocktail reception",
                    "• One all-inclusive dinner and after party celebration",
                ],
            },
        ],
    },
];

export default function FAQPage() {
    return (
        <div className="w-full bg-[#F4F4F2]">
            <section className="relative w-full overflow-hidden bg-[#0F1830] py-24 md:py-32 px-6 md:px-20 min-h-screen flex flex-col justify-center items-center">
                <div
                    className="pointer-events-none absolute inset-0 opacity-40 bg-[url('/BackgroundImage/background2.png')] bg-cover bg-center bg-no-repeat"
                />
                <div className="relative z-10 mx-auto max-w-4xl">
                    <h1 className="font-condensed leading-[0.9] tracking-tight flex flex-col justify-center items-center ">
                        <span className="block font-bold uppercase text-[48px] md:text-[76px] text-center  text-[#C48F7F] bg-[url('/background/img2.jpg')] bg-cover bg-center bg-no-repeat bg-clip-text text-transparent">
                            Frequently Asked
                        </span>
                        <br />
                        <span className="block font-bold uppercase text-[48px] md:text-[76px] text-center text-[#C48F7F] bg-[url('/background/img2.jpg')] bg-cover bg-center bg-no-repeat bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h1>
                    <p className="mt-6 font-condensed text-[24px] md:text-[32px] text-white text-center tracking-wide">
                        2026 ASIA HOSPITALITY AWARDS
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <main className="mx-auto max-w-5xl px-6 md:px-0 py-16 md:py-24">
                {categories.map((category) => (
                    <section key={category.title} className="mb-14 md:mb-16">
                        <h2 className="font-condensed text-[#C48F7F] text-[30px] md:text-[38px] tracking-wide mb-6">
                            {category.title.toUpperCase()}
                        </h2>

                        <ol className="space-y-6">
                            {category.questions.map((q) => (
                                <li key={q.id} className="flex gap-3">
                                    <span
                                        className={`shrink-0 text-[14px] md:text-[15px] ${q.highlight ? "text-[#C48F7F]" : "text-[#222D43]"
                                            }`}
                                    >
                                        ({q.id})
                                    </span>
                                    <div className="text-[14px] md:text-[15px] leading-relaxed">
                                        <p
                                            className={`font-semibold ${q.highlight ? "text-[#C48F7F]" : "text-[#222D43]"
                                                }`}
                                        >
                                            {q.question}
                                        </p>
                                        {q.answer.map((line, i) => (
                                            <p
                                                key={i}
                                                className={
                                                    q.highlight ? "text-[#C48F7F]" : "text-[#222D43]"
                                                }
                                            >
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>
                ))}
            </main>

        </div>
    );
}
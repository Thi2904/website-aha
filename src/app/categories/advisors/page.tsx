import MeetCard from "@/src/components/Card/MeetCard";

const steps = [
    {
        name: "Tan Quee Peng (Mr.)",
        title: "Certified Green Mark Manager, Universal Design Assessor and Design for Safety Professional, General Director at RSP Vietnam.",
        description: "Quee Peng has more than 20 years of architectural experience leading major projects across Asia. He believes that architecture is an inextricable part of our experience and has the power to transform and inform our sensibilities and perceptions, from personal spaces to our interaction with society at large. Quee Peng takes a whole-of-life cycle approach on projects, from new development to brownfield asset enhancement, to deliver quality to stakeholders at all levels.",
        isLeft: true,
        img: "/InfluencerAva/1.png",
        country: "Singapore",
    },
    {
        name: "Gianfranco Bianchi (Mr.)",
        title: "Founder, CEO of Italian Atelier SRL",
        description: "Established Italian Atelier in 2008, Mr. Gianfranco Bianchi, is a leader in distributing the most prestigious luxury furniture brands in the Asia Pacific and represents over forty brands worldwide. He has always been fascinated by Asian Culture and history, and had a strong belief that Asia truly represents the future of the world economy. Italian Atelier has contributed a positive impact on the luxury lifestyle of 37 countries.",
        isLeft: false,
        img: "/InfluencerAva/2.png",
        country: "Italy",
    },
    {
        name: "Korakot Aromdee (Mr.)",
        title: "Creative Director of Korakot International",
        description: "As the Creative Director of Korakot International, Dr. Korakot is widely recognized as a pivotal figure in the global movement to bridge traditional Asian craftsmanship with high-end contemporary design. His appointment brings a unique depth of expertise in sustainable materiality, large-scale art installations, and luxury retail strategy to the AADA judging process.",
        isLeft: true,
        img: "/InfluencerAva/3.png",
        country: "Thailand",
    },
    {
        name: "Karen Barmaki (Ms.)",
        title: "Founder and Creative Director of Studio Karen B",
        description: "Karen Barmaki is the Founder and Creative Director of Studio Karen B, an architect, interior and furniture designer, and engineer with an international background. She specializes in high-end residential interiors and bespoke furniture across Europe, the Middle East, and the United States, guided by a refined and contemporary design philosophy. Her work has received international recognition, including prestigious DNA Awards in residential and hospitality design.",
        isLeft: false,
        img: "/InfluencerAva/4.png",
        country: "Lebanon",
    },
    {
        name: "Lee Lin (Mr.)",
        title: "Regional Director, Asia Pacific at NOBU Hospitality",
        description: "Lee Lin is an international leader in luxury hospitality development and design, currently serving as Regional Director, Asia Pacific at NOBU Hospitality, with extensive experience across Asia Pacific and China. He previously held senior roles at Asset World Corporation, BLINK Design Group Thailand, and leading international architecture firms, overseeing product strategy, concept design, and large-scale hospitality projects. A Bachelor of Architecture graduate of the University of Notre Dame, Lee brings a global perspective shaped by professional experience across multiple continents.",
        isLeft: true,
        img: "/InfluencerAva/5.png",
        country: "Thailand",
    },
    {
        name: "Prof. Jenchieh Hung (Mr.)",
        title: "Principal Architect of HAS Design and Research, Professor/Visiting Professor at Tongji University and Chulalongkorn University",
        description: "Professor Jenchieh Hung is a distinguished architect and co-founder of the Thai firm Jenchieh Hung + Kulthida Songkittipakdee / HAS Design and Research. In 2023, he was appointed Exhibition Chairman and Principal Curator of The Association of Siamese Architects under Royal Patronage (ASA), leading major international exhibitions. He has also been a juror for the Royal Institute of British Architects (RIBA) – RIBA International Awards: Asia Pacific Awards, becoming the first Thai architect to receive this honor.",
        isLeft: false,
        img: "/InfluencerAva/6.png",
        country: "Thailand",
    },
    {
        name: "Prof. Kulthida Songkittipakdee (Ms.)",
        title: "Principal Architect of HAS Design and Research, Professor/Visiting Professor at Tongji University and Chulalongkorn University",
        description: "Professor Kulthida Songkittipakdee is a renowned architect and co-founder of the Bangkok-based firm Jenchieh Hung + Kulthida Songkittipakdee / HAS Design and Research. She was the first Asian architect selected by the Renzo Piano Foundation to collaborate at the Renzo Piano Building Workshop in Paris. In 2024, she was appointed Chairman of The Association of Siamese Architects under Royal Patronage (ASA) – ASA Architect Expo, curating Thailand's premier international architecture exhibition at the IMPACT Arena & Convention Center.",
        isLeft: true,
        img: "/InfluencerAva/7.png",
        country: "Thailand",
    },
    {
        name: "Ros Banksia-Smith (Ms.)",
        title: "Fellow of the Design Institute of Australia, Creative Design Director of FINNS Global",
        description: "Ros Banksia-Smith is a global authority in luxury leisure and hospitality design with over 15 years of international experience. As a Fellow of the Design Institute of Australia and Creative Design Director of FINNS Global, she specializes in design-led property repositioning that bridges visionary creativity with commercial success. An award-winning designer and consultant for brands like Hilton and Accor, her work leverages strategic storytelling to create high-impact environments that elevate both lifestyle value and global brand identity.",
        isLeft: false,
        img: "/InfluencerAva/8.png",
        country: "Australia",
    },
    {
        name: "Isabelle Miaja (Ms.)",
        title: "Founder and Creative Director of Miaja Design Group",
        description: "Isabelle Miaja is the Founder and Creative Director of Miaja Design Group, an international studio specializing in luxury resorts and boutique hotel interiors. With nearly three decades of experience, she is known for her art-led, European sensibility and emotionally driven design approach. Her portfolio spans Asia and the Middle East, shaping iconic hospitality destinations that blend culture, narrative, and refined aesthetics into immersive guest experiences.",
        isLeft: true,
        img: "/InfluencerAva/9.png",
        country: "France",
    },
    {
        name: "Cam Tu Nguyen (Ms.)",
        title: "CEO, Founder of Vietnam Design & Build Center, COO of Asia Awards Organization",
        description: "With several years of experience in the marketing industry, including a five-year tenure in the resort real estate sector, Tu presently holds the position of CEO at D&B Holding. Additionally, she is the founder and manager of the Vietnam Design & Build Center (VDBC). In the year 2022, VDBC and AAO forged a strategic partnership characterized by comprehensive collaboration. This collaboration aims to recognize excellence in products, individuals, organizations, and businesses through prestigious awards.",
        isLeft: false,
        img: "/InfluencerAva/10.png",
        country: "Vietnam",
    },
]

export default function Advisors() {
    return (
        <div className="w-full h-full">
            <div
                className="w-full min-h-[400px] md:min-h-[450px] relative flex flex-col items-center justify-center px-4 md:px-0 gap-3 md:gap-4 bg-cover bg-center"
                style={{ backgroundImage: "url('/background/bg-1.png')" }}
            >
                <img
                    className="absolute w-[400px] md:w-[700px] max-w-none -top-[100px] md:-top-[180px] left-1/2 -translate-x-1/2"
                    src="/text/text-advi.png"
                    alt="Board of Advisors"
                />
                <p className="mt-40 text-white text-[12px] md:text-[16px] text-center max-w-[90%] md:max-w-[600px]">
                    Board of Advisors are of prominent profiles who craft the organization&apos;s direction to
                    <br className="hidden md:block" /> ensure our approaches are aligned with our purposes.
                </p>
            </div>
            <div className="w-full flex flex-col gap-10 justify-center items-center px-4 lg:px-8 py-10">
                <p className="text-[#111826] text-[40px] lg:text-[50px] font-bold text-center">MEET THE <span className="text-[#C48F7F]">ADVISORS</span></p>
                <div className="w-full max-w-6xl flex flex-col gap-10 mx-auto mb-20">
                    {steps.map((item, index) => (
                        <MeetCard
                            key={item.name}
                            title={item.title}
                            name={item.name}
                            img={item.img}
                            description={item.description}
                            isLeft={item.isLeft}
                            country={item.country}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
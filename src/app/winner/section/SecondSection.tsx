import WinnerCard from "@/src/components/Card/WinnerCard";
export const winners = [
    { award: "2026 ASIA", title: "Finest Hotel", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Resort", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Boutique Hotel", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Mountainous Hotel", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Serviced Apartment", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest New Hotel", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest New Resort", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Fine Dining Restaurant", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Hotel Restaurant", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Fitness Center", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Local Restaurant", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Bar, Lounge & Bistro", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Spa & Beauty Center", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Golf Club", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Themed Park", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Cruise Line", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Luxury Yacht", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest River Cruise Line", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest New Cruise Line", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Tour Operator", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Online Travel Agent", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Travel Agent", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Online Tour Operator", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Cabin Crew", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Airline", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Airport", name: "Project Name" },
    { award: "2026 ASIA", title: "Finest Airport Lounge", name: "Project Name" },
    { award: "2026 ASIA", title: "Lifetime Achievement for General Manager, Hotel & Resort", name: "Project Name" },
    { award: "2026 ASIA", title: "Lifetime Achievement for Marketing Team Campaign", name: "Project Name" },
    { award: "2026 ASIA", title: "Lifetime Achievement for Human Resource Team Efforts", name: "Project Name" },
];

export default function SecondSection() {
    return (
        <div className="max-w-5xl mx-auto flex flex-col justify-center items-center">
            <p className="text-[#C48F7F] text-[40px] md:text-[85px] font-bold text-center">Uncover All The Winners</p>
            <p className="text-[11px] md:text-[24px] font-bold mb-10 text-center">2026 ASIA Hospitality AWARDS</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-8 mb-10">
                {winners.map((item, index) => (
                    <WinnerCard key={index} award={item.award} title={item.title} name={item.name} />
                ))}
            </div>
        </div>
    );
}
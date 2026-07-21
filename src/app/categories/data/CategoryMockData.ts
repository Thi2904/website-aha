export interface CategoryItem {
    title: string;
    description: string;
}

export interface CategorySection {
    title: string;
    description: string;
    items: CategoryItem[];
}

export const CategoryMockData: CategorySection[] = [
    {
        title: "Hotel",
        description:
            "This category refers to a broad field of service industry players that provide temporary living such as hotels, serviced apartments and others with a wide range of services and facilities.",
        items: [
            {
                title: "2026 Asia's Finest Hotel",
                description:
                    "This award exemplifies the state-of-the-art design property alongside with envied innovation that includes the element of sustainability as part of societal goal to continuously having people to co-exist on earth in a long run.",
            },
            {
                title: "2026 Asia's Finest City Hotel",
                description:
                    "Experience the epitome of urban sophistication with luxurious accommodations in bustling city centers across Asia. Enjoy unparalleled convenience, modern amenities, and seamless access to the vibrant energy of the city.",
            },
            {
                title: "2026 Asia's Finest Boutique Hotel",
                description:
                    "Winners of this esteemed category excel in creating immersive experiences that reflect the culture, heritage, and aesthetics of their locale, while also providing discerning travelers with exquisite amenities and attention to detail.",
            },
            {
                title: "2026 Asia's Finest Lifestyle Hotel",
                description:
                    "Indulge in a holistic lifestyle experience at finest hotels, where innovative dining, wellness facilities, and cultural experiences await.",
            },
            {
                title: "2026 Asia's Finest Serviced Apartment",
                description:
                    "This prestigious accolade celebrates establishments that excel in providing a seamless blend of upscale amenities, personalized attention, and a home-away-from-home experience for discerning travelers.",
            },
            {
                title: "2026 Asia's Finest Concept Hotel",
                description:
                    "Discover visionary designs, sustainability initiatives, and immersive guest experiences that promise to shape the future of hospitality upon completion.",
            },
        ],
    },

    {
        title: "Resort",
        description:
            "This category refers to a broad field of service industry players that provide temporary living such as hotels, serviced apartments and others with a wide range of services and facilities.",
        items: [
            {
                title: "2026 Asia's Finest Beach/Coastal Resort",
                description:
                    "Winners of this category epitomize the epitome of beachfront elegance, boasting stunning vistas, pristine shorelines, and a wealth of recreational activities to ensure an unforgettable stay for every guest.",
            },
            {
                title: "2026 Asia's Finest Mountain Resort",
                description:
                    "This prestigious recognition honors resorts that epitomize the perfect harmony between breathtaking natural surroundings, unparalleled amenities, and impeccable hospitality.",
            },
            {
                title: "2026 Asia's Finest Island Resort",
                description:
                    "This prestigious accolade celebrates resorts nestled amidst azure waters and pristine natural surroundings, that epitomize the perfect fusion of natural splendor, luxurious amenities, and impeccable service on captivating island retreats.",
            },
            {
                title: "2026 Asia's Finest Beach Villa",
                description:
                    "From lavish accommodations with private pools to personalized concierge services, these beach villas set the standard for excellence in luxury hospitality, offering discerning travelers an unforgettable and indulgent retreat by the sea.",
            },
            {
                title: "2026 Asia's Finest Wellness Retreat/Sanctuary",
                description:
                    "Indulge in rejuvenation and self-care at these wellness retreats, where you'll find peace, serenity, and holistic healing amidst stunning natural surroundings.",
            },
            {
                title: "2026 Asia's Finest Concept Resort",
                description:
                    "Introducing upcoming resorts, poised to redefine luxury and redefine the traveler's experience with expansive vistas and innovative design.",
            },
        ],
    },

    {
        title: "Lifestyle & Wellness",
        description:
            "Providing the utmost benefits of a healthy living for all mankind that improves both physical & mental health.",
        items: [
            {
                title: "2026 Asia's Finest Fine-Dining Restaurant",
                description:
                    "This award honors restaurants that redefine gastronomic experiences by offering an exceptional blend of exquisite cuisine, impeccable service, and captivating atmospheres.",
            },
            {
                title: "2026 Asia's Finest Local Restaurant (+Country Name)",
                description:
                    "A rare local delicacy that carries its originality is a legacy of place with a good traditional story tied to it and this is what the award is all about.",
            },
            {
                title: "2026 Asia's Finest Hotel Restaurant (+Hotel Name, Country)",
                description:
                    "This award exemplifies excellences in gastronomic experiences yet outstanding quality of services offering by hotel and resort.",
            },
            {
                title: "2026 Asia's Finest Bar, Lounge & Bistro",
                description:
                    "An award that represents an exquisite place yet a popular community hangout for a conducive space and reliable refreshments.",
            },
            {
                title: "2026 Asia's Finest Spa & Beauty Center",
                description:
                    "This category would emphasize on the kind of facilities and products which generally offer good skin care and esthetician services.",
            },
            {
                title: "2026 Asia's Finest Concept Restaurant",
                description:
                    "These upcoming culinary ventures are poised to revolutionize the restaurant scene, offering innovative concepts, immersive dining experiences, and visionary design.",
            },
        ],
    },

    {
        title: "Cruise & Yacht",
        description:
            "A voyage full of pleasure and effortless style whether in cruise ship or luxury yacht that makes every trip nostalgically memorable.",
        items: [
            {
                title: "2026 Asia's Finest Cruise",
                description:
                    "Unique, modern, well-featured safety measures, equipped with eco-friendly technology & system, an endless fun for all age categories.",
            },
            {
                title: "2026 Asia's Finest River Cruise",
                description:
                    "This award defines a river cruise that meanders through nature, mediaeval architecture or even urban built with legendary or mythical stories.",
            },
            {
                title: "2026 Asia's Finest New Cruise",
                description:
                    "A new cruise line that exploits every technique in modern technology to showcase innovative creation, sustainable energy, stylish contemporary design.",
            },
            {
                title: "2026 Asia's Finest Yacht",
                description:
                    "Luxury is what you find in this award category. A definition of professional crew, unparalleled service, up-to-date equipment and uncompromised pleasure.",
            },
            {
                title: "2026 Asia's Finest Cruise Operator",
                description:
                    "Experience the pinnacle of luxury and sophistication with Asia's finest cruise operators. Embark on unforgettable journeys across stunning seas.",
            },
            {
                title: "2026 Asia's Finest Concept Cruise",
                description:
                    "A journey into the future of sea travel with an upcoming concept cruise that promises to redefine the cruising experience.",
            },
        ],
    },

    {
        title: "Special Achievement",
        description:
            "Special recognition for those with outstanding achievements that exceptionally contributed to the society.",
        items: [
            {
                title: "2026 Asia's Special Achievement for Hotel Manager (GM), Hotel & Resort",
                description:
                    "The award celebrates outstanding hotel managers in Asia for their exceptional leadership and dedication in elevating guest experiences.",
            },
            {
                title: "2026 Asia's Special Achievement for Executive Chef",
                description:
                    "This prestigious award recognizes outstanding achievements and contributions to the culinary arts, honoring chefs who have elevated the dining experience.",
            },
            {
                title: "2026 Asia's Finest Hotel Operator",
                description:
                    "Recognized for their commitment to excellence, these operators set the standard for exceptional service, luxury accommodations, and unforgettable guest experiences.",
            },
            {
                title: "2026 Asia's Finest Tour Operator",
                description:
                    "Reputation is the key word well representing this award, an arrangement that can be made under one roof, which makes your holiday a lot easier.",
            },
            {
                title: "2026 Asia's Finest Travel Agent",
                description:
                    "Professionalism is best to describe the presentation of this award. An establishment that provides and coordinates accommodations, transportations, tours, insurances, and many other activities.",
            },
            {
                title: "2026 Asia's Finest Local Destination Management Company",
                description:
                    "Celebrating exceptional service and expertise, this award highlights companies that excel in curating unforgettable experiences and showcasing the best of Asia's diverse destinations.",
            },
        ],
    },
];
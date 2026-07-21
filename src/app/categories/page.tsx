import Disciplines from "./section/Disciplines";
import FirstSection from "./section/FirstSection";
import CategorySection from "./section/CategorySection";
import { CategoryMockData } from "./data/CategoryMockData";
import LastSection from "./section/LastSection";

export default function CategoriesPage() {
    return (
        <>
            <FirstSection />
            <Disciplines />

            {CategoryMockData.map((category) => (
                <CategorySection
                    key={category.title}
                    sectionTitle={category.title}
                    sectionDescription={category.description}
                    items={category.items}
                />
            ))}
            <LastSection />

        </>
    );
}
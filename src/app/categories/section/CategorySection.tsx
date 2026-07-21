import CardCategory from "@/src/components/Card/CardCategory";

type CategoryItem = {
    title: string;
    description?: string;
};

type Props = {
    sectionTitle: string;
    sectionDescription: string;
    items: CategoryItem[];
    columns?: number;
};

export default function CategorySection({
    sectionTitle,
    sectionDescription,
    items,
    columns = 2,
}: Props) {
    const gridClass = columns === 1 ? "grid-cols-1" : "grid-cols-2";

    return (
        <section className="flex flex-col justify-center items-center gap-6 my-20">
            <p
                className="text-4xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#F4DDD5] to-[#C48F7F] text-[75px]"
            >
                {sectionTitle}
            </p>
            <p className="w-[943px] font-bold text-center text-[#222D43]">{sectionDescription}</p>
            <div className={`grid ${gridClass} gap-6 w-[1145px]`}>
                {items.map((item, index) => (
                    <CardCategory
                        key={`${item.title}-${index}`}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}

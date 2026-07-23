"use client";

import { X, ChevronDown } from "lucide-react";

type Props = {
    title: string;
    description: string;
    options: string[];
    selected: string[];
    pricePerEntry: number;
    onAdd: (option: string) => void;
    onRemove: (option: string) => void;
};

export default function NominationSection({
    title,
    description,
    options,
    selected,
    pricePerEntry,
    onAdd,
    onRemove,
}: Props) {
    const fee = selected.length * pricePerEntry;
    const availableOptions = options.filter((opt) => !selected.includes(opt));

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-[#1B2A4A] font-bold text-2xl uppercase">
                Nominate your entry*
            </h2>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left: category select */}
                <div className="flex-1 flex flex-col gap-3">
                    <h3 className="text-[#1B2A4A] font-bold uppercase">{title}</h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                        {description}
                    </p>

                    {selected.map((item) => (
                        <div
                            key={item}
                            className="flex items-center justify-between bg-[#1B2A4A] text-white uppercase text-sm font-semibold px-5 py-4"
                        >
                            <span>{item}</span>
                            <button onClick={() => onRemove(item)}>
                                <X size={18} />
                            </button>
                        </div>
                    ))}

                    {availableOptions.length > 0 && (
                        <div className="relative">
                            <select
                                value=""
                                onChange={(e) => {
                                    if (e.target.value) onAdd(e.target.value);
                                }}
                                className="w-full appearance-none bg-white border border-gray-300 px-5 py-4 uppercase text-gray-500 outline-none focus:border-[#C48F7F]"
                            >
                                <option value="">Select your category</option>
                                {availableOptions.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown
                                size={18}
                                className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
                            />
                        </div>
                    )}
                </div>

                {/* Middle: number of entry */}
                <div className="w-full lg:w-[220px] flex flex-col gap-3">
                    <h3 className="text-[#1B2A4A] font-bold uppercase">
                        Number of entry
                    </h3>
                    <p className="text-gray-600 text-[15px]">
                        You can choose unlimited number of entry
                    </p>
                    <div className="border border-gray-300 px-5 py-4 text-center text-gray-700 bg-white">
                        {selected.length}
                    </div>
                </div>

                {/* Right: fee */}
                <div className="w-full lg:w-[220px] flex flex-col gap-3">
                    <h3 className="text-[#1B2A4A] font-bold uppercase">
                        Early bird entry fee
                    </h3>

                    <p className="text-gray-600 text-[15px] mb-[23px]">
                        Apply for single entry USD {pricePerEntry}
                    </p>
                    <div className="border border-gray-300 px-5 py-4 text-center text-gray-700 bg-white">
                        USD {fee}
                    </div>
                </div>
            </div>
        </div>
    );
}
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const countries = [
    "Vietnam", "Singapore", "Malaysia", "Thailand", "Indonesia",
    "Philippines", "Japan", "South Korea", "China", "United States",
];

const phoneCodes = [
    { code: "+84", country: "Vietnam", flag: "🇻🇳" },
    { code: "+65", country: "Singapore", flag: "🇸🇬" },
    { code: "+60", country: "Malaysia", flag: "🇲🇾" },
    { code: "+66", country: "Thailand", flag: "🇹🇭" },
    { code: "+62", country: "Indonesia", flag: "🇮🇩" },
    { code: "+1", country: "United States", flag: "🇺🇸" },
];

export default function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedCode, setSelectedCode] = useState(phoneCodes[0]);
    const [showCodeDropdown, setShowCodeDropdown] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ firstName, lastName, country, email, phone: `${selectedCode.code}${phone}` });
    };

    const inputClass =
        "w-full h-[56px] px-6 bg-white text-[#222D43] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C48F7F]";

    return (
        <form
            onSubmit={handleSubmit}
            className="w-[770px] h-[770px] mx-auto bg-[#1B2436] px-10 py-14"
        >
            <div className="mb-8">
                <label className="block text-white text-[18px] mb-2">First Name</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Please type your first name"
                    className={inputClass}
                />
            </div>

            <div className="mb-8">
                <label className="block text-white text-[18px] mb-2">Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Please type your last name"
                    className={inputClass}
                />
            </div>

            <div className="mb-8">
                <label className="block text-white text-[18px] mb-2">
                    Country<span className="text-[#C48F7F]">*</span>
                </label>
                <div className="relative">
                    <select
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className={`${inputClass} appearance-none cursor-pointer ${country === "" ? "text-gray-400" : "text-[#222D43]"
                            }`}
                    >
                        <option value="" disabled>
                            Select your country
                        </option>
                        {countries.map((c) => (
                            <option key={c} value={c} className="text-[#222D43]">
                                {c}
                            </option>
                        ))}
                    </select>
                    <ChevronDown
                        size={20}
                        className="absolute right-6 top-1/2 -translate-y-1/2 text-[#222D43] pointer-events-none"
                    />
                </div>
            </div>

            <div className="mb-8">
                <label className="block text-white text-[18px] mb-2">
                    Email<span className="text-[#C48F7F]">*</span>
                </label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className={inputClass}
                />
            </div>

            <div className="mb-10">
                <label className="block text-white text-[18px] mb-2">Phone Number</label>
                <div className="flex h-[56px] bg-white relative">
                    <button
                        type="button"
                        onClick={() => setShowCodeDropdown((prev) => !prev)}
                        className="flex items-center gap-2 px-4 border-r border-gray-200 shrink-0"
                    >
                        <span className="text-[20px]">{selectedCode.flag}</span>
                        <span className="text-[#222D43]">{selectedCode.code}</span>
                        <ChevronDown size={16} className="text-[#222D43]" />
                    </button>

                    {showCodeDropdown && (
                        <div className="absolute top-[60px] left-0 w-[220px] bg-white border border-gray-200 shadow-lg z-20 max-h-[240px] overflow-y-auto">
                            {phoneCodes.map((item) => (
                                <button
                                    key={item.code + item.country}
                                    type="button"
                                    onClick={() => {
                                        setSelectedCode(item);
                                        setShowCodeDropdown(false);
                                    }}
                                    className="w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-100 text-left"
                                >
                                    <span className="text-[18px]">{item.flag}</span>
                                    <span className="text-[#222D43] text-sm">
                                        {item.country} ({item.code})
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}

                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        className="flex-1 px-6 text-[#222D43] placeholder:text-gray-400 focus:outline-none"
                    />
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="w-[500px] h-[56px] bg-[#C48F7F] text-white text-[18px] font-medium hover:bg-[#B37D6D] transition-colors"
                >
                    Send
                </button>
            </div>
        </form>
    );
}
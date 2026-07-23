"use client";

import { useState } from "react";
import { X, ChevronDown, ChevronRight } from "lucide-react";
import NominationSection from "./section/NominationSection";

type Tab = "registration" | "nomination" | "payment";

const tabs: { key: Tab; label: string }[] = [
    { key: "registration", label: "REGISTRATION" },
    { key: "nomination", label: "NOMINATION" },
    { key: "payment", label: "PAYMENT OF FEES" },
];

const PRICE_PER_ENTRY = 160;

const nominationSections = [
    {
        key: "hotel",
        title: "Hotel",
        description:
            "This category refers to a broad field of service industry players that provide temporary living such as hotels, serviced apartments and others with a wide range of services and facilities.",
        options: [
            "2026 Asia's Finest Hotel",
            "2026 Asia's Finest Boutique Hotel",
            "2026 Asia's Finest Mountainous Hotel",
            "2026 Asia's Finest Serviced Apartment",
            "2026 Asia's Finest New Hotel",
        ],
    },
    {
        key: "resort",
        title: "Resort",
        description:
            "Honoring the luxury, exceptional service, and unique spatial experiences of the finest resorts in Asia, from stunning coastal getaways to majestic mountain hideaways and pristine island paradises",
        options: [
            "2026 Asia's Finest Mountain Resort",
            "2026 Asia's Finest Island Resort",
            "2026 Asia's Finest New Resort",
        ],
    },
    {
        key: "lifestyle",
        title: "Lifestyle & Wellness",
        description:
            "Providing the utmost benefits of a healthy living for all mankind that improves both physical & mental health.",
        options: [
            "2026 Asia's Finest Spa & Beauty Center",
            "2026 Asia's Finest Fitness Center",
            "2026 Asia's Finest Golf Club",
        ],
    },
    {
        key: "cruise",
        title: "Cruise & Yacht",
        description:
            "A voyage full of pleasure and effortless style whether in cruise ship or luxury yacht that makes every trip nostalgically memorable.",
        options: [
            "2026 Asia's Finest Cruise Line",
            "2026 Asia's Finest Luxury Yacht",
            "2026 Asia's Finest River Cruise Line",
            "2026 Asia's Finest New Cruise Line",
        ],
    },
    {
        key: "lifetime",
        title: "Special Lifetime Achievements",
        description:
            "Special recognition is reserved for individuals and entities with outstanding achievements and significant contributions to the hospitality industry.",
        options: [
            "Lifetime Achievement for General Manager, Hotel & Resort",
            "Lifetime Achievement for Marketing Team Campaign",
            "Lifetime Achievement for Human Resource Team Efforts",
        ],
    },
];

/** Base input – nhận thêm `error` để tô viền đỏ + hiện dòng cảnh báo */
function FormInput({
    label,
    placeholder,
    type = "text",
    required = false,
    value,
    onChange,
    error = false,
}: {
    label: string;
    placeholder: string;
    type?: string;
    required?: boolean;
    value: string;
    onChange: (v: string) => void;
    error?: boolean;
}) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[#1B2A4A] text-[15px]">
                {label}
                {required && (
                    <span className={error ? "text-red-500" : ""}>*</span>
                )}
            </label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`w-full bg-white border px-4 py-3 text-[15px] text-gray-700 placeholder:text-gray-400 outline-none transition-colors ${error
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-200 focus:border-[#C48F7F]"
                    }`}
            />
            {error && (
                <span className="text-red-500 text-xs">
                    Trường này là bắt buộc
                </span>
            )}
        </div>
    );
}

/**
 * Wrapper quanh FormInput: tự tính error dựa trên `touched` + giá trị rỗng,
 * và tự đánh dấu touched khi người dùng blur ra khỏi field.
 */
function FormField({
    fieldKey,
    label,
    placeholder,
    type = "text",
    required = false,
    value,
    onChange,
    touched,
    onBlurField,
}: {
    fieldKey: string;
    label: string;
    placeholder: string;
    type?: string;
    required?: boolean;
    value: string;
    onChange: (v: string) => void;
    touched: Record<string, boolean>;
    onBlurField: (key: string) => void;
}) {
    const error = required && !!touched[fieldKey] && value.trim() === "";

    return (
        <div onBlur={() => onBlurField(fieldKey)}>
            <FormInput
                label={label}
                placeholder={placeholder}
                type={type}
                required={required}
                value={value}
                onChange={onChange}
                error={error}
            />
        </div>
    );
}

const REQUIRED_FIELDS = [
    "firstName",
    "lastName",
    "email",
    "emailConfirm",
    "password",
    "passwordConfirm",
    "orgName",
    "country",
    "city",
    "zip",
    "address",
] as const;

type RequiredFieldKey = (typeof REQUIRED_FIELDS)[number];

export default function RegistrationPage() {
    const [activeTab, setActiveTab] = useState<Tab>("registration");
    const [agreed, setAgreed] = useState(false);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        emailConfirm: "",
        password: "",
        passwordConfirm: "",
        orgName: "",
        country: "",
        city: "",
        zip: "",
        address: "",
        orgEmail: "",
        facebookUrl: "",
        websiteUrl: "",
    });

    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const markTouched = (key: string) =>
        setTouched((prev) => ({ ...prev, [key]: true }));

    const [nominations, setNominations] = useState<Record<string, string[]>>(
        Object.fromEntries(nominationSections.map((s) => [s.key, []]))
    );

    const addNomination = (key: string, option: string) =>
        setNominations((prev) => ({ ...prev, [key]: [...prev[key], option] }));

    const removeNomination = (key: string, option: string) =>
        setNominations((prev) => ({
            ...prev,
            [key]: prev[key].filter((o) => o !== option),
        }));

    const totalEntries = Object.values(nominations).reduce(
        (sum, arr) => sum + arr.length,
        0
    );
    const totalFee = totalEntries * PRICE_PER_ENTRY;

    const updateField = (key: keyof typeof form, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        // Đánh dấu tất cả field bắt buộc là "đã chạm" để hiện lỗi nếu còn trống
        setTouched((prev) => ({
            ...prev,
            ...Object.fromEntries(REQUIRED_FIELDS.map((k) => [k, true])),
        }));

        const hasEmptyField = REQUIRED_FIELDS.some(
            (k) => form[k as RequiredFieldKey].trim() === ""
        );
        if (hasEmptyField) {
            alert("Vui lòng điền đầy đủ các trường bắt buộc.");
            return;
        }

        if (!agreed) {
            alert("Vui lòng đồng ý với điều khoản trước khi tạo tài khoản.");
            return;
        }
        console.log(form);
    };

    return (
        <div
            className={`w-full mx-auto bg-[#F5F5F5] ${activeTab === "registration"
                    ? "max-w-[900px] p-8 sm:p-12 my-10"
                    : "p-8 sm:p-12"
                }`}
        >
            {/* Tabs */}
            <div className="flex w-full border border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`flex-1 py-4 text-sm sm:text-base uppercase tracking-wide transition ${activeTab === tab.key
                                ? "bg-[#1B2A4A] text-white"
                                : "bg-white text-[#1B2A4A]"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {activeTab === "registration" && (
                <div className="mt-10 flex flex-col gap-10">
                    {/* Your Account */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-[#1B2A4A] font-bold text-2xl sm:text-3xl">
                            Your Account
                        </h2>

                        <FormField
                            fieldKey="firstName"
                            label="First name"
                            required
                            placeholder="Please type your first name here"
                            value={form.firstName}
                            onChange={(v) => updateField("firstName", v)}
                            touched={touched}
                            onBlurField={markTouched}
                        />
                        <FormField
                            fieldKey="lastName"
                            label="Last name"
                            required
                            placeholder="Please type your last name here"
                            value={form.lastName}
                            onChange={(v) => updateField("lastName", v)}
                            touched={touched}
                            onBlurField={markTouched}
                        />
                        <FormField
                            fieldKey="email"
                            label="Email"
                            required
                            type="email"
                            placeholder="Please type your email address here"
                            value={form.email}
                            onChange={(v) => updateField("email", v)}
                            touched={touched}
                            onBlurField={markTouched}
                        />
                        <FormField
                            fieldKey="emailConfirm"
                            label="Email Confirmation"
                            required
                            type="email"
                            placeholder="Please type your email address here"
                            value={form.emailConfirm}
                            onChange={(v) => updateField("emailConfirm", v)}
                            touched={touched}
                            onBlurField={markTouched}
                        />
                        <FormField
                            fieldKey="password"
                            label="Password"
                            required
                            type="password"
                            placeholder="Please type your password here"
                            value={form.password}
                            onChange={(v) => updateField("password", v)}
                            touched={touched}
                            onBlurField={markTouched}
                        />
                        <FormField
                            fieldKey="passwordConfirm"
                            label="Password Confirmation"
                            required
                            type="password"
                            placeholder="Please type your password here"
                            value={form.passwordConfirm}
                            onChange={(v) => updateField("passwordConfirm", v)}
                            touched={touched}
                            onBlurField={markTouched}
                        />
                    </div>

                    {/* Organization contact */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-[#1B2A4A] font-bold text-2xl sm:text-3xl">
                            Organization contact
                        </h2>

                        <FormField
                            fieldKey="orgName"
                            label="Organization name"
                            required
                            placeholder="Please type your organization name here"
                            value={form.orgName}
                            onChange={(v) => updateField("orgName", v)}
                            touched={touched}
                            onBlurField={markTouched}
                        />
                        <FormField
                            fieldKey="country"
                            label="Country"
                            required
                            placeholder="Select your Country"
                            value={form.country}
                            onChange={(v) => updateField("country", v)}
                            touched={touched}
                            onBlurField={markTouched}
                        />

                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex-1">
                                <FormField
                                    fieldKey="city"
                                    label="City"
                                    required
                                    placeholder="Type your city"
                                    value={form.city}
                                    onChange={(v) => updateField("city", v)}
                                    touched={touched}
                                    onBlurField={markTouched}
                                />
                            </div>
                            <div className="w-full sm:w-[200px]">
                                <FormField
                                    fieldKey="zip"
                                    label="ZIP / Postal Code"
                                    required
                                    placeholder="Your ZIP code"
                                    value={form.zip}
                                    onChange={(v) => updateField("zip", v)}
                                    touched={touched}
                                    onBlurField={markTouched}
                                />
                            </div>
                        </div>

                        <FormField
                            fieldKey="address"
                            label="Address"
                            required
                            placeholder="Please type your address"
                            value={form.address}
                            onChange={(v) => updateField("address", v)}
                            touched={touched}
                            onBlurField={markTouched}
                        />
                    </div>

                    {/* Extra contact info (không bắt buộc) */}
                    <div className="flex flex-col gap-6">
                        <FormInput
                            label="Email address"
                            placeholder="Please type your organization email address"
                            value={form.orgEmail}
                            onChange={(v) => updateField("orgEmail", v)}
                        />
                        <FormInput
                            label="Facebook URL"
                            placeholder="Please type your Facebook URL"
                            value={form.facebookUrl}
                            onChange={(v) => updateField("facebookUrl", v)}
                        />
                        <FormInput
                            label="Website URL"
                            placeholder="Please type your Website URL"
                            value={form.websiteUrl}
                            onChange={(v) => updateField("websiteUrl", v)}
                        />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="mt-1 w-4 h-4 accent-[#1B2A4A]"
                        />
                        <p className="text-[#1B2A4A] text-[15px] leading-relaxed">
                            By proceeding, you agree to ASIA HOSPITALITY AWARDS{" "}
                            <a href="#" className="underline">
                                Terms of use &amp; Privacy Policy
                            </a>{" "}
                            and agree to receive newsletters from Asia Hospitality Awards.
                        </p>
                    </div>

                    {/* Submit */}
                    <div className="flex justify-center">
                        <button
                            onClick={handleSubmit}
                            className="flex items-center gap-2 bg-[#1B2A4A] text-white uppercase px-8 py-4 hover:bg-[#243357] transition"
                        >
                            Create your account
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            )}

            {activeTab === "nomination" && (
                <div className="mt-10 flex flex-col gap-16">
                    {nominationSections.map((section) => (
                        <NominationSection
                            key={section.key}
                            title={section.title}
                            description={section.description}
                            options={section.options}
                            selected={nominations[section.key]}
                            pricePerEntry={PRICE_PER_ENTRY}
                            onAdd={(opt) => addNomination(section.key, opt)}
                            onRemove={(opt) => removeNomination(section.key, opt)}
                        />
                    ))}

                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-1 hidden lg:block" />
                        <div className="w-full lg:w-[220px] flex flex-col gap-3">
                            <h3 className="text-[#1B2A4A] font-bold uppercase">
                                Total entries
                            </h3>
                            <div className="border border-gray-300 px-5 py-4 text-center text-gray-700 bg-white">
                                {totalEntries}
                            </div>
                        </div>
                        <div className="w-full lg:w-[220px] flex flex-col gap-3">
                            <h3 className="text-[#1B2A4A] font-bold uppercase">Total fee</h3>
                            <div className="border border-gray-300 px-5 py-4 text-center text-gray-700 bg-white">
                                USD {totalFee}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={() => {
                                if (totalEntries === 0) {
                                    alert("Vui lòng chọn ít nhất 1 hạng mục trước khi thanh toán.");
                                    return;
                                }
                                setActiveTab("payment");
                            }}
                            className="flex items-center gap-2 bg-[#1B2A4A] text-white uppercase px-8 py-4 hover:bg-[#243357] transition"
                        >
                            Payment by PayPal
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            )}

            {activeTab === "payment" && (
                <div className="mt-10 text-center text-gray-400 py-20"></div>
            )}
        </div>
    );
}
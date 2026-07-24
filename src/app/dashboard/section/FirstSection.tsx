"use client";

import { User, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const NAVY = "#1B2A41";
const ROSE = "#C48F7F";

// ===================== Types =====================

export type ProjectProgress = {
    name: string;
    percent: number; // 0-100
};

export type AccountInfo = {
    name: string;
    organization: string;
    email: string;
    address: string;
};

export type DashboardSectionProps = {
    username: string;
    totalSubmissions: number;
    daysLeft: number;
    completedSubmissions: number;
    completionPercent: number; // dùng cho donut chart, vd 77
    entriesCompletedLabel: string; // vd "7/9 entries completed"
    projects: ProjectProgress[];
    account: AccountInfo;
    supportEmail: string;
    supportPhone: string;
    onCompleteSubmission?: () => void;
    onViewDetails?: () => void;
    onAddMoreNominations?: () => void;
    onChangeInformation?: () => void;
};

// ===================== Sub components =====================

function StatCard({
    value,
    label,
    sublabel,
}: {
    value: string | number;
    label: string;
    sublabel: string;
}) {
    return (
        <div
            className="flex items-center gap-4 px-6 py-5"
            style={{ backgroundColor: NAVY }}
        >
            <span
                className="text-5xl font-bold leading-none"
                style={{ color: ROSE }}
            >
                {typeof value === "number" ? String(value).padStart(2, "0") : value}
            </span>
            <div className="text-white">
                <p className="text-sm font-bold uppercase leading-tight">{label}</p>
                <p className="text-sm italic" style={{ color: ROSE }}>
                    {sublabel}
                </p>
            </div>
        </div>
    );
}

function DonutChart({ percent }: { percent: number }) {
    const size = 260;
    const strokeWidth = 34;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const clamped = Math.min(100, Math.max(0, percent));
    const offset = circumference * (1 - clamped / 100);

    return (
        <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="-rotate-90">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#EDEDED"
                    strokeWidth={strokeWidth}
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={NAVY}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="butt"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl font-bold" style={{ color: NAVY }}>
                    {clamped}%
                </span>
            </div>
        </div>
    );
}

function ProgressRow({ name, percent }: ProjectProgress) {
    return (
        <div>
            <p className="mb-1.5 text-base" style={{ color: NAVY }}>
                {name}
            </p>
            <div className="h-2.5 w-full bg-[#EDEDED]">
                <div
                    className="h-full"
                    style={{
                        width: `${Math.min(100, Math.max(0, percent))}%`,
                        backgroundColor: NAVY,
                    }}
                />
            </div>
        </div>
    );
}


export default function DashboardSection({
    username,
    totalSubmissions,
    daysLeft,
    completedSubmissions,
    completionPercent,
    entriesCompletedLabel,
    projects,
    account,
    supportEmail,
    supportPhone,
    onCompleteSubmission,
    onViewDetails,
    onAddMoreNominations,
    onChangeInformation,
}: DashboardSectionProps) {
    return (
        <section className="mx-auto max-w-[1220px] px-6 py-14">
            {/* Header text */}
            <div className="mb-10 flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-10">
                <h1
                    className="whitespace-nowrap text-3xl font-bold sm:text-4xl"
                    style={{ color: ROSE }}
                >
                    Hello, {username}
                </h1>
                <p className="text-xl leading-snug" style={{ color: NAVY }}>
                    Here is where you will view a summary of your submissions status,
                    deadlines, and more.
                </p>
            </div>

            {/* Stat cards */}
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <StatCard
                    value={totalSubmissions}
                    label="Submissions"
                    sublabel="in total"
                />
                <StatCard value={daysLeft} label="Days left" sublabel="until due date" />
                <StatCard
                    value={completedSubmissions}
                    label="Completed submissions"
                    sublabel=""
                />
            </div>

            {/* Status overview card */}
            <div
                className="mb-10 rounded-sm border p-8 sm:p-10"
                style={{ borderColor: "#EED9CF" }}
            >
                <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
                    <div className="flex flex-col items-center">
                        <DonutChart percent={completionPercent} />
                        <p className="mt-4 text-base" style={{ color: NAVY }}>
                            {entriesCompletedLabel}
                        </p>
                    </div>

                    <div className="w-full flex-1">
                        <h2
                            className="mb-6 text-3xl font-bold"
                            style={{ color: NAVY, fontFamily: "var(--font-display, inherit)" }}
                        >
                            Status Overview
                        </h2>

                        <div className="flex flex-col gap-5">
                            {projects.map((project) => (
                                <ProgressRow key={project.name} {...project} />
                            ))}
                        </div>

                        <div className="mt-8 grid grid-cols-[1fr_auto] overflow-hidden">
                            <button
                                type="button"
                                onClick={onCompleteSubmission}
                                className="px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
                                style={{ backgroundColor: NAVY }}
                            >
                                Complete your submission
                            </button>
                            <button
                                type="button"
                                onClick={onViewDetails}
                                className="border px-6 py-4 text-sm font-semibold uppercase tracking-wide transition hover:bg-[#F5F5F5]"
                                style={{ borderColor: NAVY, color: NAVY }}
                            >
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add more nominations */}
            <div className="mb-10 flex justify-center">
                <button
                    type="button"
                    onClick={onAddMoreNominations}
                    className="px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
                    style={{ backgroundColor: NAVY }}
                >
                    Add more nominations
                </button>
            </div>

            {/* Account + Support */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-sm border p-8" style={{ borderColor: "#EED9CF" }}>
                    <h2 className="mb-3 text-2xl font-bold" style={{ color: NAVY }}>
                        Account
                    </h2>
                    <hr className="mb-5" style={{ borderColor: "#EED9CF" }} />

                    <p className="mb-3 text-2xl font-semibold" style={{ color: NAVY }}>
                        {account.name}
                    </p>

                    <div className="flex flex-col gap-2.5 text-[15px]" style={{ color: NAVY }}>
                        <div className="flex items-center gap-3">
                            <User size={18} strokeWidth={1.75} />
                            <span>{account.organization}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail size={18} strokeWidth={1.75} />
                            <span>{account.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin size={18} strokeWidth={1.75} />
                            <span>{account.address}</span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onChangeInformation}
                        className="mt-5 text-sm italic underline"
                        style={{ color: ROSE }}
                    >
                        Change your information
                    </button>
                </div>

                <div className="rounded-sm border p-8" style={{ borderColor: "#EED9CF" }}>
                    <h2 className="mb-5 text-2xl font-bold" style={{ color: NAVY }}>
                        Need help?
                    </h2>

                    <p className="mb-3 text-sm font-bold" style={{ color: NAVY }}>
                        Contact our support centre
                    </p>
                    <div className="flex flex-col gap-2.5 text-[15px]" style={{ color: NAVY }}>
                        <div className="flex items-center gap-3">
                            <Mail size={18} strokeWidth={1.75} />
                            <span>{supportEmail}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={18} strokeWidth={1.75} />
                            <span>{supportPhone}</span>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                        <span className="text-sm font-bold" style={{ color: NAVY }}>
                            Or chat with us at
                        </span>
                        <div className="flex gap-2">
                            {/* Thay bằng icon brand (Messenger/Viber/WhatsApp) thật nếu có SVG riêng */}
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center"
                                style={{ backgroundColor: NAVY }}
                                aria-label="Messenger"
                            >
                                <MessageCircle size={16} className="text-white" />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center"
                                style={{ backgroundColor: NAVY }}
                                aria-label="Viber"
                            >
                                <Phone size={16} className="text-white" />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center"
                                style={{ backgroundColor: NAVY }}
                                aria-label="WhatsApp"
                            >
                                <MessageCircle size={16} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
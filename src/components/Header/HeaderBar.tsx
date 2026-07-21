"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";

function FacebookIcon({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.8 8.44-4.94 8.44-9.94z" />
        </svg>
    );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
            <circle cx="12" cy="12" r="4.3" />
            <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
        </svg>
    );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
        </svg>
    );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.49 20.5 12 20.5 12 20.5s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4l6.27 3.6-6.27 3.6z" />
        </svg>
    );
}

type HeaderBarProps = {
    user?: {
        name: string;
    } | null;
};

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`inline-block p-[13px] text-base font-normal transition-colors ${isActive
                ? "bg-[#C48F7F] text-[#1C2A42] font-bold"
                : "text-[#C48F7F] hover:bg-[#C48F7F]/20"
                }`}
        >
            {children}
        </Link>
    );
}


function MobileNavItem({
    href,
    children,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    onClick: () => void;
}) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`block w-full px-6 py-6 text-lg border-b border-white/10 transition-colors ${isActive
                ? "bg-[#C48F7F] text-[#1C2A42] font-semibold"
                : "text-white"
                }`}
        >
            {children}
        </Link>
    );
}

export default function HeaderBar({ user }: HeaderBarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    const loggedOutLinks = [
        { href: "/", label: "Homepage" },
        { href: "/award", label: "The Award" },
        { href: "/media-center", label: "Media Center" },
        { href: "/categories", label: "Categories" },
        { href: "/get-involved", label: "Get Involved" },
        { href: "/winners", label: "Winners'" },
        { href: "/contact", label: "Contact" },
    ];

    const loggedInLinks = [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/status", label: "Status Overview" },
        { href: "/submission", label: "Your Submission" },
        { href: "/account", label: "Account" },
        { href: "/profile", label: `Hello, ${user?.name ?? ""}` },
    ];

    const mobileLinks = user ? loggedInLinks : loggedOutLinks;

    return (
        <header className="relative w-full bg-[#222D43]">
            {/* ===== DESKTOP (giữ nguyên layout gốc, chỉ ẩn dưới md) ===== */}
            <div className="hidden md:flex h-[102px] w-full items-center justify-center">
                {user ? (
                    <div className="flex items-center justify-center">
                        <div>
                            <NavItem href="/dashboard">DASHBOARD</NavItem>
                            <NavItem href="/status">STATUS OVERVIEW</NavItem>
                        </div>
                        <div className="mx-[60px] my-[21px]">
                            <img src="/AHALogo/LogoPink.svg" alt="Logo" className="h-[60px] w-auto" />
                        </div>
                        <div className="flex items-center justify-center">
                            <NavItem href="/submission">YOUR SUBMISSION</NavItem>
                            <NavItem href="/account">ACCOUNT</NavItem>
                            <NavItem href="/profile">Hello, {user.name}</NavItem>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-between">
                        <div>
                            <NavItem href="/award">THE AWARD</NavItem>
                            <NavItem href="/media-center">MEDIA CENTER</NavItem>
                            <NavItem href="/categories">CATEGORIES</NavItem>
                            <NavItem href="/registration">REGISTRATION</NavItem>
                        </div>
                        <div className="mx-[60px] my-[21px]">
                            <img src="/AHALogo/LogoPink.svg" alt="Logo" className="h-[60px] w-auto" />
                        </div>
                        <div className="flex items-center justify-center">
                            <NavItem href="/get-involved">GET INVOLVED</NavItem>
                            <NavItem href="/winners">WINNERS</NavItem>
                            <NavItem href="/latest-update">LATEST UPDATE</NavItem>
                            <NavItem href="/login">LOG IN</NavItem>
                        </div>
                    </div>
                )}
            </div>

            {/* ===== MOBILE TOP BAR: hamburger - logo - user icon ===== */}
            <div className="flex md:hidden h-[72px] w-full items-center justify-between px-5">
                <button
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(true)}
                    className="text-[#C48F7F]"
                >
                    <Menu size={28} strokeWidth={2.2} />
                </button>

                <img src="/AHALogo/LogoPink.svg" alt="Logo" className="h-[38px] w-auto" />

                <Link
                    href={user ? "/profile" : "/login"}
                    aria-label="Account"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C48F7F] text-[#1C2A42]"
                >
                    <User size={18} />
                </Link>
            </div>

            {/* ===== MOBILE FULL-SCREEN MENU ===== */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 flex flex-col bg-[#222D43] md:hidden">
                    {/* header của menu: logo trắng + nút đóng */}
                    <div className="flex items-center justify-between px-5 h-[72px] shrink-0">
                        <img
                            src="/AHALogo/LogoWhite.svg"
                            alt="Logo"
                            className="h-[46px] w-auto"
                        />
                        <button aria-label="Close menu" onClick={closeMenu} className="text-white">
                            <X size={28} strokeWidth={2.2} />
                        </button>
                    </div>

                    {/* danh sách link, cuộn được nếu màn hình thấp */}
                    <nav className="flex flex-col overflow-y-auto">
                        {mobileLinks.map((link) => (
                            <MobileNavItem key={link.href} href={link.href} onClick={closeMenu}>
                                {link.label}
                            </MobileNavItem>
                        ))}
                    </nav>

                    {/* follow us, đẩy xuống đáy màn hình */}
                    <div className="mt-auto flex flex-col items-center gap-4 py-10">
                        <p className="text-[13px] tracking-widest text-[#C48F7F]">FOLLOW US</p>
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C48F7F] text-[#1C2A42]"
                            >
                                <FacebookIcon size={18} />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C48F7F] text-[#1C2A42]"
                            >
                                <InstagramIcon size={18} />
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C48F7F] text-[#1C2A42]"
                            >
                                <LinkedinIcon size={18} />
                            </a>
                            <a
                                href="#"
                                aria-label="YouTube"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C48F7F] text-[#1C2A42]"
                            >
                                <YoutubeIcon size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
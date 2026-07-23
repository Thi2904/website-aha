"use client";

import { useState } from "react";
import { X } from "lucide-react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function LoginModal({ isOpen, onClose }: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={onClose}
        >
            <div
                className="relative w-[90%] max-w-[550px] bg-[#222D43] p-8 sm:p-10"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-[#C48F7F] hover:opacity-70"
                >
                    <X size={28} />
                </button>

                <h2 className="text-white uppercase font-bold text-xl sm:text-2xl mb-8">
                    Sign in with your AHA account
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="border border-[#C48F7F] px-4 pt-2 pb-3">
                        <label className="block text-[#C48F7F] text-xs mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="abcxyz@gmail.com"
                            className="w-full bg-transparent text-white outline-none placeholder:text-white/60"
                        />
                    </div>

                    <div className="border border-[#C48F7F] px-4 pt-2 pb-3">
                        <label className="block text-[#C48F7F] text-xs mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-transparent text-white outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-white text-[#222D43] font-semibold uppercase py-3 hover:bg-white/90 transition"
                    >
                        Sign In
                    </button>
                </form>

                <a
                    href="#"
                    className="block text-[#C48F7F] italic underline text-sm mt-4"
                >
                    Forgot your password?
                </a>

                <p className="text-white text-center italic text-sm mt-6 mb-3">
                    Not an AHA member?
                </p>

                <a
                    href="/register"
                    className="w-full block text-center bg-white text-[#222D43] font-semibold uppercase py-3 hover:bg-white/90 transition"
                >
                    Create your account
                </a>
            </div>
        </div>
    );
}
"use client";

import { useState, FormEvent, useEffect } from "react";
import { Check } from "lucide-react";

const NAVY = "#1B2A41";

type Step = "form" | "success";

interface ResetPasswordSectionProps {

    onResetPassword: (password: string) => Promise<void>;
    onRedirectHome: () => void;
    redirectDelaySeconds?: number;
}

export default function ResetPasswordSection({
    onResetPassword,
    onRedirectHome,
    redirectDelaySeconds = 3,
}: ResetPasswordSectionProps) {
    const [step, setStep] = useState<Step>("form");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (step !== "success") return;
        const timer = setTimeout(onRedirectHome, redirectDelaySeconds * 1000);
        return () => clearTimeout(timer);
    }, [step, onRedirectHome, redirectDelaySeconds]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);

        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setIsSubmitting(true);
        try {
            await onResetPassword(password);
            setStep("success");
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="flex min-h-[70vh] items-center justify-center bg-[#F5F5F5] px-6 py-24">
            {step === "form" ? (
                <div className="w-full max-w-[790px]">
                    <h1
                        className="mb-10 text-center text-3xl font-bold uppercase leading-tight sm:text-4xl"
                        style={{ color: NAVY }}
                    >
                        You&apos;ve requested to
                        <br />
                        change your password
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <div
                            className="relative mb-6 rounded-[2px] border px-4 pb-4 pt-2"
                            style={{ borderColor: NAVY }}
                        >
                            <label
                                htmlFor="password"
                                className="absolute -top-2.5 left-3 bg-[#F5F5F5] px-1.5 text-xs font-medium"
                                style={{ color: NAVY }}
                            >
                                Your New Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Your New Password"
                                autoComplete="new-password"
                                className="w-full bg-transparent pt-1 text-lg outline-none placeholder:text-[#B0B6C0]"
                                style={{ color: NAVY }}
                                disabled={isSubmitting}
                            />
                        </div>

                        <div
                            className="relative mb-2 rounded-[2px] border px-4 pb-4 pt-2"
                            style={{ borderColor: NAVY }}
                        >
                            <label
                                htmlFor="confirmPassword"
                                className="absolute -top-2.5 left-3 bg-[#F5F5F5] px-1.5 text-xs font-medium"
                                style={{ color: NAVY }}
                            >
                                Re-Enter Your New Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Re-Enter Your New Password"
                                autoComplete="new-password"
                                className="w-full bg-transparent pt-1 text-lg outline-none placeholder:text-[#B0B6C0]"
                                style={{ color: NAVY }}
                                disabled={isSubmitting}
                            />
                        </div>

                        {error && (
                            <p className="mb-2 text-sm text-red-600" role="alert">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-4 w-full rounded-[2px] py-4 text-lg text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                            style={{ backgroundColor: NAVY }}
                        >
                            {isSubmitting ? "Saving..." : "Save"}
                        </button>
                    </form>
                </div>
            ) : (
                <div className="w-full max-w-[880px] text-center">
                    <div
                        className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full"
                        style={{ backgroundColor: NAVY }}
                    >
                        <Check className="h-12 w-12 text-[#F5F5F5]" strokeWidth={2} />
                    </div>

                    <h1
                        className="mb-3 text-3xl font-bold uppercase sm:text-4xl"
                        style={{ color: NAVY }}
                    >
                        Your password has been updated!
                    </h1>
                    <p className="text-lg" style={{ color: NAVY }}>
                        You will be redirected to Homepage
                    </p>
                </div>
            )}
        </section>
    );
}
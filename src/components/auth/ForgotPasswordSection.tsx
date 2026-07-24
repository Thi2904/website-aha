"use client";

import { useState, FormEvent } from "react";
import { Mail } from "lucide-react";

const NAVY = "#1B2A41";

type Step = "request" | "sent";

interface ForgotPasswordSectionProps {

    onRequestReset: (email: string) => Promise<void>;
    onBackToLogin?: () => void;
    onContactSupport?: () => void;
}

export default function ForgotPasswordSection({
    onRequestReset,
    onBackToLogin,
    onContactSupport,
}: ForgotPasswordSectionProps) {
    const [step, setStep] = useState<Step>("request");
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!email.trim()) {
            setError("Please enter your email address.");
            return;
        }

        setIsSubmitting(true);
        try {
            await onRequestReset(email.trim());
            setStep("sent");
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
            {step === "request" ? (
                <div className="w-full max-w-[770px] text-center">
                    <h1
                        className="mb-10 text-4xl font-bold sm:text-5xl"
                        style={{ color: NAVY }}
                    >
                        Forgot Password
                    </h1>

                    <form onSubmit={handleSubmit} className="text-left">
                        <div
                            className="relative rounded-[2px] border px-4 pb-4 pt-2"
                            style={{ borderColor: NAVY }}
                        >
                            <label
                                htmlFor="email"
                                className="absolute -top-2.5 left-3 bg-[#F5F5F5] px-1.5 text-xs font-medium"
                                style={{ color: NAVY }}
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="john@gmail.com"
                                autoComplete="email"
                                className="w-full bg-transparent pt-1 text-lg outline-none placeholder:text-[#8B93A3]"
                                style={{ color: NAVY }}
                                disabled={isSubmitting}
                            />
                        </div>

                        {error && (
                            <p className="mt-2 text-sm text-red-600" role="alert">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-4 w-full rounded-[2px] py-4 text-lg text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                            style={{ backgroundColor: NAVY }}
                        >
                            {isSubmitting ? "Sending..." : "Reset Password"}
                        </button>
                    </form>
                </div>
            ) : (
                <div className="w-full max-w-[880px] text-center">
                    <div
                        className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full"
                        style={{ backgroundColor: NAVY }}
                    >
                        <Mail className="h-12 w-12 text-[#F5F5F5]" strokeWidth={1.5} />
                    </div>

                    <h1
                        className="mb-4 text-4xl font-bold sm:text-5xl"
                        style={{ color: NAVY }}
                    >
                        Check your mail!
                    </h1>
                    <p className="mb-10 text-lg leading-relaxed" style={{ color: NAVY }}>
                        A temporary password message has been dispatched to your email.
                        <br />
                        This may take a few minutes to arrive in your inbox.
                    </p>

                    <button
                        type="button"
                        onClick={onBackToLogin}
                        className="w-full rounded-[2px] py-4 text-lg text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: NAVY }}
                    >
                        Back to login
                    </button>

                    <button
                        type="button"
                        onClick={onContactSupport}
                        className="mt-5 text-base italic underline"
                        style={{ color: NAVY }}
                    >
                        Contact Support
                    </button>
                </div>
            )}
        </section>
    );
}
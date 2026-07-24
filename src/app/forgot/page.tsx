"use client";

import ForgotPasswordSection from "@/src/components/auth/ForgotPasswordSection";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
    const router = useRouter();

    const handleRequestReset = async (email: string) => {
        const res = await fetch("/api/auth/forgot-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });
        if (!res.ok) {
            const data = await res.json().catch(() => null);
            throw new Error(data?.message ?? "Email not found.");
        }
    };

    return (
        <ForgotPasswordSection
            onRequestReset={handleRequestReset}
            onBackToLogin={() => router.push("/login")}
            onContactSupport={() => router.push("/support")}
        />
    );
}

// ===== app/dat-lai-mat-khau/page.tsx =====
// Giả sử link trong email dạng: /dat-lai-mat-khau?token=xxxxx
/*
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ResetPasswordSection from "@/components/auth/ResetPasswordSection";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleResetPassword = async (password: string) => {
    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(data?.message ?? "Reset link is invalid or expired.");
    }
  };

  return (
    <ResetPasswordSection
      onResetPassword={handleResetPassword}
      onRedirectHome={() => router.push("/")}
    />
  );
}
*/
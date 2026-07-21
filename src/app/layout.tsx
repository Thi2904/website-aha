import HeaderBar from "@/src/components/Header/HeaderBar";
import Footer from "@/src/components/Footer/Footer";
import "./globals.css";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026 Asia Hospitality Awards",
  description: "The 2026 Asia Hospitality Awards - Influential Asia",
  icons: {
    icon: "/AHALogo/AAO.svg",
    shortcut: "/AHALogo/AAO.svg",
    apple: "/AHALogo/AAO.svg",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <main className="web-scroll">
          <HeaderBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
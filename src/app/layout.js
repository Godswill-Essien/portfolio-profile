
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

import Aos from "@/components/Aos";
import InteractiveSphere from "@/components/InteractiveSphere";
import Assistant from "@/components/Assistant";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-main",
});

export const metadata = {
  title: "Godswill Essien — Frontend Developer & AI Creative Technologist",
  description:
    "Portfolio of Godswill Essien, a Frontend Developer & AI Creative Technologist based in Port Harcourt, Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <LanguageProvider>
          <Aos />

          {children}

          {/* AI EXPERIENCE */}
          <InteractiveSphere />
          <Assistant />
        </LanguageProvider>
      </body>
    </html>
  );
}


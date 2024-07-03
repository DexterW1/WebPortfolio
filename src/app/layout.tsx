import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import NavbarCustom from "@/screens/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dexter Wong | Portfolio",
  description:
    "Welcome to Dexter Wong's professional portfolio. Explore my projects, skills, and experiences in web & mobile development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarCustom />
        {children}
        <Footer />
      </body>
    </html>
  );
}

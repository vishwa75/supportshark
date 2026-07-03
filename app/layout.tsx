import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SupportShark",
  description: "Developer and Production Support Toolkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <Navbar />

        <main className="min-h-[calc(100vh-128px)]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
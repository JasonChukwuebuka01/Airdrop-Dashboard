import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import HeaderNav from "@/components/Helper/HeaderNav";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen flex p-0">
          {/* Sidebar Navigation (Hidden on Mobile, Visible on Large Screens) */}
          <NavBar />

          {/* Main Content Area */}
          <main className="flex-1 bg-gray-100 w-[87%] h-screen">
            <HeaderNav />
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}







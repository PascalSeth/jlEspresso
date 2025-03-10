import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JL Espresso",
  description: "Powering Your Perfect Coffee Experience",
  icons: ["/jlexpresso/JLLogo.png"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
  <link rel="icon" href="/jlexpresso/JLLogo.png" sizes="any" type="image/png" />
</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased`}
      >
        <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}

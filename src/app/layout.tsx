import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "IT Support Pro - Tier-1 & Tier-2 IT Support Services",
  description: "Comprehensive remote IT support solutions delivering expert help desk services, Microsoft 365 administration, cloud infrastructure support, and VPN services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        
        {children}
        <Footer />
        </body>
    
    </html>
  );
}
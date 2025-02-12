import { Inter } from "next/font/google";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// import cursorYouImage from "../assets/images/cursor-you.svg";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata = {
  title: "Wealthy",
  description: "Track, manage, and visualize your finances effortlessly",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} selection:bg-lime-600 selection:text-white`}
          // style={{ cursor: `url(${cursorYouImage.src}), auto` }}
        >
          <Toaster richColors position="top-right" />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

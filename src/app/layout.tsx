import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footter from "@/components/Footter";
import { HomeIcon, BookOpen, FileText } from "lucide-react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nayzaw Minnaing Portfolio | (Developer)",
  description: "A Nayzaw Minnaing production",
};

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Blog",
    link: "/blog",
    icon: <BookOpen />,
  },
  {
    name: "Resume",
    link: "/",
    icon: <FileText />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          <FloatingNav navItems={navItems} />
          {children}
          <Footter />
        </div>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UXByte Studio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

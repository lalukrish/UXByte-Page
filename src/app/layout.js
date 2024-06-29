import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UXByte Studio",
  description: "",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head> */}
      <html>
        
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}

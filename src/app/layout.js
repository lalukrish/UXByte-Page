import { K2D } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Head from "next/head";

export const metadata = {
  title: "UXByte Studio",
  description: "",
  icon: "/favicon.ico",
};

const k2dFont = K2D({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <>
      {/* <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head> */}
      <html>
        <body className={k2dFont.className}>{children}</body>
      </html>
    </>
  );
}

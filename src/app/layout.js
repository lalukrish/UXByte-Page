import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "UXByte",
  description: "Design , Devlopment, Marketing",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "UXByte",
  description: "Design , Devlopment, Marketing",
};

export default function RootLayout({ children }) {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

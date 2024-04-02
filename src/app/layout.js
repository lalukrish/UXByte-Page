import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Navbarpage from "@/components/Navbar-page";

export const metadata = {
  title: "UXByte",
  description: "Design , Devlopment, Marketing",
};

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen  flex-col grid gap-2">
      <Navbarpage />
      {children}
      <Footer />
    </div>
  );
}

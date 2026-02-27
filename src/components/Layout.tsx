import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnnouncementPopup from "./AnnouncementPopup";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnnouncementPopup />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

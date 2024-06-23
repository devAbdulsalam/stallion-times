import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default HomeLayout;

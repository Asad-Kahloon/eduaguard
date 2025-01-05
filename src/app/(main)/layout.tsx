import type { Metadata } from "next";
import Header from "@/components/header/header";
import { ScrollProgress } from "@/components/ui/scrollProgress";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "EduaGuard",
  description: "Education Work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className="antialiased"
      >
        <Header />
        <ScrollProgress />
        {children}
        <Footer/>
      </div>
    </>
  );
}

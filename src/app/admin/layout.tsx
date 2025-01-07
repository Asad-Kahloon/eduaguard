import type { Metadata } from "next";
import Header from "@/components/header/header";
import { ScrollProgress } from "@/components/ui/scrollProgress";
import Footer from "@/components/footer/footer";
import { Toaster } from "sonner";

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
        <Toaster position="top-right"/>
        <Header />
        <ScrollProgress />
        {children}
        <Footer/>
      </>
  );
}

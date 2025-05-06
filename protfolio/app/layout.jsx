import { Sometype_Mono } from "next/font/google";
import "./globals.css";
// components
import MainNav from "@/components/MainNav";
import PageTransitions from "@/components/PageTransitions";
import RecangleTransition from "@/components/RecangleTransition";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometype-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shan's Portfolio",
  description: "Portfolio of Shan – Web Developer and Designer",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${sometypeMono.variable} antialiased`}>
        <RecangleTransition/>
        <PageTransitions>
          <div className="flex">
            <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            <div className="w-full max-w-[1130px] px-[15px] mx-auto bg-black">
              <header>header</header>
              <div>{children}</div>
            </div>
          </div>
        </PageTransitions>
      </body>
    </html>
  );
}

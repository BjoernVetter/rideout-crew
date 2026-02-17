import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import FadeBackground from "./components/FadeBackground/FadeBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "3Promille",
  description: "3Promolle",
  type: "website",
  authors: [{ name: "Björn Vetter" }, { name: "Timothy Roth" }],
  keywords: ["Malle", "Spass", "Party", "Saufen"],

  icons: { icon: "/favicon-v3.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      {/* <Head /> */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="fade-wrapper">
          <Header />
          <FadeBackground>
            <main>{children}</main>
          </FadeBackground>
        </div>

        <Footer />
      </body>
    </html>
  );
}

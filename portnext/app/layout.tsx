import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "./components/Header";
import localFont from 'next/font/local'
import { Nunito_Sans } from 'next/font/google'

const thinFont = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

const myFont = localFont({
  src: '../public/fonts/CalSans-SemiBold.woff2',
  variable: '--font-cal-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Adii Portfolio",
  description: "Adii's portfolio website",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${myFont.variable} ${thinFont.variable}`}>
      <body className="w-full h-full">
        <div className="flex justify-center">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}

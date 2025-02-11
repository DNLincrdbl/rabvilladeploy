import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimationWrapper from './components/sections/AnimationWrapper';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Villa Laki",
  description: "Luxury accommodation in Rab, Croatia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimationWrapper>
          {children}
        </AnimationWrapper>
      </body>
    </html>
  );
}
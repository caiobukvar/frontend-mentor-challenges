import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "./fonts/PlusJakartaSans-VariableFont_wght.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mortgage Calculator",
  description: "Calculate yout mortgages right now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}

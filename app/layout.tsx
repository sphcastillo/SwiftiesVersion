import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Swifties Version",
  description: "The ultimate Taylor Swift web platform where fans and businesses unite, featuring exclusive content, dynamic designs, and fan-driven experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kunal - Developer & Designer",
  description: "Full-stack developer building AI-powered tools and beautiful experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}

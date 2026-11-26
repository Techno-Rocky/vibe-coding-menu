import type { Metadata } from "next";
import { shop } from "@/data/menu";
import "./globals.css";

export const metadata: Metadata = {
  title: `${shop.name}のメニュー`,
  description: "バイブコーディング入門の練習用のアプリです。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full bg-white text-gray-900">{children}</body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Night Vision",
  description: "Équipe ton club. Monétise la nuit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="bg-black text-white">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumière | Brightening Serum — Kulit Cerah Alami",
  description:
    "Temukan serum pencerah wajah dengan Niacinamide dan tekstur ringan yang cepat meresap. Cocok untuk kulit kusam, bekas jerawat, dan tekstur tidak merata.",
  openGraph: {
    title: "Lumière | Brightening Serum",
    description:
      "Kulit cerah alami dengan Lumière Brightening Serum. Niacinamide enriched, dermatologically tested.",
    type: "website",
    locale: "id_ID",
    siteName: "Lumière",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfairDisplay.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

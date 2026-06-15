import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jagannath Group of Institutions | Modinagar, Ghaziabad",
  description: "Jagannath Group of Institutions is a premier educational group in Modinagar, Ghaziabad, UP offering professional programs in Pharmacy, Nursing, Education, Law, and General Studies across 5 colleges.",
  keywords: "Jagannath Group, Modinagar colleges, Pharmacy college UP, Nursing college Ghaziabad, Law college Modinagar, B.Ed college",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jagannath Group of Institutions | Modinagar, Ghaziabad",
  description: "Jagannath Group of Institutions is a premier educational group in Modinagar, Ghaziabad, UP offering professional programs in Pharmacy, Nursing, Education, Law, and General Studies across 5 colleges.",
  keywords: "Jagannath Group, Modinagar colleges, Pharmacy college UP, Nursing college Ghaziabad, Law college Modinagar, B.Ed college",
  icons: {
    icon: [
      { url: "/website_images/fav/favicon.ico" },
      { url: "/website_images/fav/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/website_images/fav/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/website_images/fav/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/website_images/fav/site.webmanifest"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

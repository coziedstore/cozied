import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cozied — for the cozy life",
  description: "Beauty & wellness top-10 lists, tested and recommended by our editors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

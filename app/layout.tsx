import type { Metadata } from "next";
import { Footer } from "./_components/Footer";
import { SmoothScroll } from "./_components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Complete International Education Service",
  description:
    "GED preparation and international university pathways — Complete International Education Service.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="relative min-h-full flex flex-col">
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

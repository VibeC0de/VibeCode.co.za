import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VibeCode.co.za | Premium Web Development Solutions",
  description:
    "Cutting-edge web development services for businesses looking to establish a powerful online presence.",
  metadataBase: new URL("https://vibecode.co.za"),
  openGraph: {
    title: "VibeCode.co.za | Premium Web Development Solutions",
    description:
      "Cutting-edge web development services for businesses looking to establish a powerful online presence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VibeCode - Premium Web Development Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeCode.co.za | Premium Web Development Solutions",
    description:
      "Cutting-edge web development services for businesses looking to establish a powerful online presence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className)}>
        <ThemeProvider defaultTheme="system" storageKey="orb-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

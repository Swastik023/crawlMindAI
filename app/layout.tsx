import { AppProviders } from "@/components/providers/AppProviders";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "CrawlMindAI — Visual Data Extraction with AI",
  description:
    "Build, automate, and scale intelligent web scraping workflows with a visual, no-code AI-powered platform.",
  openGraph: {
    images: `${process.env.APP_URL}/og-image.png`,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl={"/sign-in"}
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-primary hover:bg-primary/90 text-sm !shadow-none",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={outfit.className} suppressHydrationWarning>
          <AppProviders>
            {children}
            <Toaster richColors />
          </AppProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}

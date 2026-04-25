import { AppProviders } from "@/components/providers/AppProviders";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://crawlmindai.swastikagnihotri.cloud"),
  title: "CrawlMindAI - AI Web Scraper & Visual Data Extraction",
  description:
    "CrawlMindAI is an intelligent, no-code AI web scraper. Build, automate, and scale visual data extraction workflows effortlessly.",
  keywords: [
    "CrawlMindAI",
    "AI web scraper",
    "data extraction",
    "no-code scraper",
    "visual web scraping",
    "automation",
  ],
  openGraph: {
    title: "CrawlMindAI - AI Web Scraper & Visual Data Extraction",
    description:
      "Build, automate, and scale intelligent web scraping workflows with a visual, no-code AI-powered platform.",
    url: "https://crawlmindai.swastikagnihotri.cloud",
    siteName: "CrawlMindAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CrawlMindAI Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrawlMindAI - AI Web Scraper & Visual Data Extraction",
    description:
      "Build, automate, and scale intelligent web scraping workflows with a visual, no-code AI-powered platform.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE", // TODO: Replace with your actual GSC code
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://crawlmindai.swastikagnihotri.cloud/#website",
      url: "https://crawlmindai.swastikagnihotri.cloud/",
      name: "CrawlMindAI",
      description:
        "CrawlMindAI is an intelligent, no-code AI web scraper. Build, automate, and scale visual data extraction workflows effortlessly.",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://crawlmindai.swastikagnihotri.cloud/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://crawlmindai.swastikagnihotri.cloud/#software",
      name: "CrawlMindAI",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description: "Visual, no-code AI-powered platform for web scraping and data extraction.",
    },
  ],
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
          formButtonPrimary: "bg-primary hover:bg-primary/90 text-sm !shadow-none",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={outfit.className} suppressHydrationWarning>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <AppProviders>
            {children}
            <Toaster richColors />
          </AppProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}

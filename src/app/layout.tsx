import type { Metadata } from "next";
import Providers from "./providers";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "CV Extractor — AI-Powered CV Processing & Template Populator",
  description:
    "Extrahiere CV-Daten automatisch mit KI, fülle Word-Vorlagen aus, verwalte Kandidaten und chatte mit deinem CV-Assistenten. Unterstützt OpenAI, Gemini, Anthropic, Mistral, DeepSeek, Grok und mehr.",
  keywords: [
    "CV Extractor",
    "AI CV Processing",
    "Lebenslauf Generator",
    "Template Populator",
    "HR Automation",
    "Identcheck",
    "Personalvermittlung",
  ],
  authors: [{ name: "CD International GmbH" }],
  openGraph: {
    title: "CV Extractor — AI-Powered CV Processing",
    description: "Extrahiere CV-Daten automatisch mit KI und fülle Word-Vorlagen aus.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={cn("dark", "font-sans", geist.variable)}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}


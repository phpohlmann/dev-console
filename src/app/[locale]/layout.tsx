import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { CommandMenu } from "@/components/layout/command-menu";
import { TourGuide } from "@/components/layout/tour-guide";
import "@/app/globals.css";
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.SEO as unknown as {
    title: string;
    description: string;
    keywords: string;
  };

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    robots: "index, follow",
    openGraph: {
      title: t.title,
      description: t.description,
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      url: `https://pohlmann.dev/${locale}`,
      siteName: "Pedro Pohlmann Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const locales = routing.locales as readonly string[];
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground h-screen overflow-hidden">
        <NextIntlClientProvider messages={messages}>
          {children}
          <CommandMenu />
          <TourGuide />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

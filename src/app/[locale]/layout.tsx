import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { CommandMenu } from "@/components/layout/command-menu";
import "@/app/globals.css";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "pt")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground h-screen overflow-hidden">
        <NextIntlClientProvider messages={messages}>
          {children}
          <CommandMenu />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

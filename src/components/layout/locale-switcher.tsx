"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "pt" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1.5 px-2 hover:bg-white/10 transition-colors h-full cursor-pointer group"
      title="Switch Language"
    >
      <Globe
        size={12}
        className="text-primary-foreground/70 group-hover:text-primary-foreground"
      />
      <span className="uppercase font-medium">
        {locale === "pt" ? "Português" : "English"}
      </span>
    </button>
  );
}

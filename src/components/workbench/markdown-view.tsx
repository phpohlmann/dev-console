"use client";

import { useTranslations } from "next-intl";

interface MarkdownViewProps {
  fileId: string;
}

export function MarkdownView({ fileId }: MarkdownViewProps) {
  const t = useTranslations("Content");
  const section = fileId.replace(/\.[^/.]+$/, ""); // remove extension

  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold tracking-tight mb-6 border-b pb-2">
        {t(`${section}.title`)}
      </h1>
      <div className="space-y-4 text-muted-foreground leading-relaxed whitespace-pre-wrap">
        {t(`${section}.body`)}
      </div>
    </div>
  );
}

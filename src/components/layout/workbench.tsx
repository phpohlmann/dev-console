"use client";

import { useUIStore } from "@/store/use-ui-store";
import { TabBar } from "./tab-bar";
import { useTranslations } from "next-intl";

export function Workbench() {
  const { activeFileId } = useUIStore();
  const t = useTranslations("Index");

  if (!activeFileId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background text-muted-foreground p-8 text-center">
        <div className="max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-foreground/20 italic">
            DevConsole
          </h2>
          <p className="text-sm">
            Select a file from the explorer to view my technical journey.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-background overflow-hidden">
      <TabBar />

      <main className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-2 duration-500">
          {/* Placeholder for Dynamic Content */}
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            {activeFileId}
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Content for {activeFileId} will be dynamically loaded in the next
            step.
          </p>
        </div>
      </main>
    </div>
  );
}

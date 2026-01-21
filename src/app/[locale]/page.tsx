"use client";

import { useUIStore } from "@/store/use-ui-store";
import { ActivityBar } from "@/components/layout/activity-bar";
import { Sidebar } from "@/components/layout/sidebar";
import { Workbench } from "@/components/layout/workbench";
import { StatusBar } from "@/components/layout/status-bar";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function DevConsolePage() {
  const { theme, density, activeFileId, toggleSidebar, isSidebarOpen } =
    useUIStore();
  const t = useTranslations("SEO");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-density", density);
  }, [theme, density]);

  useEffect(() => {
    if (activeFileId) {
      document.title = `${activeFileId} — Pedro Pohlmann`;
    } else {
      document.title = t("title");
    }
  }, [activeFileId, t]);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background select-none transition-colors duration-300">
      <div className="flex-1 flex overflow-hidden relative">
        <ActivityBar />

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden animate-in fade-in duration-300"
            onClick={() => toggleSidebar(false)}
          />
        )}

        <Sidebar />

        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <Workbench />
        </div>
      </div>
      <StatusBar />
    </div>
  );
}

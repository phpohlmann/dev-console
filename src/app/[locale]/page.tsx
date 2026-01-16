// MODIFICATION START
"use client";

import { useUIStore } from "@/store/use-ui-store";
import { ActivityBar } from "@/components/layout/activity-bar";
import { Sidebar } from "@/components/layout/sidebar";
import { Workbench } from "@/components/layout/workbench";
import { StatusBar } from "@/components/layout/status-bar";
import { useEffect } from "react";

export default function DevConsolePage() {
  const { theme, density } = useUIStore();

  // Sync workspace settings to DOM for CSS targeting
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-density", density);
  }, [theme, density]);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background select-none transition-colors duration-300">
      <div className="flex-1 flex overflow-hidden">
        <ActivityBar />
        <Sidebar />
        <Workbench />
      </div>
      <StatusBar />
    </div>
  );
}
// MODIFICATION END

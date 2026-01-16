"use client";

import { useUIStore } from "@/store/use-ui-store";
import { ActivityBar } from "@/components/layout/activity-bar";
import { Sidebar } from "@/components/layout/sidebar";
import { Workbench } from "@/components/layout/workbench";
import { StatusBar } from "@/components/layout/status-bar";

export default function DevConsolePage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background select-none">
      <div className="flex-1 flex overflow-hidden">
        <ActivityBar />
        <Sidebar />
        <Workbench />
      </div>
      <StatusBar />
    </div>
  );
}

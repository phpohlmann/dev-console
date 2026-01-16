"use client";

import { useUIStore } from "@/store/use-ui-store";
import { navigationConfig } from "@/config/navigation";
import { NavNode } from "./nav-node";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const { isSidebarOpen, activeTab } = useUIStore();
  const t = useTranslations("Navigation");

  if (!isSidebarOpen) return null;

  return (
    <div className="w-64 bg-card/50 border-r border-border flex flex-col overflow-hidden animate-in slide-in-from-left-2 duration-200">
      <div className="h-9 px-4 flex items-center justify-between border-b border-border/50">
        <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          {t(activeTab)}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-2 custom-scrollbar">
        {activeTab === 'explorer' && (
          <div className="space-y-0.5">
            {navigationConfig.map((node) => (
              <NavNode key={node.id} node={node} level={0} />
            ))}
          </div>
        )}
        
        {activeTab === 'search' && (
          <div className="p-4 text-xs text-muted-foreground italic">
            Search implementation coming in Phase 4...
          </div>
        )}
      </div>
    </div>
  );
}
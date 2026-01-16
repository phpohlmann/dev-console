"use client";

import { useUIStore } from "@/store/use-ui-store";
import { navigationConfig } from "@/config/navigation";
import { NavNode } from "./nav-node";
import { useTranslations } from "next-intl";

export function Sidebar() {
  const { isSidebarOpen, activeTab } = useUIStore();
  const t = useTranslations("Navigation");

  if (!isSidebarOpen) return null;

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col overflow-hidden animate-in slide-in-from-left-2 duration-300">
      {/* Refined IDE-style Header */}
      <div className="h-10 px-4 flex items-center bg-muted/30 border-b border-border/50">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
          {t(activeTab)}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto py-3 custom-scrollbar">
        {activeTab === "explorer" && (
          <div className="space-y-0.5">
            {navigationConfig.map((node) => (
              <NavNode key={node.id} node={node} level={0} />
            ))}
          </div>
        )}

        {activeTab === "search" && (
          <div className="p-6 text-center space-y-2">
            <p className="text-xs text-muted-foreground italic">
              Press{" "}
              <span className="p-1 bg-muted rounded border border-border">
                Cmd + K
              </span>{" "}
              to search your career.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

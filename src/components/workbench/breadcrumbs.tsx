"use client";

import { useUIStore } from "@/store/use-ui-store";
import { navigationConfig, getBreadcrumbs } from "@/config/navigation";
import { ChevronRight, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

export function Breadcrumbs() {
  const { activeFileId, showBreadcrumbs } = useUIStore();

  if (!showBreadcrumbs || !activeFileId) return null;

  const path = getBreadcrumbs(navigationConfig, activeFileId);
  if (!path) return null;

  return (
    <nav className="h-7 px-4 flex items-center gap-1.5 border-b border-border/40 bg-background/50 text-[11px] text-muted-foreground select-none overflow-x-auto no-scrollbar">
      {path.map((item, index) => (
        <div key={item.id} className="flex items-center gap-1.5 shrink-0">
          {index > 0 && <ChevronRight size={10} className="opacity-40" />}

          <div
            className={cn(
              "flex items-center gap-1 transition-colors",
              index === path.length - 1
                ? "text-foreground font-medium"
                : "hover:text-foreground cursor-pointer"
            )}
          >
            {item.kind === "directory" && (
              <Folder size={12} className="text-muted-foreground/60" />
            )}
            <span>{item.name}</span>
          </div>
        </div>
      ))}
    </nav>
  );
}

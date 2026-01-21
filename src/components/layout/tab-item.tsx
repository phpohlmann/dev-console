"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/store/use-ui-store";

interface TabItemProps {
  fileId: string;
  isActive: boolean;
}

export function TabItem({ fileId, isActive }: TabItemProps) {
  const { openFile, closeFile } = useUIStore();

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeFile(fileId);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openFile(fileId);
    }
  };

  return (
    <div
      onClick={() => openFile(fileId)}
      onKeyDown={handleKeyDown}
      role="tab"
      aria-selected={isActive}
      tabIndex={0}
      className={cn(
        "h-9 px-3 flex items-center gap-2 border-r border-border cursor-pointer transition-colors group min-w-30 max-w-50 outline-none focus-visible:bg-background relative",
        isActive
          ? "bg-background text-foreground border-t-2 border-t-primary"
          : "bg-muted/30 text-muted-foreground hover:bg-muted/50",
      )}
    >
      <span className="text-xs truncate flex-1 pointer-events-none select-none">
        {fileId}
      </span>
      <button
        onClick={handleClose}
        aria-label={`Close tab: ${fileId}`}
        className={cn(
          "p-0.5 rounded-sm hover:bg-muted-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity outline-none focus-visible:opacity-100",
          isActive && "opacity-100",
        )}
      >
        <X size={12} />
      </button>
    </div>
  );
}

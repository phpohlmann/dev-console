"use client";

import { useUIStore } from "@/store/use-ui-store";
import { TabItem } from "./tab-item";

export function TabBar() {
  const { openFiles, activeFileId } = useUIStore();

  return (
    <div
      id="tour-tabs"
      className="h-10 w-full bg-muted/10 border-b border-border flex items-end overflow-x-auto no-scrollbar"
    >
      <div className="flex h-9">
        {openFiles.map((fileId) => (
          <TabItem
            key={fileId}
            fileId={fileId}
            isActive={activeFileId === fileId}
          />
        ))}
      </div>
    </div>
  );
}

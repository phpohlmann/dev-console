"use client";

import { useUIStore } from "@/store/use-ui-store";
import { TabItem } from "./tab-item";

export function TabBar() {
  const { openFiles, activeFileId } = useUIStore();

  return (
    <div className="h-9 w-full bg-muted/20 border-b border-border flex overflow-x-auto no-scrollbar">
      {openFiles.map((fileId) => (
        <TabItem
          key={fileId}
          fileId={fileId}
          isActive={activeFileId === fileId}
        />
      ))}
    </div>
  );
}

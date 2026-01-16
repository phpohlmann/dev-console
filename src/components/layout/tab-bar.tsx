"use client";

import { useUIStore } from "@/store/use-ui-store";
import { TabItem } from "./tab-item";

export function TabBar() {
  const { openFiles, activeFileId } = useUIStore();

  return (
    <div className="h-10 w-full bg-muted/10 border-b border-border flex items-end overflow-x-auto no-scrollbar">
      <div className="flex h-9">
        {" "}
        {/* Inner container to protect tab height */}
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

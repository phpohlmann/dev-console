// MODIFICATION START
"use client";

import { useUIStore } from "@/store/use-ui-store";
import { TabBar } from "./tab-bar";
import { Breadcrumbs } from "../workbench/breadcrumbs"; // NEW IMPORT
import { MarkdownView } from "../workbench/markdown-view";
import { ProjectDashboard } from "../workbench/project-dashboard";

export function Workbench() {
  const { activeFileId } = useUIStore();

  const renderContent = () => {
    if (!activeFileId) return null;

    if (activeFileId.endsWith(".json")) {
      return <ProjectDashboard fileId={activeFileId} />;
    }

    return <MarkdownView fileId={activeFileId} />;
  };

  if (!activeFileId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background text-muted-foreground p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground/10 italic select-none">
          DevConsole
        </h2>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-background overflow-hidden">
      <TabBar />
      <Breadcrumbs /> {/* Inserted here */}
      <main className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12">
        <div className="max-w-4xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  );
}
// MODIFICATION END

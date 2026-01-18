"use client";

import { useUIStore } from "@/store/use-ui-store";
import { TabBar } from "./tab-bar";
import { Breadcrumbs } from "../workbench/breadcrumbs";
import { IdentityView } from "../workbench/identity-view";
import { ContactForm } from "../workbench/contact-form";
import { ProjectDashboard } from "../workbench/project-dashboard";
import { TerminalView } from "../workbench/terminal-view";
import { RoadmapView } from "../workbench/roadmap-view";

export function Workbench() {
  const { activeFileId } = useUIStore();

  const renderContent = () => {
    if (!activeFileId) return null;

    if (activeFileId === "identity.md") return <IdentityView />;
    if (activeFileId === "contacts.ts") return <ContactForm />;
    if (activeFileId.endsWith(".json"))
      return <ProjectDashboard fileId={activeFileId} />;
    if (activeFileId.endsWith(".log") || activeFileId.endsWith(".txt"))
      return <TerminalView fileId={activeFileId} />;
    if (activeFileId.endsWith(".yaml"))
      return <RoadmapView fileId={activeFileId} />;

    return (
      <div className="p-8 text-muted-foreground italic">
        File type not supported.
      </div>
    );
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
    <div className="flex-1 flex flex-col bg-background overflow-hidden relative">
      <TabBar />
      <Breadcrumbs />
      <main className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12">
        <div className="max-w-4xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  );
}

"use client";

import { useUIStore } from "@/store/use-ui-store";
import { TabBar } from "../layout/tab-bar";
import { Breadcrumbs } from "../workbench/breadcrumbs";
import { IdentityView } from "../workbench/identity-view";
import { ContactForm } from "../workbench/contact-form";
import { StackView } from "../workbench/capabilities/stack-view";
import { TerminalView } from "../workbench/terminal-view";
import { RoadmapView } from "../workbench/roadmap-view";
import { RepoContextView } from "../workbench/projects/repo-context-view";
import { GrowMoneyView } from "../workbench/projects/growmoney-view";

export function Workbench() {
  const { activeFileId } = useUIStore();

  const renderContent = () => {
    if (!activeFileId) return null;

    switch (activeFileId) {
      case "identity.md":
        return <IdentityView />;
      case "contacts.ts":
        return <ContactForm />;
      case "repo-context.json":
        return <RepoContextView />;
      case "grow-money.json":
        return <GrowMoneyView />;
      case "stack.json":
        return <StackView />;
      default:
        if (activeFileId.endsWith(".log") || activeFileId.endsWith(".txt")) {
          return <TerminalView fileId={activeFileId} />;
        }
        if (activeFileId.endsWith(".yaml")) {
          return <RoadmapView fileId={activeFileId} />;
        }

        return (
          <div className="p-8 text-muted-foreground italic">
            File type not supported.
          </div>
        );
    }
  };

  if (!activeFileId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background text-muted-foreground p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground/10 italic select-none font-mono tracking-tighter">
          &gt; PEDRO_POHLMANN_CONSOLE
        </h2>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-background overflow-hidden relative">
      <TabBar />
      <Breadcrumbs />
      <main className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 md:p-12">
        <div className="max-w-4xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  );
}

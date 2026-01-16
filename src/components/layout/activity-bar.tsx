"use client";

import { Files, Search, Settings, Github, Linkedin } from "lucide-react";
import { useUIStore, ActivityTab } from "@/store/use-ui-store";
import { cn } from "@/lib/utils";

interface NavItemProps {
  id: ActivityTab;
  icon: React.ElementType;
}

export function ActivityBar() {
  const { activeTab, setActiveTab } = useUIStore();

  const NavItem = ({ id, icon: Icon }: NavItemProps) => (
    <div
      onClick={() => setActiveTab(id)}
      className={cn(
        "h-12 w-full flex items-center justify-center cursor-pointer transition-all relative group",
        activeTab === id
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {activeTab === id && (
        <div className="absolute left-0 w-0.5 h-full bg-primary" />
      )}
      <Icon size={24} strokeWidth={1.5} />
    </div>
  );

  return (
    <div className="w-12 bg-card border-r border-border flex flex-col items-center py-2 justify-between">
      <div className="w-full space-y-1">
        <NavItem id="explorer" icon={Files} />
        <NavItem id="search" icon={Search} />
      </div>

      <div className="w-full space-y-2 pb-4">
        <a
          href="https://github.com/phpohlmann"
          target="_blank"
          className="h-10 w-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/pedropohlmann"
          target="_blank"
          className="h-10 w-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <Linkedin size={20} />
        </a>
        <NavItem id="settings" icon={Settings} />
      </div>
    </div>
  );
}

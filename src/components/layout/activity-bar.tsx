"use client";

import { Files, Search, Settings, Github, Linkedin } from "lucide-react";
import { useUIStore, ActivityTab } from "@/store/use-ui-store";
import { cn } from "@/lib/utils";

interface NavItemProps {
  id: ActivityTab;
  icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({
  icon: Icon,
  isActive,
  onClick,
}: Omit<NavItemProps, "id">) => (
  <div
    onClick={onClick}
    className={cn(
      "h-12 w-full flex items-center justify-center cursor-pointer transition-all relative group",
      isActive
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground"
    )}
  >
    {isActive && <div className="absolute left-0 w-0.5 h-full bg-primary" />}
    <Icon size={24} strokeWidth={1.5} />
  </div>
);

export function ActivityBar() {
  const { activeTab, setActiveTab } = useUIStore();

  return (
    <div className="w-12 bg-card border-r border-border flex flex-col items-center py-2 justify-between">
      <div className="w-full space-y-1">
        <NavItem
          icon={Files}
          isActive={activeTab === "explorer"}
          onClick={() => setActiveTab("explorer")}
        />
        <NavItem
          icon={Search}
          isActive={activeTab === "search"}
          onClick={() => setActiveTab("search")}
        />
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
        <NavItem
          icon={Settings}
          isActive={activeTab === "settings"}
          onClick={() => setActiveTab("settings")}
        />
      </div>
    </div>
  );
}

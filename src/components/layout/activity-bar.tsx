"use client";

import {
  Files,
  Search,
  Settings,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { useUIStore, ActivityTab } from "@/store/use-ui-store";
import { useTourStore } from "@/store/use-tour-store";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface NavItemProps {
  id: string;
  tabId: ActivityTab;
  icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
  tooltip: string;
}

const NavItem = ({
  id,
  icon: Icon,
  isActive,
  onClick,
  tooltip,
}: NavItemProps) => (
  <button
    id={id}
    onClick={onClick}
    className={cn(
      "h-12 w-full flex items-center justify-center cursor-pointer transition-all relative group bg-transparent border-none outline-none",
      isActive
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground",
    )}
    aria-label={tooltip}
  >
    {isActive && <div className="absolute left-0 w-0.5 h-full bg-primary" />}
    <Icon size={22} strokeWidth={1.5} />

    <div className="hidden md:block absolute left-14 bg-popover text-popover-foreground text-[10px] px-2 py-1 rounded border border-border opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 font-medium shadow-xl">
      {tooltip}
    </div>
  </button>
);

export function ActivityBar() {
  const { activeTab, setActiveTab, setCommandMenuOpen } = useUIStore();
  const t = useTranslations("ActivityBar");
  const tNav = useTranslations("Navigation");
  const { currentStep, isTourActive } = useTourStore();

  const handleSearchClick = () => {
    setActiveTab("search");
    setCommandMenuOpen(true);
  };

  return (
    <nav className="w-12 bg-card border-r border-border flex flex-col items-center py-2 justify-between z-50 shrink-0">
      <div className="w-full space-y-1">
        <NavItem
          id="tour-explorer-trigger"
          tabId="explorer"
          icon={Files}
          isActive={activeTab === "explorer"}
          onClick={() => setActiveTab("explorer")}
          tooltip={tNav("explorer")}
        />
        <NavItem
          id="tour-search"
          tabId="search"
          icon={Search}
          isActive={activeTab === "search"}
          onClick={handleSearchClick}
          tooltip={tNav("search")}
        />
      </div>

      <div className="w-full space-y-2 pb-4 flex flex-col items-center">
        <div className="px-2 w-full mb-2">
          <a
            id="tour-resume"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className={cn(
              "h-8 w-8 mx-auto flex items-center justify-center bg-primary text-primary-foreground rounded-lg transition-all shadow-[0_0_15px_rgba(var(--primary),0.3)] group relative",
              isTourActive && currentStep === 6
                ? "animate-bounce scale-125 ring-4 ring-primary/20"
                : "hover:bg-primary/90 hover:scale-110",
            )}
            aria-label={t("downloadCV")}
          >
            <Download size={16} strokeWidth={2.5} />

            <div className="hidden md:block absolute left-12 bg-primary text-primary-foreground text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 font-bold shadow-xl border border-white/10 uppercase tracking-tighter">
              {t("downloadCV")}
            </div>
          </a>
        </div>

        <a
          href="https://github.com/phpohlmann"
          target="_blank"
          className="h-10 w-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer group relative"
          aria-label="GitHub"
        >
          <Github size={18} />
          <div className="hidden md:block absolute left-14 bg-popover text-popover-foreground text-[10px] px-2 py-1 rounded border border-border opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 font-medium">
            GitHub
          </div>
        </a>
        <a
          href="https://linkedin.com/in/pedropohlmann"
          target="_blank"
          className="h-10 w-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer group relative"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
          <div className="hidden md:block absolute left-14 bg-popover text-popover-foreground text-[10px] px-2 py-1 rounded border border-border opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 font-medium">
            LinkedIn
          </div>
        </a>
        <NavItem
          id="tour-settings"
          tabId="settings"
          icon={Settings}
          isActive={activeTab === "settings"}
          onClick={() => setActiveTab("settings")}
          tooltip={tNav("settings")}
        />
      </div>
    </nav>
  );
}

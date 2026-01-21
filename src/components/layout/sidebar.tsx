"use client";

import { useUIStore, AppTheme, AppDensity } from "@/store/use-ui-store";
import { navigationConfig } from "@/config/navigation";
import { NavNode } from "./nav-node";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const {
    isSidebarOpen,
    activeTab,
    theme,
    setTheme,
    density,
    setDensity,
    persistTabs,
    setPersistTabs,
    showBreadcrumbs,
    setShowBreadcrumbs,
  } = useUIStore();

  const tNav = useTranslations("Navigation");
  const tSet = useTranslations("Settings");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-12 z-40 w-64 bg-card border-r border-border flex flex-col overflow-hidden transition-transform duration-300 ease-in-out md:relative md:left-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:hidden",
      )}
    >
      <div className="h-10 px-4 flex items-center bg-muted/30 border-b border-border/50 shrink-0">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
          {tNav(activeTab)}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto py-3 custom-scrollbar">
        {activeTab === "explorer" && (
          <div id="tour-explorer" className="space-y-0.5">
            {navigationConfig.map((node) => (
              <NavNode key={node.id} node={node} level={0} />
            ))}
          </div>
        )}

        {activeTab === "settings" && (
          <div className="p-4 space-y-6 animate-in fade-in duration-500">
            <div className="space-y-4">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                {tSet("appearance")}
              </p>

              <div className="space-y-2">
                <Label className="text-xs">{tSet("theme_label")}</Label>
                <Select
                  value={theme}
                  onValueChange={(v: string) => setTheme(v as AppTheme)}
                >
                  <SelectTrigger className="h-8 text-xs bg-muted/50 border-border/50 w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="deep-carbon">
                      {tSet("themes.carbon")}
                    </SelectItem>
                    <SelectItem value="classic-dark">
                      {tSet("themes.classic")}
                    </SelectItem>
                    <SelectItem value="high-contrast">
                      {tSet("themes.contrast")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs">{tSet("density_label")}</Label>
                <Select
                  value={density}
                  onValueChange={(v: string) => setDensity(v as AppDensity)}
                >
                  <SelectTrigger className="h-8 text-xs bg-muted/50 border-border/50 w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="comfortable">
                      {tSet("densities.comfortable")}
                    </SelectItem>
                    <SelectItem value="compact">
                      {tSet("densities.compact")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator className="bg-border/50" />

            <div className="space-y-4">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                {tSet("localization")}
              </p>
              <div className="flex items-center justify-between">
                <Label className="text-xs">{tSet("language_label")}</Label>
                <button
                  onClick={() =>
                    router.replace(pathname, {
                      locale: locale === "pt" ? "en" : "pt",
                    })
                  }
                  className="text-[10px] font-bold uppercase text-primary hover:underline cursor-pointer"
                >
                  {locale === "pt" ? "English" : "Português"}
                </button>
              </div>
            </div>

            <Separator className="bg-border/50" />

            <div className="space-y-4">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                {tSet("workspace")}
              </p>

              <div className="flex items-center justify-between">
                <Label className="text-xs">{tSet("persist_tabs")}</Label>
                <Switch
                  checked={persistTabs}
                  onCheckedChange={setPersistTabs}
                  className="scale-75 origin-right cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-xs">{tSet("breadcrumbs")}</Label>
                <Switch
                  checked={showBreadcrumbs}
                  onCheckedChange={setShowBreadcrumbs}
                  className="scale-75 origin-right cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

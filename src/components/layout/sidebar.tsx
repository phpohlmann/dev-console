// MODIFICATION START
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

  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  if (!isSidebarOpen) return null;

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col overflow-hidden animate-in slide-in-from-left-2 duration-300">
      <div className="h-10 px-4 flex items-center bg-muted/30 border-b border-border/50">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
          {t(activeTab)}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto py-3 custom-scrollbar">
        {activeTab === "explorer" && (
          <div className="space-y-0.5">
            {navigationConfig.map((node) => (
              <NavNode key={node.id} node={node} level={0} />
            ))}
          </div>
        )}

        {activeTab === "settings" && (
          <div className="p-4 space-y-6 animate-in fade-in duration-500">
            <div className="space-y-4">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Appearance
              </p>

              <div className="space-y-2">
                <Label className="text-xs">Editor Theme</Label>
                <Select
                  value={theme}
                  onValueChange={(v: AppTheme) => setTheme(v)}
                >
                  <SelectTrigger className="h-8 text-xs bg-muted/50 border-border/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="deep-carbon" className="cursor-pointer">
                      Deep Carbon
                    </SelectItem>
                    <SelectItem value="classic-dark" className="cursor-pointer">
                      Classic Dark
                    </SelectItem>
                    <SelectItem
                      value="high-contrast"
                      className="cursor-pointer"
                    >
                      High Contrast
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs">Interface Density</Label>
                <Select
                  value={density}
                  onValueChange={(v: AppDensity) => setDensity(v)}
                >
                  <SelectTrigger className="h-8 text-xs bg-muted/50 border-border/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="comfortable" className="cursor-pointer">
                      Comfortable
                    </SelectItem>
                    <SelectItem value="compact" className="cursor-pointer">
                      Compact
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator className="bg-border/50" />

            <div className="space-y-4">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Localization
              </p>
              <div className="flex items-center justify-between">
                <Label className="text-xs">Language</Label>
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
                Workspace
              </p>

              <div className="flex items-center justify-between">
                <Label className="text-xs">Persist Tabs</Label>
                <Switch
                  checked={persistTabs}
                  onCheckedChange={setPersistTabs}
                  className="scale-75 origin-right cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-xs">Breadcrumbs</Label>
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
    </div>
  );
}
// MODIFICATION END

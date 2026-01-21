import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type ActivityTab = "explorer" | "search" | "settings";
export type AppTheme = "deep-carbon" | "classic-dark" | "high-contrast";
export type AppDensity = "comfortable" | "compact";

interface UIState {
  activeTab: ActivityTab;
  isSidebarOpen: boolean;
  activeFileId: string | null;
  openFiles: string[];
  isCommandMenuOpen: boolean;

  theme: AppTheme;
  density: AppDensity;
  persistTabs: boolean;
  showBreadcrumbs: boolean;

  setActiveTab: (tab: ActivityTab) => void;
  toggleSidebar: (force?: boolean) => void;
  openFile: (fileId: string) => void;
  closeFile: (fileId: string) => void;
  setCommandMenuOpen: (open: boolean) => void;

  setTheme: (theme: AppTheme) => void;
  setDensity: (density: AppDensity) => void;
  setPersistTabs: (val: boolean) => void;
  setShowBreadcrumbs: (val: boolean) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      activeTab: "explorer",
      isSidebarOpen: true,
      activeFileId: "identity.md",
      openFiles: ["identity.md"],
      isCommandMenuOpen: false,

      theme: "deep-carbon",
      density: "comfortable",
      persistTabs: true,
      showBreadcrumbs: true,

      setActiveTab: (tab) =>
        set((state) => ({
          activeTab: tab,
          isSidebarOpen: tab === state.activeTab ? !state.isSidebarOpen : true,
        })),

      toggleSidebar: (force) =>
        set((state) => ({
          isSidebarOpen: force !== undefined ? force : !state.isSidebarOpen,
        })),

      openFile: (fileId) =>
        set((state) => ({
          activeFileId: fileId,
          openFiles: state.openFiles.includes(fileId)
            ? state.openFiles
            : [...state.openFiles, fileId],
        })),

      closeFile: (fileId) =>
        set((state) => {
          const newOpenFiles = state.openFiles.filter((id) => id !== fileId);
          return {
            openFiles: newOpenFiles,
            activeFileId:
              state.activeFileId === fileId
                ? newOpenFiles.length > 0
                  ? newOpenFiles[newOpenFiles.length - 1]
                  : null
                : state.activeFileId,
          };
        }),

      setCommandMenuOpen: (open) => set({ isCommandMenuOpen: open }),

      setTheme: (theme) => set({ theme }),
      setDensity: (density) => set({ density }),
      setPersistTabs: (persistTabs) => set({ persistTabs }),
      setShowBreadcrumbs: (showBreadcrumbs) => set({ showBreadcrumbs }),
    }),
    {
      name: "pedro-console-settings",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        density: state.density,
        persistTabs: state.persistTabs,
        showBreadcrumbs: state.showBreadcrumbs,
        openFiles: state.persistTabs ? state.openFiles : [],
        activeFileId: state.persistTabs ? state.activeFileId : null,
      }),
    },
  ),
);

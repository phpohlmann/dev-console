import { create } from "zustand";

export type ActivityTab = "explorer" | "search" | "settings";

interface UIState {
  activeTab: ActivityTab;
  isSidebarOpen: boolean;
  activeFileId: string | null;
  openFiles: string[];

  setActiveTab: (tab: ActivityTab) => void;
  toggleSidebar: (force?: boolean) => void;
  openFile: (fileId: string) => void;
  closeFile: (fileId: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeTab: "explorer",
  isSidebarOpen: true,
  activeFileId: "identity.md",
  openFiles: ["identity.md"],

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
      let newActiveId = state.activeFileId;

      if (state.activeFileId === fileId) {
        newActiveId =
          newOpenFiles.length > 0
            ? newOpenFiles[newOpenFiles.length - 1]
            : null;
      }

      return {
        openFiles: newOpenFiles,
        activeFileId: newActiveId,
      };
    }),
}));

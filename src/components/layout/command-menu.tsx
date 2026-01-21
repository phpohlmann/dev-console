"use client";

import React, { useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { navigationConfig, NavItem } from "@/config/navigation";
import { useUIStore } from "@/store/use-ui-store";
import { FileText, FileCode, FileJson, Hash, Terminal } from "lucide-react";

export function CommandMenu() {
  const { isCommandMenuOpen, setCommandMenuOpen, openFile } = useUIStore();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandMenuOpen(!isCommandMenuOpen);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isCommandMenuOpen, setCommandMenuOpen]);

  const getAllFiles = (items: NavItem[]): NavItem[] => {
    let files: NavItem[] = [];
    items.forEach((item) => {
      if (item.kind === "file") files.push(item);
      if (item.children) files = [...files, ...getAllFiles(item.children)];
    });
    return files;
  };

  const files = getAllFiles(navigationConfig);

  const handleSelect = (fileId: string) => {
    openFile(fileId);
    setCommandMenuOpen(false);
  };

  const getIcon = (ext?: string) => {
    switch (ext) {
      case "md":
        return <FileText className="mr-2 h-4 w-4" />;
      case "json":
        return <FileJson className="mr-2 h-4 w-4" />;
      case "ts":
        return <FileCode className="mr-2 h-4 w-4" />;
      case "yaml":
        return <Terminal className="mr-2 h-4 w-4" />;
      default:
        return <Hash className="mr-2 h-4 w-4" />;
    }
  };

  return (
    <CommandDialog open={isCommandMenuOpen} onOpenChange={setCommandMenuOpen}>
      <CommandInput placeholder="Type a filename or command..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Files">
          {files.map((file) => (
            <CommandItem
              key={file.id}
              onSelect={() => handleSelect(file.id)}
              className="cursor-pointer"
            >
              {getIcon(file.extension)}
              <span>{file.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

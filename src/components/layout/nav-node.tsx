"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  Folder,
  FolderOpen,
  FileCode,
  FileText,
  FileJson,
  Hash,
  Terminal,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NavItem } from "@/config/navigation";
import { useUIStore } from "@/store/use-ui-store";

interface NavNodeProps {
  node: NavItem;
  level: number;
}

const FileIcon = ({
  extension,
  isSelected,
}: {
  extension?: string;
  isSelected: boolean;
}) => {
  const className = cn(
    "w-4 h-4",
    isSelected ? "text-primary" : "text-muted-foreground/70"
  );

  switch (extension) {
    case "md":
      return <FileText className={className} />;
    case "json":
      return <FileJson className={className} />;
    case "ts":
      return <FileCode className={className} />;
    case "yaml":
      return <Terminal className={className} />;
    case "log":
      return <Hash className={className} />;
    default:
      return <FileText className={className} />;
  }
};

export function NavNode({ node, level }: NavNodeProps) {
  const { activeFileId, openFile } = useUIStore();
  const [isOpen, setIsOpen] = useState(level < 1);

  const isSelected = activeFileId === node.id;
  const isDirectory = node.kind === "directory";

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDirectory) {
      setIsOpen(!isOpen);
    } else {
      openFile(node.id);
    }
  };

  return (
    <div className="group">
      <div
        onClick={handleClick}
        className={cn(
          "flex items-center py-1 px-2 hover:bg-accent/50 cursor-pointer transition-all duration-150 relative border-l-2 border-transparent",
          isSelected && !isDirectory && "bg-primary/5 border-l-primary"
        )}
        style={{ paddingLeft: `${level * 12 + 12}px` }}
      >
        {level > 0 && (
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-border/40 group-hover:bg-border transition-colors"
            style={{ left: `${level * 12 + 4}px` }}
          />
        )}

        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="w-4 h-4 flex items-center justify-center">
            {isDirectory &&
              (isOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />)}
          </div>

          {isDirectory ? (
            isOpen ? (
              <FolderOpen size={16} className="text-primary fill-primary/10" />
            ) : (
              <Folder size={16} className="text-muted-foreground/70" />
            )
          ) : (
            <FileIcon extension={node.extension} isSelected={isSelected} />
          )}

          <span
            className={cn(
              "text-sm truncate transition-colors",
              isSelected
                ? "text-foreground font-medium"
                : "text-muted-foreground group-hover:text-foreground"
            )}
          >
            {node.name}
          </span>
        </div>
      </div>

      {isDirectory && isOpen && node.children && (
        <div className="animate-in fade-in slide-in-from-left-1 duration-200">
          {node.children.map((child) => (
            <NavNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

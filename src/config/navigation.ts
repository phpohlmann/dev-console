export interface NavItem {
  id: string;
  name: string;
  kind: "file" | "directory";
  children?: NavItem[];
  extension?: "md" | "json" | "ts" | "log" | "txt" | "yaml";
}

export const navigationConfig: NavItem[] = [
  {
    id: "src",
    name: "src",
    kind: "directory",
    children: [
      { id: "identity.md", name: "identity.md", kind: "file", extension: "md" },
      { id: "contacts.ts", name: "contacts.ts", kind: "file", extension: "ts" },
    ],
  },
  {
    id: "projects",
    name: "projects",
    kind: "directory",
    children: [
      {
        id: "repo-context.json",
        name: "repo-context.json",
        kind: "file",
        extension: "json",
      },
      {
        id: "dev-console.json",
        name: "dev-console.json",
        kind: "file",
        extension: "json",
      },
    ],
  },
  {
    id: "capabilities",
    name: "capabilities",
    kind: "directory",
    children: [
      { id: "stack.json", name: "stack.json", kind: "file", extension: "json" },
      {
        id: "learning.log",
        name: "learning.log",
        kind: "file",
        extension: "log",
      },
    ],
  },
  {
    id: "history",
    name: "history",
    kind: "directory",
    children: [
      {
        id: "education.txt",
        name: "education.txt",
        kind: "file",
        extension: "txt",
      },
    ],
  },
  {
    id: "roadmap",
    name: "roadmap",
    kind: "directory",
    children: [
      { id: "v2026.yaml", name: "v2026.yaml", kind: "file", extension: "yaml" },
    ],
  },
];

export function getBreadcrumbs(
  items: NavItem[],
  targetId: string,
  path: NavItem[] = []
): NavItem[] | null {
  for (const item of items) {
    const currentPath = [...path, item];
    if (item.id === targetId) return currentPath;
    if (item.children) {
      const found = getBreadcrumbs(item.children, targetId, currentPath);
      if (found) return found;
    }
  }
  return null;
}
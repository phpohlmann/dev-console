export interface ProjectData {
  id: string;
  repoUrl: string;
  liveUrl: string;
  brandColor: string;
  lighthouse: {
    perf: number;
    acc: number;
    best: number;
    seo: number;
  };
  stack: string[];
}

export const projectsRegistry: Record<string, ProjectData> = {
  "repo-context.json": {
    id: "repo-context",
    repoUrl: "https://github.com/phpohlmann/RepoContext",
    liveUrl: "https://repo-context.vercel.app",
    brandColor: "#f97316", // Orange
    lighthouse: { perf: 100, acc: 100, best: 100, seo: 100 },
    stack: [
      "Next.js 16",
      "TypeScript",
      "Zustand",
      "Tailwind v4",
      "js-tiktoken",
    ],
  },
  "grow-money.json": {
    id: "grow-money",
    repoUrl: "https://github.com/phpohlmann/grow-money",
    liveUrl: "https://grow-money.vercel.app",
    brandColor: "#0052D4", // Logo Blue
    lighthouse: { perf: 98, acc: 100, best: 100, seo: 100 },
    stack: ["React", "PostgreSQL", "Node.js", "Financial API"],
  },
  "dev-console.json": {
    id: "dev-console",
    repoUrl: "https://github.com/phpohlmann/dev-console",
    liveUrl: "https://pohlmann.dev",
    brandColor: "#3b82f6", // System Blue
    lighthouse: { perf: 100, acc: 100, best: 100, seo: 100 },
    stack: ["Next.js 16", "i18n", "Framer Motion", "Shadcn UI"],
  },
};

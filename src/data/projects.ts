export interface ProjectData {
  id: string;
  repoUrl: string;
  liveUrl: string;
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
    lighthouse: { perf: 100, acc: 100, best: 100, seo: 100 },
    stack: ["Next.js 16", "TypeScript", "Zustand", "Tailwind CSS v4"],
  },
};

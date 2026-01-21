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
    brandColor: "#f97316",
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
    repoUrl: "https://github.com/phpohlmann/growMoney",
    liveUrl: "https://grow-money-frontend.vercel.app/",
    brandColor: "#0052D4",
    lighthouse: { perf: 100, acc: 100, best: 100, seo: 100 },
    stack: ["React", "MongoDB", "Express.JS", "NextJS", "TurboRepo"],
  },
};

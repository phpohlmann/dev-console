"use client";

import React from "react";
import { projectsRegistry } from "@/data/projects";
import {
  ExternalLink,
  Github,
  Zap,
  ShieldCheck,
  Accessibility,
  Search,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface MetricProps {
  icon: LucideIcon;
  label: string;
  score: number;
}

/**
 * SENIOR FIX: Component defined outside to prevent re-renders
 */
const Metric = ({ icon: Icon, label, score }: MetricProps) => (
  <div className="flex flex-col items-center p-4 bg-muted/30 rounded-xl border border-border/50">
    <Icon className="w-5 h-5 mb-2 text-primary" />
    <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
      {label}
    </span>
    <span className="text-xl font-mono font-bold text-foreground">{score}</span>
  </div>
);

export function ProjectDashboard({ fileId }: { fileId: string }) {
  const project = projectsRegistry[fileId];

  if (!project)
    return (
      <div className="p-8 text-muted-foreground">
        Project configuration not found.
      </div>
    );

  return (
    <div className="space-y-10 animate-in zoom-in-95 duration-500">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-black tracking-tighter uppercase">
            {project.id}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded font-bold uppercase"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="cursor-pointer"
          >
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" /> Code
            </a>
          </Button>
          <Button size="sm" asChild className="cursor-pointer">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
            </a>
          </Button>
        </div>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Metric
          icon={Zap}
          label="Performance"
          score={project.lighthouse.perf}
        />
        <Metric
          icon={Accessibility}
          label="Accessibility"
          score={project.lighthouse.acc}
        />
        <Metric
          icon={ShieldCheck}
          label="Best Practices"
          score={project.lighthouse.best}
        />
        <Metric icon={Search} label="SEO" score={project.lighthouse.seo} />
      </section>

      <section className="aspect-video bg-muted/20 rounded-2xl border-2 border-dashed border-border flex items-center justify-center text-muted-foreground italic text-sm">
        [ Project Screenshot Placeholder ]
      </section>
    </div>
  );
}

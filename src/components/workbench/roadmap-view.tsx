"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  GitPullRequest,
  Milestone,
  Package,
  Rocket,
  Timer,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StageProps {
  quarter: string;
  title: string;
  description: string;
  status: "deployed" | "active" | "queued";
  isLast?: boolean;
}

interface RoadmapViewProps {
  fileId: string;
}

const Stage = ({ quarter, title, description, status, isLast }: StageProps) => {
  const t = useTranslations("Roadmap.status");

  return (
    <div className="relative flex gap-6 pb-12 group">
      {!isLast && (
        <div className="absolute left-3.75 top-8 w-px h-full bg-border group-hover:bg-primary/30 transition-colors" />
      )}

      <div
        className={cn(
          "relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center bg-background shrink-0 transition-all duration-500",
          status === "deployed"
            ? "border-green-500 text-green-500 shadow-[0_0_10px_rgba(34,197,94,0.2)]"
            : status === "active"
              ? "border-primary text-primary animate-pulse"
              : "border-muted-foreground/30 text-muted-foreground/40",
        )}
      >
        {status === "deployed" ? (
          <Package size={14} />
        ) : status === "active" ? (
          <Rocket size={14} />
        ) : (
          <Timer size={14} />
        )}
      </div>

      <div className="space-y-2 pt-1">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-muted text-muted-foreground uppercase tracking-widest">
            {quarter}
          </span>
          <span
            className={cn(
              "text-[10px] font-black uppercase tracking-tighter",
              status === "deployed"
                ? "text-green-500/70"
                : status === "active"
                  ? "text-primary"
                  : "text-muted-foreground/40",
            )}
          >
            {t(status)}
          </span>
        </div>
        <h4 className="text-lg font-bold tracking-tight text-foreground">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export function RoadmapView({ fileId: _fileId }: RoadmapViewProps) {
  const t = useTranslations("Roadmap");

  return (
    <div className="max-w-2xl mx-auto space-y-10 animate-in fade-in slide-in-from-right-4 duration-700">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-primary">
          <Milestone size={24} />
          <h1 className="text-3xl font-black tracking-tighter uppercase italic">
            {t("title")}
          </h1>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {t("subtitle")}
        </p>
      </header>

      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] rotate-12">
          <GitPullRequest size={200} />
        </div>

        <div className="relative z-10">
          <Stage
            quarter={t("stages.s1_q")}
            title={t("stages.s1_t")}
            description={t("stages.s1_d")}
            status="deployed"
          />
          <Stage
            quarter={t("stages.s2_q")}
            title={t("stages.s2_t")}
            description={t("stages.s2_d")}
            status="deployed"
          />
          <Stage
            quarter={t("stages.s3_q")}
            title={t("stages.s3_t")}
            description={t("stages.s3_d")}
            status="active"
          />
          <Stage
            quarter={t("stages.s4_q")}
            title={t("stages.s4_t")}
            description={t("stages.s4_d")}
            status="queued"
            isLast
          />
        </div>
      </div>

      <div className="p-4 rounded-xl bg-muted/10 border border-border/50 flex items-center gap-4">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          {t("footer_tag")}
        </p>
      </div>
    </div>
  );
}

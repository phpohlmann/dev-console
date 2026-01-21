"use client";

import React from "react";
import {
  Terminal,
  Clock,
  GitCommit,
  BookOpen,
  Code2,
  GraduationCap,
  CheckCircle2,
  Activity,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface TerminalViewProps {
  fileId: string;
}

interface CommitProps {
  hash: string;
  author: string;
  date: string;
  title: string;
  detail: string;
  variant: "blue" | "green" | "purple";
  icon: React.ElementType;
  isLast?: boolean;
  isActive?: boolean;
}

const CommitEntry = ({
  hash,
  author,
  date,
  title,
  detail,
  variant,
  icon: Icon,
  isLast,
  isActive,
}: CommitProps) => {
  const themes = {
    blue: "text-blue-400 border-blue-400/30 bg-blue-400/5 shadow-blue-400/10",
    green:
      "text-emerald-400 border-emerald-400/30 bg-emerald-400/5 shadow-emerald-400/10",
    purple:
      "text-purple-400 border-purple-400/30 bg-purple-400/5 shadow-purple-400/10",
  };

  const lineThemes = {
    blue: "bg-blue-400/20",
    green: "bg-emerald-400/20",
    purple: "bg-purple-400/20",
  };

  return (
    <div className="relative flex gap-8 pb-12 group">
      <div className="flex flex-col items-center shrink-0">
        <div
          className={cn(
            "z-10 w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg",
            themes[variant],
          )}
        >
          <Icon size={20} />
        </div>
        {!isLast && (
          <div
            className={cn(
              "w-0.5 flex-1 my-2 rounded-full",
              lineThemes[variant],
            )}
          />
        )}
      </div>

      <div
        className={cn(
          "flex-1 relative rounded-2xl overflow-hidden transition-all duration-500",
          isActive ? "p-px shadow-[0_0_20px_var(--color-primary)]/20" : "p-px",
        )}
      >
        {isActive && (
          <div className="absolute inset-0 z-0">
            <div
              className="absolute top-1/2 left-1/2 w-[300%] aspect-square -translate-x-1/2 -translate-y-1/2 animate-[border-glow-spin_2s_linear_infinite] blur-md opacity-100"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, transparent 40%, var(--color-primary) 45%, var(--color-primary) 50%, var(--color-primary) 55%, transparent 60%, transparent 100%)",
              }}
            />
          </div>
        )}

        <div
          className={cn(
            "relative z-10 bg-card rounded-[15px] p-6 space-y-4 h-full",
            isActive ? "" : "border border-border",
          )}
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center bg-muted border border-border rounded-md px-2 py-0.5 font-mono text-[10px] text-muted-foreground hover:bg-muted/80 transition-colors">
              <GitCommit size={12} className="mr-1.5 opacity-50" />
              <span className="text-foreground">{hash}</span>
            </div>

            <span className="text-[10px] font-mono text-muted-foreground/50">
              {date}
            </span>

            {isActive ? (
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[9px] text-primary font-bold uppercase tracking-tight shadow-[0_0_10px_var(--color-primary)]/30">
                <Activity size={10} className="animate-pulse" />
                Active Session
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/5 border border-green-500/20 text-[9px] text-green-500 font-bold uppercase tracking-tight">
                <CheckCircle2 size={10} />
                Verified
              </div>
            )}
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {title}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
              {detail}
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground/40 italic">
            <span>--author=</span>
            <span className="text-muted-foreground/60">{author}</span>
            <span>{"<pedro@pohlmann.dev>"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function TerminalView({ fileId }: TerminalViewProps) {
  const t = useTranslations("Terminal");

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
      <div className="rounded-2xl border border-border overflow-hidden bg-background shadow-2xl relative">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] z-10 bg-size-[100%_4px,3px_100%]" />

        <div className="bg-muted/50 px-5 py-3 flex items-center justify-between border-b border-border relative z-20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[10px] font-mono font-bold text-muted-foreground tracking-widest uppercase">
            <Terminal size={12} className="text-primary" />
            {t("header")}
          </div>
          <div className="w-12" />
        </div>

        <div className="p-8 md:p-12 font-sans relative z-20 min-h-150">
          <div className="space-y-4">
            <CommitEntry
              hash="9b3f8e21"
              author={t("author_label")}
              variant="blue"
              icon={BookOpen}
              date={t("commits.udemy.date")}
              title={t("commits.udemy.title")}
              detail={t("commits.udemy.detail")}
              isActive={fileId === "education.txt"}
            />

            <CommitEntry
              hash="5d1a2f94"
              author={t("author_label")}
              variant="green"
              icon={Code2}
              date={t("commits.growmoney.date")}
              title={t("commits.growmoney.title")}
              detail={t("commits.growmoney.detail")}
            />

            <CommitEntry
              hash="7d2a1f94"
              author={t("author_label")}
              variant="purple"
              icon={GraduationCap}
              date={t("commits.cimol.date")}
              title={t("commits.cimol.title")}
              detail={t("commits.cimol.detail")}
              isLast
            />
          </div>

          <div className="mt-12 flex items-center gap-3 font-mono">
            <div className="px-2 py-1 bg-primary/10 text-primary rounded text-[10px] font-bold">
              pedro@pohlmann:~$
            </div>
            <div className="w-2 h-5 bg-primary animate-pulse shadow-[0_0_10px_var(--color-primary)]" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-2 text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <Clock size={12} />
          <span>Last sync: 100% integrity verified</span>
        </div>
        <span>UTF-8 / Node v22.0.0</span>
      </div>
    </div>
  );
}

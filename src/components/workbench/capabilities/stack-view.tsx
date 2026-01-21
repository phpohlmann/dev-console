"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Cpu,
  ShieldCheck,
  Terminal,
  MessageSquare,
  BookOpen,
  Globe,
  Zap,
  Code2,
  Database,
  Search,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

interface TechCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string[];
  accentColor: string;
}

const TechCard = ({
  icon: Icon,
  title,
  description,
  tags,
  accentColor,
}: TechCardProps) => (
  <motion.div
    variants={itemVariants}
    className="group relative p-px rounded-2xl overflow-hidden bg-border transition-all duration-500 hover:bg-linear-to-b hover:from-primary/20 hover:to-transparent"
  >
    <div className="relative p-6 bg-card rounded-[15px] h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div
          className={cn(
            "p-2 rounded-lg bg-muted/50 border border-border transition-colors group-hover:text-primary",
            accentColor,
          )}
        >
          <Icon size={18} />
        </div>
        <div className="flex gap-1 opacity-30">
          <div className="w-1 h-1 rounded-full bg-foreground" />
          <div className="w-1 h-1 rounded-full bg-foreground" />
          <div className="w-1 h-1 rounded-full bg-foreground" />
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-bold text-foreground tracking-tight">
          {title}
        </h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] font-mono font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground/70 border border-border group-hover:border-primary/20 group-hover:text-primary transition-all uppercase tracking-tighter"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

interface ProtocolProps {
  title: string;
  description: string;
  icon: React.ElementType;
  status: string;
  colorClass: string;
}

const ProtocolItem = ({
  title,
  description,
  icon: Icon,
  status,
  colorClass,
}: ProtocolProps) => (
  <motion.div
    variants={itemVariants}
    className="relative pl-6 border-l border-border group"
  >
    <div
      className={cn(
        "absolute -left-[4.5px] top-0 w-2 h-2 rounded-full border border-background shadow-[0_0_8px_rgba(0,0,0,0.5)]",
        colorClass,
      )}
    />
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Icon
          size={14}
          className={cn(
            "transition-colors",
            colorClass.replace("bg-", "text-"),
          )}
        />
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground">
          {title}
        </span>
        <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-muted border border-border text-muted-foreground ml-auto tracking-tighter">
          {status}
        </span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed italic pr-4">
        {description}
      </p>
    </div>
  </motion.div>
);

export function StackView() {
  const t = useTranslations("Stack");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-5xl mx-auto space-y-24 pb-20"
    >
      <header className="relative space-y-6">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Activity size={16} className="animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em]">
                {t("system_diagnostic")}
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter uppercase text-foreground">
              {t("title")}
            </h1>
            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Terminal size={12} /> {t("kernel")}
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-primary/80 uppercase">
                {t("latency")}: 0ms
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              {t("build_status")}
            </span>
            <div className="flex items-center gap-3 bg-muted/50 border border-border px-4 py-2 rounded-xl">
              <span className="text-xs font-mono font-bold text-foreground tracking-widest uppercase">
                {t("ready")}
              </span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-muted-foreground/60 whitespace-nowrap">
              01 // {t("section_1")}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <TechCard
              icon={Code2}
              title={t("tech_1")}
              description={t("tech_1_desc")}
              tags={["TypeScript", "React 19", "Tailwind v4", "Framer Motion"]}
              accentColor="text-blue-400"
            />
            <TechCard
              icon={Database}
              title={t("tech_2")}
              description={t("tech_2_desc")}
              tags={["Next.js 16", "Node.js", "MongoDB", "TurboRepo"]}
              accentColor="text-emerald-400"
            />
            <TechCard
              icon={Zap}
              title={t("tech_3")}
              description={t("tech_3_desc")}
              tags={[
                "Prompt Engineering",
                "Context Window Optimization",
                "LLM Pipelines",
              ]}
              accentColor="text-purple-400"
            />
          </div>
        </div>

        <div className="lg:col-span-5 space-y-12">
          <div className="flex items-center gap-4">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-muted-foreground/60 whitespace-nowrap">
              02 // {t("section_2")}
            </h3>
            <div className="h-px flex-1 bg-linear-to-l from-border to-transparent" />
          </div>

          <div className="space-y-10">
            <ProtocolItem
              title={t("soft_1")}
              description={t("soft_1_desc")}
              icon={Globe}
              status={t("status_verified")}
              colorClass="bg-blue-500"
            />
            <ProtocolItem
              title={t("soft_2_title")}
              description={t("soft_2_desc")}
              icon={ShieldCheck}
              status={t("status_stable")}
              colorClass="bg-emerald-500"
            />
            <ProtocolItem
              title={t("soft_3_title")}
              description={t("soft_3_desc")}
              icon={BookOpen}
              status={t("status_optimized")}
              colorClass="bg-purple-500"
            />

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-muted/20 border border-border/50 border-dashed relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-5">
                <Search size={40} />
              </div>
              <div className="flex items-center gap-2 mb-2 text-primary">
                <Search size={14} />
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest">
                  {t("active_research")}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground font-mono leading-relaxed">
                {t("research_topic")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 opacity-40 hover:opacity-100 transition-opacity duration-700">
        <div className="flex items-center gap-4">
          <p className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-foreground">
            {t("footer")}
          </p>
          <div className="h-4 w-px bg-border" />
          <p className="text-[9px] font-mono text-muted-foreground uppercase">
            {t("instance")}: pohlmann_dev_prod
          </p>
        </div>

        <div className="flex items-center gap-6 text-[9px] font-mono text-muted-foreground">
          <span className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("integrity")}: 100%
          </span>
          <span className="flex items-center gap-2 uppercase">
            {t("build")}: 2026.1.0-STABLE
          </span>
        </div>
      </footer>
    </motion.div>
  );
}

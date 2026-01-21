"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Github,
  ExternalLink,
  Zap,
  ShieldCheck,
  Accessibility,
  Search,
  Cpu,
  Activity,
  Box,
  Terminal,
  Lock,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeveloperNote } from "./developer-note";
import { projectsRegistry } from "@/data/projects";

interface MetricCardProps {
  label: string;
  score: number;
  icon: LucideIcon;
}

const MetricCard = ({ label, score, icon: Icon }: MetricCardProps) => (
  <div className="p-6 bg-muted/30 border border-border rounded-2xl text-center space-y-2 group hover:border-[#ea580c]/30 transition-all cursor-default">
    <Icon
      size={18}
      className="mx-auto text-[#ea580c]/60 group-hover:text-[#ea580c] transition-colors"
    />
    <div className="text-3xl font-mono font-black tracking-tighter text-foreground">
      {score}
    </div>
    <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
      {label}
    </div>
  </div>
);

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function RepoContextView() {
  const t = useTranslations("Projects");
  const r = useTranslations("Projects.repocontext");
  const project = projectsRegistry["repo-context.json"];

  return (
    <div className="max-w-4xl mx-auto space-y-32 pb-40 selection:bg-[#ea580c]/30">
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-12 pt-12"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="w-20 h-20 bg-[#ea580c] rounded-2xl flex items-center justify-center text-black shadow-2xl shadow-[#ea580c]/20 shrink-0">
            <Terminal size={40} strokeWidth={2.5} />
          </div>
          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none italic text-foreground uppercase">
              REPOCONTEXT
            </h1>
            <p className="text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed">
              {r("hero_desc")}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              asChild
              className="rounded-full bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-bold px-8 h-12 cursor-pointer shadow-2xl shadow-[#ea580c]/20 transition-all active:scale-95"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("hero_cta")} <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full border-border hover:bg-muted/50 text-foreground px-8 h-12 cursor-pointer transition-all active:scale-95"
            >
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 w-4 h-4" /> {t("source_code")}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted/50 border border-border rounded-full text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.header>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <MetricCard
          label={r("perf")}
          score={project.lighthouse.perf}
          icon={Zap}
        />
        <MetricCard
          label={r("acc")}
          score={project.lighthouse.acc}
          icon={Accessibility}
        />
        <MetricCard
          label={r("best")}
          score={project.lighthouse.best}
          icon={ShieldCheck}
        />
        <MetricCard
          label={r("seo")}
          score={project.lighthouse.seo}
          icon={Search}
        />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#ea580c]">
            {r("s1_label")}
          </h3>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            {r("s1_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {r("s1_body")}
            </p>
            <ul className="space-y-4">
              {[
                { title: r("s1_item_1"), icon: Activity },
                { title: r("s1_item_2"), icon: ShieldCheck },
                { title: r("s1_item_3"), icon: Zap },
              ].map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border"
                >
                  <item.icon size={16} className="text-[#ea580c]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square bg-muted/30 rounded-2xl border border-border p-8 flex flex-col justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-[#ea580c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="font-mono text-[10px] space-y-2 opacity-60 group-hover:opacity-100 transition-opacity leading-relaxed">
              <p className="text-[#ea580c]">{r("s1_code_1")}</p>
              <p className="text-foreground">
                {"if (shouldIgnore(entry.name, config)) {"}
              </p>
              <p className="pl-4 text-orange-400">{"return null;"}</p>
              <p className="text-foreground">{"}"}</p>
              <p className="text-[#ea580c]">{r("s1_code_2")}</p>
              <p className="text-foreground">
                {"const children = await Promise.all("}
              </p>
              <p className="pl-4 text-foreground">
                {"entries.map(e => scan(e, config))"}
              </p>
              <p className="text-foreground">{");"}</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-12"
      >
        <div className="space-y-4 text-right md:text-left">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#ea580c]">
            {r("s2_label")}
          </h3>
          <h2 className="text-4xl font-bold tracking-tight text-foreground text-right md:text-left">
            {r("s2_title")}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {r("s2_body")}
            </p>
            <div className="p-8 rounded-2xl bg-[#ea580c]/5 border border-[#ea580c]/20 space-y-4">
              <div className="flex items-center gap-3">
                <Cpu className="text-[#ea580c]" size={20} />
                <h4 className="font-bold uppercase tracking-widest text-xs text-foreground">
                  {r("s2_box_title")}
                </h4>
              </div>
              <p className="text-sm text-muted-foreground italic">
                &quot;{r("s2_box_body")}&quot;
              </p>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="p-6 bg-card rounded-2xl border border-border font-mono text-[11px] leading-6 h-full flex flex-col justify-center shadow-inner">
              <p className="text-muted-foreground/30 italic">
                {r("s2_code_comment")}
              </p>
              <p className="text-[#ea580c]">
                {"async function inBatches(items, size, task) {"}
              </p>
              <p className="pl-4 text-foreground">
                {"for (let i = 0; i < items.length; i += size) {"}
              </p>
              <p className="pl-8 text-foreground">
                {"const batch = items.slice(i, i + size);"}
              </p>
              <p className="pl-8 text-[#ea580c]">
                {"await Promise.all(batch.map(task));"}
              </p>
              <p className="pl-4 text-foreground">{"}"}</p>
              <p className="text-[#ea580c]">{"}"}</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#ea580c]">
            {r("s3_label")}
          </h3>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            {r("s3_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-muted/30 border border-border rounded-3xl space-y-4 hover:border-[#ea580c]/20 transition-colors">
            <Box className="text-[#ea580c]" size={24} />
            <h4 className="font-bold text-foreground">{r("s3_box_1_title")}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {r("s3_box_1_body")}
            </p>
          </div>
          <div className="p-8 bg-muted/20 border border-border rounded-3xl space-y-4 hover:border-[#ea580c]/20 transition-colors">
            <Lock className="text-[#ea580c]" size={24} />
            <h4 className="font-bold text-foreground">{r("s3_box_2_title")}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {r("s3_box_2_body")}
            </p>
          </div>
        </div>
      </motion.section>

      <DeveloperNote message={r("note")} />

      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-20 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
          <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">
            {r("footer_status")}
          </p>
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground/30">
          {r("footer_copy")}
        </p>
      </motion.footer>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Github,
  ExternalLink,
  ShieldCheck,
  GitBranch,
  Database,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeveloperNote } from "./developer-note";
import { projectsRegistry } from "@/data/projects";

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const galleryItems = [
  { id: 1, filename: "student-view.webp" },
  { id: 2, filename: "governance-list.webp" },
  { id: 3, filename: "module-canvas.webp" },
  { id: 4, filename: "content-editor.webp" },
];

export function GrowMoneyView() {
  const t = useTranslations("Projects");
  const g = useTranslations("Projects.growmoney");
  const project = projectsRegistry["grow-money.json"];

  return (
    <div className="max-w-4xl mx-auto space-y-32 pb-40 selection:bg-[#0077FF]/30">
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-12 pt-12"
      >
        <div className="space-y-6">
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none select-none">
            <span className="text-[#002F66]">G</span>
            <span className="text-[#004799]">R</span>
            <span className="text-[#005FCC]">O</span>
            <span className="text-[#0077FF]">W</span>
            <span className="text-foreground ml-2">MONEY</span>
          </h1>
          <p className="text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed">
            {g("hero_desc")}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              asChild
              className="rounded-full bg-[#0077FF] hover:bg-[#0077FF]/90 text-white px-8 h-12 cursor-pointer shadow-2xl shadow-[#0077FF]/20 transition-all active:scale-95"
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
              className="rounded-full border-border hover:bg-muted/50 px-8 h-12 cursor-pointer transition-all active:scale-95"
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
                className="px-3 py-1 bg-muted/30 border border-border rounded-full text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider"
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
        className="space-y-12"
      >
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0077FF]">
            {g("s1_label")}
          </h3>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            {g("s1_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="p-6 rounded-2xl bg-muted/30 border border-border relative group"
            >
              <span className="absolute top-4 right-6 text-foreground/5 font-mono text-4xl group-hover:text-[#0077FF]/10 transition-colors">
                0{num}
              </span>
              <p className="text-lg font-bold mb-1 text-foreground">
                {g(`tier_${num}`)}
              </p>
              <p className="text-xs text-muted-foreground">
                {g(`tier_${num}_desc`)}
              </p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed">{g("s1_body")}</p>
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
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0077FF]">
            {g("s2_label")}
          </h3>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            {g("s2_title")}
          </h2>
        </div>

        <div className="max-w-3xl space-y-8">
          <p className="text-muted-foreground leading-relaxed text-lg">
            {g("s2_body_1")}{" "}
            <code className="text-[#0077FF] bg-[#0077FF]/10 px-2 py-1 rounded font-mono text-base">
              draft_content
            </code>{" "}
            {g("s2_body_2")}
          </p>
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#0077FF]" size={24} />
              <h4 className="font-bold text-foreground">
                {g("s2_guard_title")}
              </h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {g("s2_guard_body")}
            </p>
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
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0077FF]">
            {g("s3_label")}
          </h3>
          <h2 className="text-4xl font-bold tracking-tight text-foreground text-right md:text-left">
            {g("s3_title")}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {g("s3_body")}
              </p>
              <div className="p-6 bg-muted/20 rounded-2xl border border-border font-mono text-[11px] leading-6 shadow-inner">
                <p className="text-muted-foreground/30 italic">
                  {"// MongoDB Aggregation Logic"}
                </p>
                <p className="text-[#0077FF]">{"regionalVersion: {"}</p>
                <p className="pl-4 text-purple-400">{"$cond: {"}</p>
                <p className="pl-8 text-foreground">
                  {"if: "}
                  <span className="text-orange-300">
                    &quot;$regionalLesson&quot;
                  </span>
                  ,
                </p>
                <p className="pl-8 text-foreground">
                  {"then: "}
                  <span className="text-orange-300">
                    &quot;$regionalLesson&quot;
                  </span>
                  ,
                </p>
                <p className="pl-8 text-foreground">
                  {"else: "}
                  <span className="text-orange-300">&quot;$$REMOVE&quot;</span>
                </p>
                <p className="pl-4 text-purple-400">{"}"}</p>
                <p className="text-[#0077FF]">{"}"}</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <h4 className="text-sm font-bold flex items-center gap-2 text-foreground">
              <GitBranch size={16} className="text-[#0077FF]" />
              {g("s3_logic_title")}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {g("s3_logic_body")}
            </p>
            <ul className="space-y-4">
              {[
                { title: g("s3_tech_1"), icon: Cpu },
                { title: g("s3_tech_2"), icon: Database },
              ].map((tech) => (
                <li
                  key={tech.title}
                  className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border"
                >
                  <tech.icon size={16} className="text-[#0077FF]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                    {tech.title}
                  </span>
                </li>
              ))}
            </ul>
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
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0077FF]">
            {g("s4_label")}
          </h3>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            {g("s4_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {galleryItems.map((item) => (
            <div key={item.id} className="space-y-6 group">
              <div className="relative aspect-16/10 bg-muted border border-border rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-[#0077FF]/30 group-hover:shadow-[#0077FF]/5">
                <Image
                  src={`/assets/projects/growmoney/${item.filename}`}
                  alt={g(`gallery.item_${item.id}_title`)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={item.id <= 2}
                />
              </div>
              <div className="space-y-2 px-1">
                <h4 className="text-base font-bold text-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0077FF]" />
                  {g(`gallery.item_${item.id}_title`)}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {g(`gallery.item_${item.id}_desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <DeveloperNote message={g("note")} />

      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-20 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#0077FF] animate-pulse" />
          <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">
            {g("footer_status")}
          </p>
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground/30">
          {g("footer_copy")}
        </p>
      </motion.footer>
    </div>
  );
}

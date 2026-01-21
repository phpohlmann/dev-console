"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  MapPin,
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Monitor,
  Cpu,
  Terminal,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { useUIStore } from "@/store/use-ui-store";

const itemVariants = (
  direction: "top" | "bottom" | "left" | "right",
  delay: number,
) => ({
  initial: {
    opacity: 0,
    x: direction === "left" ? -10 : direction === "right" ? 10 : 0,
    y: direction === "top" ? -10 : direction === "bottom" ? 10 : 0,
  },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { duration: 0.4, delay: delay + 0.2, ease: "easeOut" as const },
});

const TechTag = ({ name }: { name: string }) => (
  <span className="text-[10px] font-mono text-muted-foreground bg-muted/30 border border-border px-2 py-1 rounded-md hover:text-foreground hover:bg-muted/50 transition-colors cursor-default">
    {name}
  </span>
);

export function IdentityView() {
  const t = useTranslations("Identity");
  const { openFile } = useUIStore();

  return (
    <div className="flex items-center justify-center min-h-[80vh] p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative group/card"
      >
        <div className="w-full md:w-[320px] bg-background border-r border-border p-8 flex flex-col relative z-10">
          <motion.div
            {...itemVariants("left", 0.1)}
            className="self-center mb-6 relative"
          >
            <div className="relative w-32 h-32 rounded-xl overflow-hidden border border-border ring-1 ring-primary/10 transition-all duration-500 shadow-xl">
              <Image
                src="/assets/profile.jpeg"
                alt="Pedro"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            {...itemVariants("left", 0.2)}
            className="text-center space-y-2 mb-6"
          >
            <h1 className="text-xl font-bold tracking-tight text-foreground uppercase">
              Pedro Pohlmann
            </h1>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest border-y border-border py-2">
              {t("role")}
            </p>
          </motion.div>

          <motion.div
            {...itemVariants("left", 0.25)}
            className="mb-8 flex justify-center"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[9px] font-mono font-bold text-primary uppercase tracking-wider">
                {t("ready_badge")}
              </span>
            </div>
          </motion.div>

          <motion.div
            {...itemVariants("left", 0.3)}
            className="space-y-3 mb-auto"
          >
            <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
              <MapPin size={12} />
              <span>{t("location")}</span>
            </div>
            <div className="flex gap-2">
              <a
                href="https://github.com/phpohlmann"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex-1 flex items-center justify-center p-2 bg-muted/20 border border-border rounded hover:bg-muted/40 transition-all text-muted-foreground hover:text-foreground"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/pedropohlmann"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex-1 flex items-center justify-center p-2 bg-muted/20 border border-border rounded hover:bg-muted/40 transition-all text-muted-foreground hover:text-foreground"
              >
                <Linkedin size={16} />
              </a>
              <button
                onClick={() => openFile("contacts.ts")}
                aria-label="Contact Pedro"
                className="flex-1 flex items-center justify-center p-2 bg-muted/20 border border-border rounded hover:bg-muted/40 transition-all text-muted-foreground hover:text-foreground"
              >
                <Mail size={16} />
              </button>
            </div>
          </motion.div>

          <motion.div
            {...itemVariants("bottom", 0.4)}
            className="pt-6 mt-6 border-t border-border"
          >
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground hover:opacity-90 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all active:scale-[0.98]"
            >
              <Download size={14} />
              {t("cv_button")}
            </a>
          </motion.div>
        </div>

        <div className="flex-1 bg-card relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none opacity-[0.03]" />

          <div className="p-8 md:p-12 space-y-10 relative z-10 h-full flex flex-col justify-between">
            <motion.section {...itemVariants("top", 0.2)}>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-primary" />
                <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                  {t("manifesto_label")}
                </span>
              </div>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground font-sans">
                &quot;{t("bio")}&quot;
              </p>
            </motion.section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <motion.div {...itemVariants("right", 0.3)} className="space-y-3">
                <div className="flex items-center gap-2 border-b border-border pb-2">
                  <Cpu size={14} className="text-muted-foreground" />
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {t("stack_title")}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <TechTag name="TypeScript" />
                  <TechTag name="Next.js" />
                  <TechTag name="React" />
                  <TechTag name="Tailwind" />
                  <TechTag name="Node.js" />
                </div>
              </motion.div>

              <motion.div {...itemVariants("right", 0.4)} className="space-y-3">
                <div className="flex items-center gap-2 border-b border-border pb-2">
                  <Monitor size={14} className="text-muted-foreground" />
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {t("values_title")}
                  </h3>
                </div>
                <p className="text-xs font-medium text-foreground leading-relaxed">
                  {t("values_body")}
                </p>
              </motion.div>

              <motion.div {...itemVariants("right", 0.5)} className="space-y-3">
                <div className="flex items-center gap-2 border-b border-border pb-2">
                  <GraduationCap size={14} className="text-muted-foreground" />
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {t("education_title")}
                  </h3>
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">CIMOL</p>
                  <p className="text-[10px] font-mono text-muted-foreground">
                    2022 — 2025
                  </p>
                </div>
              </motion.div>

              <motion.div {...itemVariants("right", 0.6)} className="space-y-3">
                <div className="flex items-center gap-2 border-b border-border pb-2">
                  <Terminal size={14} className="text-muted-foreground" />
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {t("projects_title")}
                  </h3>
                </div>
                <div className="space-y-2">
                  {[
                    { id: "grow-money.json", label: "grow-money" },
                    { id: "repo-context.json", label: "repo-context" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => openFile(p.id)}
                      aria-label={`View project details: ${p.label}`}
                      className="flex items-center justify-between w-full group/link outline-none"
                    >
                      <span className="text-xs font-mono text-primary group-hover:underline transition-colors">
                        ./{p.label}
                      </span>
                      <ArrowUpRight
                        size={10}
                        className="text-muted-foreground group-hover:text-primary transition-all"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div {...itemVariants("bottom", 0.7)} className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted border border-border rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                  {t("workflow_title")}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

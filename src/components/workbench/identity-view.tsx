"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { BadgeCheck, MapPin, Cpu, Coffee } from "lucide-react";

export function IdentityView() {
  const t = useTranslations("Content.identity");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-6">
        <div className="relative aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl group">
          <Image
            src="/me.jpg"
            alt="Pedro Pohlmann"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <BadgeCheck size={16} className="text-primary" />
            <span>Internship Ready</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin size={14} />
            <span>Santa Catarina, Brazil</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="p-3 bg-muted/30 rounded-lg border border-border/50 text-center">
              <span className="block text-[10px] uppercase font-bold text-muted-foreground">
                Uptime
              </span>
              <span className="text-sm font-mono font-bold">24/7</span>
            </div>
            <div className="p-3 bg-muted/30 rounded-lg border border-border/50 text-center">
              <span className="block text-[10px] uppercase font-bold text-muted-foreground">
                Coffee
              </span>
              <span className="text-sm font-mono font-bold">∞</span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 space-y-8">
        <section className="space-y-4">
          <h1 className="text-5xl font-black tracking-tighter uppercase leading-none">
            Pedro Pohlmann
          </h1>
          <p className="text-xl text-primary font-medium tracking-tight">
            Full-Stack Developer
          </p>
          <div className="h-px w-20 bg-primary/30" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("body")}
          </p>
        </section>

        <section className="p-6 bg-muted/20 rounded-2xl border border-border/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Cpu size={80} />
          </div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-foreground/80 flex items-center gap-2">
            <Coffee size={14} /> Current Status
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>Improving high-performance JS/TS architectures.</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Exploring System Design & API Scalability.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

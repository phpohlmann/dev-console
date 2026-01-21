"use client";

import React from "react";
import Image from "next/image";
import { BadgeCheck, Quote } from "lucide-react";

interface DeveloperNoteProps {
  message: string;
}

export function DeveloperNote({ message }: DeveloperNoteProps) {
  return (
    <section className="relative mt-20 p-8 rounded-2xl bg-primary/5 border border-primary/10 group">
      {/* Decorative Quote Icon */}
      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-background border border-primary/20 flex items-center justify-center text-primary shadow-xl">
        <Quote size={16} fill="currentColor" />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Author Column */}
        <div className="flex items-center md:flex-col md:items-center gap-4 shrink-0">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
            <Image
              src="/assets/profile.jpeg"
              alt="Pedro Pohlmann"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:text-center">
            <div className="flex items-center gap-1 font-bold text-foreground text-sm">
              Pedro Pohlmann
              <BadgeCheck size={14} className="text-primary" />
            </div>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
              Full-Stack Developer
            </p>
          </div>
        </div>

        {/* Message Column */}
        <div className="flex-1 space-y-3 pt-1">
          <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest opacity-60">
            <span>Engineering Note</span>
            <span>•</span>
            <span>Local Instance</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed italic">
            &quot;{message}&quot;
          </p>
        </div>
      </div>
    </section>
  );
}

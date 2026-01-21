"use client";

import { Check, Github, Radio } from "lucide-react";
import { LocaleSwitcher } from "./locale-switcher";

export function StatusBar() {
  return (
    <div className="h-6 bg-[#050505] text-muted-foreground flex items-center px-3 text-[11px] border-t border-white/5 select-none shrink-0 z-50 overflow-hidden">
      <div className="flex items-center gap-1 w-1/2 md:w-1/3">
        <a
          href="https://github.com/phpohlmann/dev-console"
          target="_blank"
          className="flex items-center gap-1.5 px-2 hover:bg-white/5 hover:text-foreground h-full transition-colors cursor-pointer truncate"
        >
          <Github size={12} />
          <span className="hidden sm:inline">main*</span>
        </a>
        <div className="hidden sm:flex items-center gap-1.5 px-2">
          <Radio size={12} className="text-green-500 animate-pulse" />
          <span>Lighthouse: 100/100</span>
        </div>
      </div>

      <div className="hidden md:flex justify-center w-1/3 font-medium text-foreground/50">
        <div className="flex items-center gap-2">
          <Check size={12} className="text-green-500" />
          <span>Next.js 16 (Turbopack)</span>
        </div>
      </div>

      <div className="flex items-center justify-end gap-1 w-1/2 md:w-1/3">
        <div className="hidden xs:flex px-3 border-l border-white/10 h-full items-center">
          UTF-8
        </div>
        <div className="border-l border-white/10 h-full flex items-center">
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
}

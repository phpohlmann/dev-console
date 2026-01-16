"use client";

import { Check, Github, Radio } from "lucide-react";
import { LocaleSwitcher } from "./locale-switcher";

export function StatusBar() {
  return (
    <div className="h-6 bg-primary text-primary-foreground flex items-center px-3 text-[11px] justify-between border-t border-white/5 select-none shrink-0 z-50">
      {/* Left Section: Source Control & Health */}
      <div className="flex items-center h-full">
        <a
          href="https://github.com/phpohlmann/dev-console"
          target="_blank"
          className="flex items-center gap-1.5 px-2 hover:bg-white/10 h-full transition-colors cursor-pointer"
        >
          <Github size={12} />
          <span>main*</span>
        </a>

        <div className="flex items-center gap-1.5 px-3 h-full border-x border-white/5">
          <Radio size={12} className="animate-pulse text-green-400" />
          <span>Lighthouse: 100/100</span>
        </div>

        <div className="hidden md:flex items-center gap-1.5 px-3 h-full opacity-70">
          <Check size={12} />
          <span>Compiled Successfully</span>
        </div>
      </div>

      {/* Right Section: Environment & Language */}
      <div className="flex items-center h-full">
        <div className="hidden sm:block px-3 border-l border-white/5 h-full flex items-center">
          Next.js 16 (Turbopack)
        </div>

        <div className="px-3 border-l border-white/5 h-full flex items-center">
          UTF-8
        </div>

        <div className="border-l border-white/5 h-full">
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Send, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulated Resend Logic
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-700">
      <header className="space-y-2">
        <h1 className="text-3xl font-black tracking-tighter uppercase">
          Send Transmission
        </h1>
        <p className="text-muted-foreground text-sm flex items-center gap-2">
          <Terminal size={14} /> Fill the object below to reach out.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-card border border-border rounded-xl p-8 font-mono text-sm shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-primary/20" />

        <div className="space-y-6">
          <div>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">sender</span> = &#123;
          </div>

          <div className="pl-6 flex items-center gap-2">
            <span className="text-muted-foreground/60">// Your full name</span>
            <span className="text-orange-300">name:</span>
            <input
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-transparent border-b border-border/50 focus:border-primary outline-none text-foreground flex-1 px-2 py-0.5 transition-all"
              placeholder="'John Doe'"
            />
          </div>

          <div className="pl-6 flex items-center gap-2">
            <span className="text-muted-foreground/60">
              // Your reply address
            </span>
            <span className="text-orange-300">email:</span>
            <input
              required
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-transparent border-b border-border/50 focus:border-primary outline-none text-foreground flex-1 px-2 py-0.5 transition-all"
              placeholder="'john@example.com'"
            />
          </div>

          <div className="pl-6 flex flex-col gap-2">
            <div className="flex gap-2">
              <span className="text-muted-foreground/60">
                // Message content
              </span>
              <span className="text-orange-300">body:</span>
            </div>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="bg-muted/30 border border-border/50 rounded-lg focus:border-primary outline-none text-foreground p-4 transition-all w-full leading-relaxed"
              placeholder="'Write your message here...'"
            />
          </div>

          <div>&#125;;</div>

          <div className="pt-6 border-t border-border/50 flex items-center justify-between">
            <span className="text-blue-400">
              await <span className="text-foreground">dispatch</span>(
              <span className="text-blue-400">sender</span>);
            </span>
            <Button
              type="submit"
              disabled={status !== "idle"}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 rounded-xl cursor-pointer"
            >
              {status === "sending"
                ? "Executing..."
                : status === "success"
                  ? "SENT SUCCESS"
                  : "POST /transmission"}
              <Send size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

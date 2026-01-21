"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, Terminal, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const t = useTranslations("Contact");

  const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!ACCESS_KEY) {
      console.error("Web3Forms key is missing.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const payload = {
        ...formData,
        access_key: ACCESS_KEY,
        subject: `New Transmission from ${formData.name}`,
        from_name: "Dev Console Portfolio",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Web3Forms Error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-2xl mx-auto h-96 flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
          <CheckCircle2 size={32} />
        </div>
        <h2 className="text-2xl font-bold text-foreground">
          {t("success_title")}
        </h2>
        <p className="text-muted-foreground text-center max-w-md">
          {t("success_body")}
        </p>
        <Button
          variant="outline"
          onClick={() => setStatus("idle")}
          className="mt-4 cursor-pointer"
        >
          {t("success_button")}
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-700">
      <header className="space-y-2">
        <h1 className="text-3xl font-black tracking-tighter uppercase text-foreground">
          {t("title")}
        </h1>
        <p className="text-muted-foreground text-sm flex items-center gap-2">
          <Terminal size={14} /> {t("subtitle")}
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-card border border-border rounded-xl p-8 font-mono text-sm shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-primary/20" />

        <div className="space-y-6">
          <div className="text-foreground">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">sender</span> = &#123;
          </div>

          <div className="pl-6 flex items-center gap-2 flex-wrap">
            <span className="text-muted-foreground/60">
              {t("comment_name")}
            </span>
            <div className="flex items-center gap-2 flex-1 min-w-50">
              <span className="text-orange-300">name:</span>
              <input
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-transparent border-b border-border focus:border-primary outline-none text-foreground flex-1 px-2 py-0.5 transition-all"
                placeholder={t("placeholder_name")}
              />
            </div>
          </div>

          <div className="pl-6 flex items-center gap-2 flex-wrap">
            <span className="text-muted-foreground/60">
              {t("comment_email")}
            </span>
            <div className="flex items-center gap-2 flex-1 min-w-50">
              <span className="text-orange-300">email:</span>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-transparent border-b border-border focus:border-primary outline-none text-foreground flex-1 px-2 py-0.5 transition-all"
                placeholder={t("placeholder_email")}
              />
            </div>
          </div>

          <div className="pl-6 flex flex-col gap-2">
            <div className="flex gap-2">
              <span className="text-muted-foreground/60">
                {t("comment_body")}
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
              className="bg-muted/30 border border-border rounded-lg focus:border-primary outline-none text-foreground p-4 transition-all w-full leading-relaxed"
              placeholder={t("placeholder_body")}
            />
          </div>

          <div className="text-foreground">&#125;;</div>

          {status === "error" && (
            <div className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 p-2 rounded">
              <AlertCircle size={12} />
              <span>{t("error_msg")}</span>
            </div>
          )}

          <div className="pt-6 border-t border-border flex items-center justify-between">
            <span className="hidden md:inline text-blue-400">
              await <span className="text-foreground">dispatch</span>(
              <span className="text-blue-400">sender</span>);
            </span>
            <Button
              type="submit"
              disabled={status === "sending"}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 rounded-xl cursor-pointer w-full md:w-auto"
            >
              {status === "sending" ? t("button_sending") : t("button_idle")}
              <Send size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

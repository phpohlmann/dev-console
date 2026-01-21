"use client";

import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTourStore } from "@/store/use-tour-store";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ChevronRight, X, Sparkles } from "lucide-react";

interface Step {
  id: number;
  targets: string[];
}

const steps: Step[] = [
  { id: 1, targets: [] },
  { id: 2, targets: ["tour-explorer"] },
  { id: 3, targets: ["tour-tabs"] },
  { id: 4, targets: ["tour-search"] },
  { id: 5, targets: ["tour-settings"] },
  { id: 6, targets: ["tour-resume", "tour-contacts"] },
];

export function TourGuide() {
  const {
    isTourActive,
    currentStep,
    nextStep,
    skipTour,
    hasCompletedTour,
    startTour,
  } = useTourStore();
  const t = useTranslations("Wizard");

  const [elementsCoords, setElementsCoords] = useState<
    { id: string; rect: DOMRect }[]
  >([]);

  const [windowSize, setWindowSize] = useState(() => ({
    w: typeof window !== "undefined" ? window.innerWidth : 0,
    h: typeof window !== "undefined" ? window.innerHeight : 0,
  }));

  useEffect(() => {
    if (!hasCompletedTour) {
      const timer = setTimeout(startTour, 1500);
      return () => clearTimeout(timer);
    }
  }, [hasCompletedTour, startTour]);

  const updateCoords = useCallback(() => {
    if (typeof window === "undefined") return;

    setWindowSize({ w: window.innerWidth, h: window.innerHeight });

    const currentStepConfig = steps.find((s) => s.id === currentStep);

    if (!currentStepConfig || currentStepConfig.targets.length === 0) {
      setElementsCoords([]);
      return;
    }

    const newCoords = currentStepConfig.targets
      .map((id) => {
        const el = document.getElementById(id);
        return el ? { id, rect: el.getBoundingClientRect() } : null;
      })
      .filter((c): c is { id: string; rect: DOMRect } => c !== null);

    setElementsCoords(newCoords);
  }, [currentStep]);

  useLayoutEffect(() => {
    if (!isTourActive) return;

    const frameId = requestAnimationFrame(updateCoords);

    window.addEventListener("resize", updateCoords);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", updateCoords);
    };
  }, [isTourActive, updateCoords]);

  if (!isTourActive) return null;

  const isLastStep = currentStep === steps.length;
  const isCenter = elementsCoords.length === 0;

  const getModalPos = () => {
    if (isCenter) return { top: "50%", left: "50%", x: "-50%", y: "-50%" };

    const target =
      elementsCoords.find((c) => c.id === "tour-contacts")?.rect ||
      elementsCoords[0].rect;

    const MODAL_WIDTH = 320;
    const MODAL_HEIGHT = 200;
    const GAP = 25;
    const SAFE_MARGIN = 20;

    let left = target.right + GAP;
    let top = target.top;

    if (left + MODAL_WIDTH > windowSize.w - SAFE_MARGIN) {
      left = target.left - MODAL_WIDTH - GAP;
    }

    if (left < SAFE_MARGIN) {
      left = Math.max(SAFE_MARGIN, (windowSize.w - MODAL_WIDTH) / 2);
    }

    if (top + MODAL_HEIGHT > windowSize.h - SAFE_MARGIN) {
      top = windowSize.h - MODAL_HEIGHT - SAFE_MARGIN;
    }

    return { top, left, x: 0, y: 0 };
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-auto"
          onClick={skipTour}
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <mask id="spotlight-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              {elementsCoords.map((coord) => (
                <motion.rect
                  key={coord.id}
                  initial={false}
                  animate={{
                    x: coord.rect.left - 5,
                    y: coord.rect.top - 5,
                    width: coord.rect.width + 10,
                    height: coord.rect.height + 10,
                    rx: 8,
                  }}
                  transition={{ type: "spring", damping: 30, stiffness: 250 }}
                  fill="black"
                />
              ))}
            </mask>
          </defs>

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="rgba(0,0,0,0.75)"
            mask="url(#spotlight-mask)"
            style={{ backdropFilter: "blur(4px)" }}
          />

          {currentStep === 6 &&
            elementsCoords
              .filter((coord) => coord.id === "tour-contacts")
              .map((coord) => (
                <motion.rect
                  key={`glow-effect-${coord.id}`}
                  initial={false}
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    strokeWidth: [1, 3, 1],
                  }}
                  x={coord.rect.left - 10}
                  y={coord.rect.top - 6}
                  width={coord.rect.width + 20}
                  height={coord.rect.height + 12}
                  transition={{
                    opacity: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    },
                    strokeWidth: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    },
                  }}
                  fill="none"
                  stroke="var(--color-primary)"
                  filter="url(#glow)"
                  rx={10}
                />
              ))}
        </svg>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, ...getModalPos() }}
          transition={{ type: "spring", damping: 28, stiffness: 180 }}
          className="absolute z-101 w-80 bg-card border border-border rounded-2xl p-6 shadow-2xl pointer-events-auto overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary font-mono">
                  <Sparkles size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Step {currentStep} / {steps.length}
                  </span>
                </div>
                <button
                  onClick={skipTour}
                  className="text-muted-foreground hover:text-foreground p-1 cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold tracking-tight text-foreground">
                  {t(`steps.s${currentStep}_title`)}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t(`steps.s${currentStep}_body`)}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={skipTour}
                  className="text-[10px] font-bold uppercase tracking-tighter text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {t("skip")}
                </button>

                <Button
                  size="sm"
                  onClick={isLastStep ? skipTour : nextStep}
                  className="rounded-full px-5 h-8 bg-primary text-primary-foreground font-bold text-xs cursor-pointer"
                >
                  {isLastStep ? t("finish") : t("next")}
                  {!isLastStep && <ChevronRight size={14} className="ml-1" />}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// MODIFICATION START
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TourState {
  isTourActive: boolean;
  currentStep: number;
  hasCompletedTour: boolean;

  startTour: () => void;
  nextStep: () => void;
  skipTour: () => void;
  completeTour: () => void;
}

export const useTourStore = create<TourState>()(
  persist(
    (set) => ({
      isTourActive: false,
      currentStep: 0,
      hasCompletedTour: false,

      startTour: () => set({ isTourActive: true, currentStep: 1 }),

      nextStep: () =>
        set((state) => ({
          currentStep: state.currentStep + 1,
        })),

      skipTour: () => set({ isTourActive: false, hasCompletedTour: true }),

      completeTour: () => set({ isTourActive: false, hasCompletedTour: true }),
    }),
    {
      name: "pedro-console-tour",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
// MODIFICATION END

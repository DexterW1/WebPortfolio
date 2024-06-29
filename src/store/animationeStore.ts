import { create } from "zustand";

type AnimationState = {
  revealedElements: Record<string, boolean>;
  markAsRevealed: (id: string) => void;
};

export const useAnimationStore = create<AnimationState>((set) => ({
  revealedElements: {},
  markAsRevealed: (id: string) =>
    set((state) => ({
      revealedElements: { ...state.revealedElements, [id]: true },
    })),
}));

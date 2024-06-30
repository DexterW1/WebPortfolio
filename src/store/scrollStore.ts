import { create } from "zustand";

type ScrollStore = {
  scrollToSection: (id: string) => void;
};

const useScrollStore = create<ScrollStore>((set) => ({
  scrollToSection: (id) => {
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
    }
  },
}));

export default useScrollStore;

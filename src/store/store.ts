import { create } from "zustand";

interface StoreState {
  start: Date;
  end: Date;
  setStart: (date: Date) => void;
  setEnd: (date: Date) => void;
}

export const useStore = create<StoreState>((set) => ({
  start: new Date(),
  end: new Date(),
  setStart: (date: Date) => set({ start: date }),
  setEnd: (date: Date) => set({ end: date }),
}));

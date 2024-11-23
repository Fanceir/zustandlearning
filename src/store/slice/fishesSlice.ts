import { StateCreator } from "zustand";
const createFishSlice: StateCreator<FishesSliceType> = (set) => {
  return {
    fishes: 0,
    incrementFishes: () => {
      set((prevState) => ({ fishes: prevState.fishes + 1 }));
    },
    decrementFishes: (step = 1) => {
      set((prevState) => ({ fishes: prevState.fishes - step }));
    },
  };
};
export default createFishSlice;

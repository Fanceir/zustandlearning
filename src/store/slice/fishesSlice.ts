import useStore from "@/store";
import { StateCreator } from "zustand";
import resetters from "../tools/resetters";
const initFishesState = {
  fishes: 0,
};
const createFishSlice: StateCreator<FishesSliceType> = (set) => {
  resetters.push(() => set(initFishesState));
  return {
    ...initFishesState,
  };
};
export const incrementFishes = () => {
  useStore.setState((prevState) => {
    prevState.fishes++;
  });
};
export const resetFishes = () => {
  useStore.setState(initFishesState);
};

export const decrementFishes = (step = 1) => {
  useStore.setState((prevState) => ({ fishes: prevState.fishes - step }));
};
export default createFishSlice;

import useStore from "@/store";
import { StateCreator } from "zustand";
const createFishSlice: StateCreator<FishesSliceType> = () => {
  return {
    fishes: 0,
  };
};
export const incrementFishes = () => {
  useStore.setState((prevState) => {
    prevState.fishes++;
  });
};

export const decrementFishes = (step = 1) => {
  useStore.setState((prevState) => ({ fishes: prevState.fishes - step }));
};
export default createFishSlice;

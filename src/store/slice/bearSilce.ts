import { StateCreator } from "zustand";
import useStore from "@/store";
import resetters from "../tools/resetters";
const initBearState = {
  bears: 0,
};
const createBearSlice: StateCreator<BearSliceType> = (set) => {
  resetters.push(() => {
    set(initBearState);
  });
  return {
    ...initBearState,
  };
};
export const incrementBears = () =>
  useStore.setState((prevState) => {
    prevState.bears++;
  });

export const resetBears = () => {
  useStore.setState(initBearState);
};
export const decrementBears = (step = 1) => {
  useStore.setState((prevState) => ({ bears: prevState.bears - step }));
};
export const asyncIncrementBears = () => {
  setTimeout(() => {
    incrementBears();
  }, 1000);
};
export default createBearSlice;

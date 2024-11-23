import { StateCreator } from "zustand";
const createBearSlice: StateCreator<BearSliceType> = (set, get) => {
  return {
    bears: 0,
    incrementBears: () => {
      set((prevState) => ({ bears: prevState.bears + 1 }));
    },
    resetBears: () => {
      set({ bears: 0 });
    },
    decrementBears: (step = 1) => {
      set((prevState) => ({ bears: prevState.bears - step }));
    },
    asyncIncrementBears: () => {
      setTimeout(() => {
        get().incrementBears();
      }, 1000);
    },
  };
};

export default createBearSlice;

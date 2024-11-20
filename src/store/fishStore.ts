import { create } from "zustand";

const useFishStore = create<FishesStoreType>()((set) => {
  //fishes相关的数据
  return {
    fishes: 0,
    incrementFishes: () => {
      set((prevState) => ({ fishes: prevState.fishes + 1 }));
    },
    decrementFishes: (step = 1) => {
      set((prevState) => ({ fishes: prevState.fishes - step }));
    },
  };
});
export default useFishStore;

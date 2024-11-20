import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useFishStore = create<FishesStoreType>()(
  persist(
    (set) => {
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
    },
    { name: "fishes-store", storage: createJSONStorage(() => sessionStorage) }
  )
);
export default useFishStore;

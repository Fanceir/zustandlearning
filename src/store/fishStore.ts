import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
const useFishStore = create<FishesStoreType>()(
  immer(
    devtools(
      persist(
        () => {
          //fishes相关的数据
          return {
            fishes: 0,
          };
        },
        {
          name: "fishes-store",
          storage: createJSONStorage(() => sessionStorage),
        }
      ),
      { name: "fishes-store" }
    )
  )
);
export const incrementFishes = () => {
  useFishStore.setState((prevState) => {
    prevState.fishes++;
  });
};

export const decrementFishes = (step = 1) => {
  useFishStore.setState((prevState) => ({ fishes: prevState.fishes - step }));
};
export default useFishStore;

import { create } from "zustand";
import {
  persist,
  createJSONStorage,
  devtools,
  subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import resetters from "./tools/resetters";
const initFishesState = {
  fishes: 0,
};
const useFishStore = create<FishesStoreType>()(
  subscribeWithSelector(
    immer(
      devtools(
        persist(
          (set) => {
            //fishes相关的数据
            resetters.push(() => set(initFishesState));
            return {
              ...initFishesState,
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
export const resetFishes = () => {
  useFishStore.setState({ fishes: 0 });
};

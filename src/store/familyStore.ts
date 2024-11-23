import { create } from "zustand";
import { persist, devtools, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import resetters from "./tools/resetters";
// family Store 的初始数据对象
const initFamilyState: FamilyType = {
  family: {
    father: "Walt",
    mother: "Skyler",
    son: "Walter ",
  },
};
const useFamilyStore = create<FamilyType>()(
  subscribeWithSelector(
    immer(
      devtools(
        persist(
          (set) => {
            resetters.push(() => set(initFamilyState));
            return {
              ...initFamilyState,
            };
          },
          { name: "family-store" }
        )
      )
    )
  )
);
export const updateSonName = (newName: string = "sdhjashd") => {
  useFamilyStore.setState((state) => {
    state.family.son = newName;
  });
};
export const addDaughter = (newName: string = "sdhjashd") => {
  useFamilyStore.setState((state) => {
    state.family.daughter = newName;
  });
};
export default useFamilyStore;

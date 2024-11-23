// 1. 按需导入 create 函数
import { create } from "zustand";
import {
  persist,
  createJSONStorage,
  devtools,
  subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import createBearSlice from "./slice/bearSilce";
import createFishSlice from "./slice/fishesSlice";

// 2. 创建 store 的 hook
const useStore = create<BearSliceType & FishesSliceType>()(
  subscribeWithSelector(
    immer(
      devtools(
        persist<BearSliceType & FishesSliceType>(
          (set, get, store) => ({
            ...createBearSlice(set, get, store), // 显式传递 set, get, store 参数
            ...createFishSlice(set, get, store), // 显式传递 set, get, store 参数
          }),
          {
            name: "store",
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => {
              const keys = ["bears", "fishes"];
              const selectedEntries = Object.entries(state).filter(([key]) =>
                keys.includes(key)
              );
              return Object.fromEntries(selectedEntries) as BearSliceType &
                FishesSliceType;
            },
          }
        )
      )
    )
  )
);

// 3. 向外导出 store 的 hook
export default useStore;

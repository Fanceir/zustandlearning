//1 按需导入create函数
import { create } from "zustand";
import createBearSlice from "./slice/bearSilce";
import createFishSlice from "./slice/fishesSlice";

const useStore = create<BearSliceType & FishesSliceType>()((...a) => {
  return {
    ...createBearSlice(...a),
    ...createFishSlice(...a),
  };
});
//额外的括号是因为create函数的参数是一个函数，
//所以我们需要在调用create函数时传入一个函数
//3 向外导出store的hook

export default useStore;

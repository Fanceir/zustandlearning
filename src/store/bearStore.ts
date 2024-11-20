//1 按需导入create函数
import { create } from "zustand";

//2 创建store的hook

const useBearStore = create<BearStoreType>()((set, get) => {
  return {
    //bears相关的数据
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
});
//额外的括号是因为create函数的参数是一个函数，
//所以我们需要在调用create函数时传入一个函数
//3 向外导出store的hook

export default useBearStore;

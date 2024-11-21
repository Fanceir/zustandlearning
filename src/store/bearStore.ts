//1 按需导入create函数
import { create } from "zustand";
//在zustand中中间件本身就是一个函数
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
//2 创建store的hook
//使用devtools一定要晚于immer
const useBearStore = create<BearStoreType>()(
  immer(
    devtools(
      persist(
        () => {
          return {
            //bears相关的数据
            bears: 0,
          };
        },
        { name: "bear-store" }
      ),
      { name: "bear-store" }
    )
  )
);
export const incrementBears = () => {
  //使用immer的语法
  useBearStore.setState((prevState) => {
    prevState.bears += 1;
  }); //函数体的大括号不可以省略
};
export const resetBears = () => {
  useBearStore.setState({ bears: 0 });
}; //这是对象合并的方式
export const decrementBears = (step = 1) => {
  useBearStore.setState((prevState) => {
    prevState.bears -= step;
  });
};
export const asyncIncrementBear = () => {
  setTimeout(() => {
    incrementBears();
  }, 1000);
};

//用了persist中间件就可以实现数据持久化了
//额外的括号是因为create函数的参数是一个函数，
//所以我们需要在调用create函数时传入一个函数
//3 向外导出store的hook

export default useBearStore;

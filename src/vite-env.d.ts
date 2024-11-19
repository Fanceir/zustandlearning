/// <reference types="vite/client" />
type BearType = {
  bears: number;
  incrementBears: () => void;
  resetBears: () => void;
  decrementBears: (step?: number) => void;
  //异步修改
  asyncIncrementBears: () => void;
  fishes: number;
  incrementFishes: () => void;
  decrementFishes: (step?: number) => void;
};
//一完善类型定义后，我们就可以在组件中使用store了

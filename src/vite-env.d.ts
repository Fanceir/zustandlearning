/// <reference types="vite/client" />
type BearSliceType = {
  bears: number;
  incrementBears: () => void;
  resetBears: () => void;
  asyncIncrementBears: () => void;
  decrementBears: (step?: number) => void;
  //异步修改
};
type FishesSliceType = {
  fishes: number;
  incrementFishes: () => void;
  decrementFishes: (step?: number) => void;
};
//一完善类型定义后，我们就可以在组件中使用store了

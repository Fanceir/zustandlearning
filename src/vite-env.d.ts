/// <reference types="vite/client" />

//一完善类型定义后，我们就可以在组件中使用store了
type BearStoreType = {
  /// <reference types="vite/client" />
  bears: number;
  incrementBears: () => void;
  resetBears: () => void;
  decrementBears: (step?: number) => void;
  //异步修改
  asyncIncrementBears: () => void;
};
//一完善类型定义后，我们就可以在组件中使用store了
type FishesStoreType = {
  fishes: number;
  incrementFishes: () => void;
  decrementFishes: (step?: number) => void;
};

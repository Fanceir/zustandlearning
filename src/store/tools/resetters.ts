const resetters: (() => void)[] = [];
export default resetters;
//按需导出重置所有数据的函数
export const resetAllStore = () => {
  resetters.forEach((resetter) => resetter());
};

import { FC } from "react";
import useStore from "@/store";
import { incrementFishes, resetFishes } from "@/store/slice/fishesSlice";
export const Fishes: FC = () => {
  const fishes = useStore((state) => state.fishes);
  return (
    <>
      <h2>小鱼干的数量是{fishes}</h2>
      <button onClick={incrementFishes}>小鱼干增加1</button>
      <button onClick={resetFishes}>重置小鱼干数量</button>
    </>
  );
};

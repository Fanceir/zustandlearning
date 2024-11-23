import { FC } from "react";
import useFishesStore from "@/store/fishStore";
import { incrementFishes } from "@/store/fishStore";
import { decrementFishes } from "@/store/fishStore";
export const Fishes: FC = () => {
  const fishes = useFishesStore((state) => state.fishes);

  return (
    <>
      <h2>小鱼干的数量是{fishes}</h2>
      <button onClick={incrementFishes}>小鱼干增加1</button>
      <button onClick={() => decrementFishes()}>小鱼干减少1</button>
    </>
  );
};

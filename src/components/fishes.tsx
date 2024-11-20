import { FC } from "react";
import useFishesStore from "@/store/fishStore";
export const Fishes: FC = () => {
  const fishes = useFishesStore((state) => state.fishes);
  const incrementFishes = useFishesStore((store) => store.incrementFishes);
  return (
    <>
      <h2>小鱼干的数量是{fishes}</h2>
      <button onClick={incrementFishes}>小鱼干增加1</button>
    </>
  );
};

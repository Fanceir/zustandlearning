import { FC } from "react";
import useStore from "@/store";
export const Fishes: FC = () => {
  const fishes = useStore((state) => state.fishes);
  const incrementFishes = useStore((store) => store.incrementFishes);
  return (
    <>
      <h2>小鱼干的数量是{fishes}</h2>
      <button onClick={incrementFishes}>小鱼干增加1</button>
    </>
  );
};

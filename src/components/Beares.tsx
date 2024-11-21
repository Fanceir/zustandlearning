import { FC } from "react";
import useBearStore, {
  incrementBears,
  resetBears,
  decrementBears,
  asyncIncrementBear,
} from "@/store/bearStore";
import useFishesStore from "@/store/fishStore";
import { incrementFishes } from "@/store/fishStore";
import { decrementFishes } from "@/store/fishStore";
import { resetAllStore } from "@/store/tools/resetters";
export const Father: FC = () => {
  const bears = useBearStore((state) => state.bears);
  return (
    <>
      <h1>Father组件</h1>
      <p>小熊🐻的数量是{bears}</p>
    </>
  );
};

export const Child1: FC = () => {
  return (
    <>
      <button onClick={incrementBears}>增加小熊🐻的数量</button>
      <hr />

      <button onClick={resetBears}>重置小熊🐻的数量</button>
      <hr></hr>
      <button onClick={() => decrementBears(5)}>bears-5</button>
      <hr></hr>
      <button onClick={asyncIncrementBear}>一秒后+1</button>
    </>
  );
};

export const Child2: FC = () => {
  const fishes = useFishesStore((state) => state.fishes);

  return (
    <>
      <h2>小鱼干的数量是{fishes}</h2>
      <button onClick={incrementFishes}>小鱼干增加1</button>
      <button onClick={() => decrementFishes()}>小鱼干减少1</button>
      <button onClick={resetAllStore}>重置所有数量</button>
    </>
  );
};

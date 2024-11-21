import { FC } from "react";
import useBearStore, {
  incrementBears,
  resetBears,
  decrementBears,
  asyncIncrementBear,
} from "@/store/bearStore";
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

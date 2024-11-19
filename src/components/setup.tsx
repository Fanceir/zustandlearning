import { FC } from "react";
import useStore from "@/store";
export const Father: FC = () => {
  const bears = useStore((state) => state.bears);
  return (
    <>
      <h1>Father组件</h1>
      <p>小熊🐻的数量是{bears}</p>
    </>
  );
};

export const Child1: FC = () => {
  const incrementBears = useStore((state) => state.incrementBears);
  const resetBears = useStore((state) => state.resetBears);
  const decrementBears = useStore((state) => state.decrementBears);
  const asyncIncrementBears = useStore((state) => state.asyncIncrementBears);
  return (
    <>
      <button onClick={incrementBears}>增加小熊🐻的数量</button>
      <hr />

      <button onClick={resetBears}>重置小熊🐻的数量</button>
      <hr></hr>
      <button onClick={() => decrementBears(5)}>bears-5</button>
      <hr></hr>
      <button onClick={asyncIncrementBears}>一秒后+1</button>
    </>
  );
};

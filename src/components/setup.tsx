import { FC, useState, useEffect } from "react";
import useStore from "@/store";
import {
  incrementBears,
  resetBears,
  decrementBears,
  asyncIncrementBears,
} from "@/store/slice/bearSilce";
import { resetAllStore } from "@/store/tools/resetters";
import { addBearAndFish } from "@/store/tools/commonActions";
export const Father: FC = () => {
  const [bgColor, setBgColor] = useState<"lightgreen" | "lightgray">(
    "lightgreen"
  );
  const bears = useStore((state) => state.bears);
  useEffect(() => {
    const unsubscribe = useStore.subscribe(
      (state) => state.fishes,
      (newValue) => {
        setBgColor(newValue > 0 ? "lightgreen" : "lightgray");
      },
      { fireImmediately: true }
    );
    return () => unsubscribe();
  }, [bears]);

  return (
    <div style={{ padding: 10, borderBlock: 5, backgroundColor: bgColor }}>
      <h1>Father组件</h1>
      <p>小熊🐻的数量是{bears}</p>{" "}
    </div>
  );
};

export const Child1: FC = () => {
  const reset = () => {
    resetAllStore();
    //清空本地存储
    useStore.persist.clearStorage();
    //清空本地存储的内容
  };
  return (
    <>
      <button onClick={incrementBears}>增加小熊🐻的数量</button>
      <hr />

      <button onClick={resetBears}>重置小熊🐻的数量</button>
      <hr></hr>
      <button onClick={() => decrementBears(5)}>bears-5</button>
      <hr></hr>
      <button onClick={asyncIncrementBears}>一秒后+1</button>
      <button onClick={addBearAndFish}>同时增加bear和fish</button>
      <button onClick={reset}>重置所有</button>
    </>
  );
};

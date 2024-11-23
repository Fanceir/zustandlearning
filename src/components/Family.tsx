import { FC, useEffect, useRef } from "react";
import { useShallow } from "zustand/shallow";
import useFamilyStore, {
  addDaughter,
  updateSonName,
} from "@/store/familyStore";
export const FamilyWrapper: FC = () => {
  return (
    <>
      <FamilyMembers />
      <hr />
      <FamilyNames />
    </>
  );
};

const FamilyMembers: FC = () => {
  const members = useFamilyStore(useShallow((state) => state.family));
  const memberKeys = Object.keys(members) as Array<keyof typeof members>;
  useEffect(() => {
    console.log("触发了members", members);
  });
  return (
    <>
      <h5>小熊的家庭成员：</h5>
      <ul>
        {memberKeys.map((key) => (
          <li key={key}>{key}</li>
        ))}
      </ul>
    </>
  );
};

const FamilyNames: FC = () => {
  const ref = useRef<() => void>();
  const names = useFamilyStore((state) => state.family);
  useEffect(() => {
    const unsubFn = useFamilyStore.subscribe(
      (state) => state.family.son,
      (newVal, oldVal) => {
        console.log("son的名字发生了变化", newVal, oldVal);
      },
      {
        fireImmediately: true,//一进入组件就触发一次
      }
    );
    //
    ref.current = unsubFn;
    return () => unsubFn();
  }, []);
  return (
    <>
      <h5>熊熊的名字：</h5>
      <p>{names.daughter}</p>
      <button onClick={() => updateSonName("haj")}>修改son的名字</button>
      <button onClick={() => addDaughter("sdfas")}>添加女儿</button>
      <button onClick={() => ref.current && ref.current()}>取消订阅</button>
    </>
  );
};

import { FC, useEffect } from "react";
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
  const names = useFamilyStore((state) => state.family);
  return (
    <>
      <h5>熊熊的名字：</h5>
      <p>{names.daughter}</p>
      <button onClick={() => updateSonName("hajimi")}>修改son的名字</button>
      <button onClick={() => addDaughter("sdfas")}>添加女儿</button>
    </>
  );
};

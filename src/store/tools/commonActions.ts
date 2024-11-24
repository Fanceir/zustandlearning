import useStore from "@/store";
import { incrementBears } from "@/store/slice/bearSilce";
import { incrementFishes } from "../slice/fishesSlice";
export const addBearAndFish = () => {
  const bears = useStore.getState().bears;
  if (bears < 5) {
    incrementBears();
    incrementFishes();
  } else {
    incrementFishes();
  }
};

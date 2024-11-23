import { Child1, Child2, Father } from "./components/Beares";
import { FamilyWrapper } from "./components/Family";
import { Fishes } from "./components/fishes";

export default function App() {
  return (
    <div className="App">
      <Father />
      <Child1 />
      <Fishes />
      <Child2 />
      <FamilyWrapper />
    </div>
  );
}

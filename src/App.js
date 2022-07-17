import { DefaultXRControllers, VRCanvas } from "@react-three/xr";
import "./App.css";
import Enemy from "./components/Enemy";
import Platform from "./components/Platform";

function App() {
  return (
    <section className="App">
      <VRCanvas>
        <DefaultXRControllers />
        <ambientLight />
        <Platform />
        <Enemy />
      </VRCanvas>
    </section>
  );
}

export default App;

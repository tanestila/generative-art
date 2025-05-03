import "./App.css";
import Canvas from "./components/Canvas";
import Controls from "./components/Controls";
import SettingsPanel from "./components/SettingsPanel";
import { useGenerativeArt } from "./hooks/useGenerativeArt";

function App() {
  //   const { config, generateNewArt } = useGenerativeArt();
  return (
    <>
      <Canvas height={800} width={1200} />
      <Controls />
      <SettingsPanel />
    </>
  );
}

export default App;

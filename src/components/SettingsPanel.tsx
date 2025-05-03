import React, { useState } from "react";
import { useArtStore } from "../hooks/useArtStore";

const SettingsPanel = () => {
  //   const [elementCount, setElementCount] = useState<number>(10);
  //   const [colorScheme, setColorScheme] = useState<string>("monochrome");
  //   const [shapeType, setShapeType] = useState<string>("circle" as const);

  const updateSettings = useArtStore((state) => state.updateSettings);
  const settings = useArtStore((state) => state.settings);

  return (
    <div>
      <h3>Settings</h3>
      <div>
        <label> Element count: {settings.elementCount}</label>
        <input
          type="range"
          min={1}
          max={1000}
          value={settings.elementCount}
          onChange={(e) =>
            updateSettings({ elementCount: Number(e.target.value) })
          }
        />
      </div>
      <div>
        <label> Color scheme: {settings.colorScheme}</label>
        <select
          value={settings.colorScheme}
          onChange={(e) => updateSettings({ colorScheme: e.target.value })}
        >
          <option value="monochrome">Monochrome</option>
          <option value="pastel">Pastel</option>
          <option value="vibrant">Vibrant</option>
        </select>
      </div>
      <div>
        {/* <label> Shape type: {settings.elementTypes.join(", ")}</label>
        <select
          value={settings.elementTypes}
          onChange={(e) =>
            updateSettings({ elementTypes: e.target.value.split(", ") })
          }
        >
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
        </select> */}
      </div>
    </div>
  );
};

export default SettingsPanel;

import React, { FC } from "react";
import { useArtStore } from "../hooks/useArtStore";

const Controls: FC = () => {
  const generateNewArt = useArtStore((state) => state.generateNewArt);

  return (
    <div>
      <button onClick={generateNewArt}>Generate New</button>
      <button onClick={() => {}}>Save</button>
    </div>
  );
};

export default Controls;

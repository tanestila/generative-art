import React, { FC } from "react";

interface IProps {
  onGenerate: () => void;
  onSave: () => void;
}

const Controls: FC<IProps> = ({ onGenerate, onSave }) => {
  return (
    <div>
      <button onClick={onGenerate}>Generate New</button>
      <button onClick={onSave}>Save</button>
    </div>
  );
};

export default Controls;

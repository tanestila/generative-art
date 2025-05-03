import React, { FC, useEffect, useRef } from "react";
import { drawElements } from "../hooks/useGenerativeArt";
import { IArtConfig } from "../types";
import { useArtStore } from "../hooks/useArtStore";

interface IProps {
  width: number;
  height: number;
}

const Canvas: FC<IProps> = ({ width, height }) => {
  const config = useArtStore((state) => state.config);
  const settings = useArtStore((state) => state.settings);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = config.backgroundColor; //config.backgroundColor;
    ctx.fillRect(0, 0, width, height);

    drawElements(ctx, config, width, height);
  }, [width, height, config, settings]);

  return (
    <canvas
      width={width}
      height={height}
      style={{ border: "1px solid #333" }}
      ref={canvasRef}
    ></canvas>
  );
};

export default Canvas;

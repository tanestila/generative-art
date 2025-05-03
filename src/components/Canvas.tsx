import React, { FC, useEffect, useRef } from "react";

interface IProps {
  width: number;
  height: number;
}

const Canvas: FC<IProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "white"; //config.backgroundColor;
    ctx.fillRect(0, 0, width, height);

    drawElements(ctx);
  }, [width, height]);

  return (
    <canvas
      width={width}
      height={height}
      style={{ border: "1px solid #333" }}
    ></canvas>
  );
};

export default Canvas;

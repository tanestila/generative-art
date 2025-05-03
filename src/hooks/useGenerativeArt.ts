import { useCallback, useState } from "react";
import { IArtConfig, IArtElement, ArtElementType } from "../types";

export const drawElements = (
  ctx: CanvasRenderingContext2D,
  config: IArtConfig,
  canvasWidth: number,
  canvasHeight: number
) => {
  config.elements.forEach((element) => {
    ctx.fillStyle = element.color;
    ctx.strokeStyle = element.color;

    switch (element.type) {
      case "circle":
        ctx.beginPath();
        ctx.arc(
          element.position.x + element.size.width / 2,
          element.position.y + element.size.height / 2,
          Math.min(element.size.width, element.size.height) / 2,
          0,
          Math.PI * 2
        );
        ctx.fill();
        break;
      case "square":
        ctx.fillRect(
          element.position.x,
          element.position.y,
          element.size.width,
          element.size.height
        );
        break;
      case "triangle":
        ctx.beginPath();
        ctx.moveTo(element.position.x, element.position.y);
        ctx.lineTo(
          element.position.x + element.size.width,
          element.position.y + element.size.height / 2
        );
        ctx.lineTo(
          element.position.x,
          element.position.y + element.size.height
        );
        ctx.closePath();
        ctx.fill();
        break;
      default:
        console.error("Unknown element type:", element.type);
    }
  });
};

const getRandomElementType = (): ArtElementType => {
  const types: ArtElementType[] = ["circle", "square", "triangle"];
  return types[Math.floor(Math.random() * types.length)];
};

const getRandomColor = (): string => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100) + 20;
  const lightness = Math.floor(Math.random() * 50) + 40;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export const generateElements = (count: number = 50) => {
  const elements: IArtElement[] = [];
  const elementCount = Math.floor(Math.random() * count) + 20;

  for (let i = 0; i < elementCount; i++) {
    const type = getRandomElementType();
    const size = {
      width: Math.random() * 100 + 20,
      height: Math.random() * 100 + 20,
    };
    const position = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      x2: Math.random() * window.innerWidth,
      y2: Math.random() * window.innerHeight,
    };
    const color = getRandomColor();
    elements.push({ type, size, position, color });
  }
  return elements;
  // setConfig((prev) => ({ ...prev, elements }));
};

export const useGenerativeArt = () => {
  const [config, setConfig] = useState<IArtConfig>({
    elements: [],
    backgroundColor: "white",
  });

  const generateNewArt = useCallback(() => {
    setConfig((prev) => ({ ...prev, elements: generateElements() }));
  }, [generateElements]);

  return { config, generateNewArt };
};

type ArtElementType = "circle" | "square" | "triangle" | "line" | "text";

export interface ArtElement {
  type: ArtElementType;
  color: string;
  size: { width: number; height: number };
  position: { x: number; y: number; x2: number; y2: number };
  rotation?: number;
}

export interface ArtConfig {
  elements: ArtElement[];
  backgroundColor: string;
}

export const drawElements = (
  ctx: CanvasRenderingContext2D,
  config: ArtConfig,
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

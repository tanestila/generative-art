type ArtConfig = {
  width: number;
  height: number;
  backgroundColor: string;
  colors: string[];
  elements: ArtElement[];
};

type ArtElement = {
  type: ArtElementType;
  color: string;
  position: { x: number; y: number };
  size: { width: number; height: number; radius: number };
};

type ArtElementType = "circle" | "line" | "rectangle" | "triangle";

class GenerativeArt {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private config: ArtConfig;

  constructor(canvasId: string, config?: ArtConfig) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d")!;
    this.config = config || this.getDefaultConfig();

    this.setupCanvas();
    // this.drawArt();
  }

  private getDefaultConfig(): ArtConfig {
    return {
      width: 800,
      height: 600,
      backgroundColor: "#ffffff",
      colors: ["#ff0000", "#00ff00", "#0000ff"],
      elements: [],
    };
  }

  private setupCanvas() {
    this.canvas.width = this.config.width;
    this.canvas.height = this.config.height;
    this.generateArt();
  }

  generateArt() {
    this.ctx.fillStyle = this.config.backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.config.elements = this.generateElements();

    this.drawElements();
  }

  private generateElements(): ArtElement[] {
    const elements: ArtElement[] = [];
    // const elementCount = Math.floor(Math.random() * 100) + 1;
    const elementCount = 1000;

    for (let i = 0; i < elementCount; i++) {
      const type = this.getRandomElementType();
      const color = this.getRandomColor();

      switch (type) {
        case "circle": {
          elements.push({
            type,
            color,
            position: {
              x: Math.random() * this.canvas.width,
              y: Math.random() * this.canvas.height,
            },
            size: {
              radius: Math.random() * 50 + 10,
              width: 0,
              height: 0,
            },
          });
          break;
        }
        case "line": {
          elements.push({
            type,
            color,
            position: {
              x: Math.random() * this.canvas.width,
              y: Math.random() * this.canvas.height,
            },
            size: {
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              radius: 0,
            },
          });
          break;
        }
        case "rectangle": {
          elements.push({
            type,
            color,
            position: {
              x: Math.random() * this.canvas.width,
              y: Math.random() * this.canvas.height,
            },
            size: {
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              radius: 0,
            },
          });
          break;
        }
        case "triangle": {
          elements.push({
            type,
            color,
            position: {
              x: Math.random() * this.canvas.width,
              y: Math.random() * this.canvas.height,
            },
            size: {
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              radius: 0,
            },
          });
          break;
        }
      }
    }

    console.log(elements);

    return elements;
  }

  private drawElements(): void {
    this.config.elements.forEach((element: ArtElement) => {
      this.ctx.fillStyle = element.color;
      this.ctx.strokeStyle = element.color;

      switch (element.type) {
        case "circle":
          this.ctx.beginPath();
          this.ctx.arc(
            element.position.x,
            element.position.y,
            element.size.radius,
            0,
            Math.PI * 2
          );
          this.ctx.fill();
          break;
        case "line":
          this.ctx.beginPath();
          this.ctx.moveTo(element.position.x, element.position.y);
          this.ctx.lineTo(
            element.position.x + element.size.width,
            element.position.y + element.size.height
          );
          this.ctx.stroke();
          break;
        case "rectangle":
          this.ctx.fillRect(
            element.position.x,
            element.position.y,
            element.size.width,
            element.size.height
          );
          break;
        case "triangle":
          this.ctx.beginPath();
          this.ctx.moveTo(element.position.x, element.position.y);
          this.ctx.lineTo(
            element.position.x + element.size.width,
            element.position.y
          );
          this.ctx.lineTo(
            element.position.x + element.size.width / 2,
            element.position.y + element.size.height
          );
          this.ctx.closePath();
          this.ctx.fill();
          break;
        default:
          console.error("Unknown element type:", element.type);
      }
    });
  }

  private getRandomElementType(): ArtElementType {
    const types: ArtElementType[] = ["circle", "line", "rectangle", "triangle"];
    return types[Math.floor(Math.random() * types.length)];
  }

  private getRandomColor(): string {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 30) + 70;
    const lightness = Math.floor(Math.random() * 30) + 40;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const art = new GenerativeArt("artCanvas");

  document.getElementById("generateBtn")!.addEventListener("click", () => {
    art.generateArt();
  });

  document.getElementById("saveBtn")!.addEventListener("click", () => {
    // art.generateArt();
  });
});

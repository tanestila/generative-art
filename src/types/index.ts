export type ArtElementType = "circle" | "square" | "triangle" | "line" | "text";

export interface IArtElement {
  type: ArtElementType;
  color: string;
  size: { width: number; height: number };
  position: { x: number; y: number; x2: number; y2: number };
  rotation?: number;
}

export interface IArtConfig {
  elements: IArtElement[];
  backgroundColor: string;
}

export interface ISettings {
  elementCount: number;
  elementTypes: ArtElementType[];
  colorScheme: string;
  minSize: number;
  maxSize: number;
  canvasWidth: number;
  canvasHeight: number;
}

import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants";

export function createCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  document.body.appendChild(canvas);

  return canvas;
}

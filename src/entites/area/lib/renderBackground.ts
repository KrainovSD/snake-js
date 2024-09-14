import { CANVAS_HEIGHT, CANVAS_WIDTH } from "@/shared/constants";

export function renderBackground(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#EEE";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

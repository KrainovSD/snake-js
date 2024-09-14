import { CELL_SIZE } from "@/shared/constants";

export function renderApple(ctx: CanvasRenderingContext2D) {
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";
  ctx.lineWidth = 2;
  ctx.fillRect(CELL_SIZE * 2, CELL_SIZE * 2, CELL_SIZE, CELL_SIZE);
}

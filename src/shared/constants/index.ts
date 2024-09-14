import type { Directions } from "../types";

export const COLS = 50;
export const ROWS = 30;
export const GAP_SIZE = 1;
export const CELL_SIZE = 25;
export const CANVAS_WIDTH = COLS * (CELL_SIZE + GAP_SIZE);
export const CANVAS_HEIGHT = ROWS * (CELL_SIZE + GAP_SIZE);

export const SNAKE_LENGTH = 5;

export const APPLE_COUNT = 2;
export const POINTS_PER_APPLE = 1;

export const SPEED = 200;
export const FPS = 60;

export const KEY = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
} as const;

export const DIRECTIONS: Directions = {
  [KEY.LEFT]: { x: -1, y: 0 },
  [KEY.RIGHT]: { x: 1, y: 0 },
  [KEY.UP]: { x: 0, y: -1 },
  [KEY.DOWN]: { x: 0, y: 1 },
};

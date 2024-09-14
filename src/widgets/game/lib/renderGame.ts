import { renderApple } from "@/entites/apples";
import { renderBackground } from "@/entites/area";
import { Observable } from "rxjs";
import { utils } from "@/shared/lib";

export function renderGame() {
  const canvas = utils.createCanvas();
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Not found canvas context!");

  renderBackground(ctx);
  renderApple(ctx);

  const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });
}

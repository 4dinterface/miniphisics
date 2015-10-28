"use strict"

class CanvasRenderer {

  /**
   * конструктор
   * @param canvas - канвас где будет работать рендер
   */
  constructor(canvas) {
    if (canvas.getContext) {
      this.ctx = canvas.getContext('2d');
    } else {
      throw !canvas ? "not canvas element" : "not context";
    }
  }

  /**
   * отрисовка кадра
   * @param scene - сцена которую мы будем отрисовывать
   */
  render(scene) {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    for (var i = 0; i < scene.items.length; i++) {
      let item = scene.items[i];

      switch (item.type) {
        case "BodyBox":
          this.ctx.fillRect(item.pos.x - item.width / 2, item.pos.y - item.height / 2, item.width, item.height);
          break;

        case "BodyCircle":
          this.ctx.beginPath();
          this.ctx.arc(item.pos.x, item.pos.y, item.d / 2, 0, Math.PI * 2, false);
          this.ctx.closePath();
          this.ctx.fill();
          break;
      }
    }

  }
}
/**
 * BOX BODY
 */

"use strict";

class BodyBox {
  /**
   * конструктор
   * @param config
   */
  constructor(config) {
    this.pos = new Vector(config.x, config.y);
    this.v = new Vector(0, 0); //вектор скорости
    this.width = config.width;
    this.height = config.height;
    this.type = "BodyBox";
    this.static = config.static; //если равно true то это тело  не может изменять координаты
  }
}
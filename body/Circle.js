/*
 * Body ball
 */
"use strict";

class BodyBall {

  /**
   * конструктор
   * @param config
   */
  constructor(config) {
    this.pos = new Vector(config.x, config.y);
    this.v = new Vector(0, 0); //вектор скорости

    this.d = config.d; //диаметр
    this.type = "BodyCircle";
    this.elast = config.elast; //если равно true то это тело не может изменять координаты
  }

}
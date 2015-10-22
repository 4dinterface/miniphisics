"use strict";

class BodyCircle{
  constructor(config){
    this.pos=new Vector(config.x, config.y);
    this.v=new Vector(0, 0); //вектор скорости

    this.d=config.d;//диаметр
    this.type="BodyCircle";
    this.speed=0;
    this.elast=config.elast;
  }
}
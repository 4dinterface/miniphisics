"use strict";
class BodyBox{
  constructor(config){
    this.pos=new Vector(config.x, config.y);
    this.v=new Vector(0, 0); //вектор скорости
    this.width=config.width;
    this.height=config.height;
    this.type="BodyBox";
    this.speed=0;
    this.static=config.static;
  }
}
"use strict";

class BodyCircle{
  constructor(config){
    this.pos=new Vector(config.x, config.y);
    this.v=new Vector(0, 0); //������ ��������

    this.d=config.d;//�������
    this.type="BodyCircle";
    this.speed=0;
    this.elast=config.elast;
  }
}
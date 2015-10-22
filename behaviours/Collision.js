"use strict";

class Collision{

  constructor(config){
    this.isBehaviour=true;
  }

  tick(scene, time, interval){
    var items=scene.items;

    //влияние гравитации на вектор скорости
    for(let i1=0;i1<items.length;i1++){
      let item1 = items[i1];

      //for(var i2=0;i2<this.items.length;i2++) {

      for(var i2=i1+1; i2<items.length; i2++) { //оптимизация, с элементами до i мы уже сравнивали, i1 это сам элемент который сравниваем
        let item2 = items[i2],
            collision;

        if (item1.type == "BodyBox" && item2.type == "BodyCircle") collision=this.collisionBoxAndCircle(item1, item2);
        if (item1.type == "BodyCircle" && item2.type == "BodyBox") collision=this.collisionBoxAndCircle(item2, item1);
        if (item1.type == "BodyCircle" && item2.type == "BodyCircle") collision=this.collisionCircleAndCircle(item1, item2);

        if(collision) {
          //изменим направление если мы приблежаемся к обьекту, если удаляемся то нам нет смысла менять направление
          //if(item1.pos.y<item2.pos.y  === item1.v.y>0 && item1.pos.x<item2.pos.x==item1.v.x>0) {

          let napY = item2.pos.y-item1.pos.y; //если item1 сверху то >0, если item2 сверху тогда <0
          let napX = item2.pos.x-item1.pos.x;

          if(napX<0 && item1.v.x<0) item1.v.x=item1.v.x*-item1.elast;
          if(napX>0 && item1.v.x>0) item1.v.x=item1.v.x*-item1.elast;
          if(napY<0 && item1.v.y<0) item1.v.y=item1.v.y*-item1.elast;
          if(napY>0 && item1.v.y>0) item1.v.y=item1.v.y*-item1.elast;

          if(napX>0 && item2.v.x<0) item2.v.x=item2.v.x*-item2.elast;
          if(napX<0 && item2.v.x>0) item2.v.x=item2.v.x*-item2.elast;
          if(napY>0 && item2.v.y<0) item2.v.y=item2.v.y*-item2.elast;
          if(napY<0 && item2.v.y>0) item2.v.y=item2.v.y*-item2.elast;
        }
      }
    }
  }


  collisionCircleAndCircle(circle1, circle2){
    var r=Math.sqrt(Math.pow(circle1.pos.x-circle2.pos.x, 2)+Math.pow(circle1.pos.y-circle2.pos.y, 2) );
    if(r<((circle1.d/2) + (circle2.d/2))) return true;
    return false;
  }

  //БАГ шарик прилипает к квадрату, вероятно из за того что слишком низко
  collisionBoxAndCircle(rect, circle){
    var rectCenter = new Vector(rect.width/2,rect.height/2),
      center = new Vector(circle.pos.x - rect.pos.x, circle.pos.y - rect.pos.y),
      side = new Vector(Math.abs (center.x) - rectCenter.x, Math.abs (center.y) - rectCenter.y);

    if (side.x <= circle.d/2 && side.y <= circle.d/2) return {
      x:circle.d/2-(center.x-rectCenter.x),
      y:circle.d/2-(side.y)
    };
    return false;
  }

}

//exports.Collision = Collision;
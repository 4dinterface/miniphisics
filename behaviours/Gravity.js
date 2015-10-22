"use strict";

class Gravity{

  constructor(config){
    this.config(config);
    this.isBehaviour=true;
  }

  tick(scene, time, interval){
    var items=scene.items;

    //влияние гравитации на вектор скорости
    for (var i=0;i<items.length;i++){
      if(items[i].static) continue;
      //console.log(items[i]);
      items[i].v=items[i].v.add(this.worldGravity.mul(interval/1000));

    }
  }

  config(config){
    this.worldGravity=new Vector(0, config.g);
  }

}
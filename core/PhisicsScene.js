/**
 * сцена
 */
"use strict";

class PhisicsScene extends EventEmitter {

  /**
   * конструктор
   * @param config
   */
  constructor(config) {
    super();
    this.items = [];
    this.behaviours = [];
    this.tick = this.tick.bind(this);
  }

  /**
   * tick
   * @param time
   */
  tick(time) {
    //if(this.lastTime<0) this.lastTime=time-1;
    var interval = (time - this.lastTime) || 0;

    //выполним все зарегистрированные на сцене поведения
    for (let i = 0; i < this.behaviours.length; i++) {
      this.behaviours[i].tick(this, time, interval);
    }

    //влияние вектора скорости на позицию
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item.isCollisionState) continue;

      if (item.static) continue;
      item.pos = item.pos.add(item.v.mul(interval / 1000)); //тот же ффект что и pos.y=pos.y+v.y/1000*interval
    }

    this.fire("tick", {
      time: time
    });

    this.animFrame = requestAnimationFrame(this.tick)
    this.lastTime = time;
  }

  /**
   * запускает проигрывание
   */
  play() {
    this.tick(0)
  }

  /**
   * останавливает проигрывание
   */
  stop() {
    cancelAnimationFrame(this.animFrame);
  }

  /**
   * добавляет тело или поведение на сцену
   * @param obj - тело или поведение
   */
  add(obj) {
    if (obj.isBehaviour) this.behaviours.push(obj)
    else this.items.push(obj);

    obj.startTime = Date.now();
  }


  /**
   * удаляет тело со сцены
   * @param obj
   */
  remove(obj) {
    var i = this.items.indexOf(obj);
    this.items.splice(i, 1);

  }

}
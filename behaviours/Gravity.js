/**
 * добавл€ет гравитацию на сцену
 */

"use strict";

class Gravity {
  /**
   * конструктор
   * @param config - на входе поведение
   */
  constructor(config) {
    this.config(config);
    this.isBehaviour = true;
  }

  /**
   * tick
   * @param scene
   * @param time
   * @param interval
   */
  tick(scene, time, interval) {
    var items = scene.items;

    //вли€ние гравитации на вектор скорости
    for (var i = 0; i < items.length; i++) {
      if (items[i].static) continue;
      items[i].v = items[i].v.add(this.worldGravity.mul(interval / 1000));
    }
  }

  /**
   * изменение конфигурации поведени€
   * @param config
   */
  config(config) {
    this.worldGravity = new Vector(0, config.g);
  }

}
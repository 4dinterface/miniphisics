/**
 * ��������� ���������� �� �����
 */

"use strict";

class Gravity {
  /**
   * �����������
   * @param config - �� ����� ���������
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

    //������� ���������� �� ������ ��������
    for (var i = 0; i < items.length; i++) {
      if (items[i].static) continue;
      items[i].v = items[i].v.add(this.worldGravity.mul(interval / 1000));
    }
  }

  /**
   * ��������� ������������ ���������
   * @param config
   */
  config(config) {
    this.worldGravity = new Vector(0, config.g);
  }

}
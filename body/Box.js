/**
 * BOX BODY
 */

"use strict";

class BodyBox {
  /**
   * �����������
   * @param config
   */
  constructor(config) {
    this.pos = new Vector(config.x, config.y);
    this.v = new Vector(0, 0); //������ ��������
    this.width = config.width;
    this.height = config.height;
    this.type = "BodyBox";
    this.static = config.static; //���� ����� true �� ��� ����  �� ����� �������� ����������
  }
}
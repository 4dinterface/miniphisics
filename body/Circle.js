/*
 * Body ball
 */
"use strict";

class BodyBall {

  /**
   * �����������
   * @param config
   */
  constructor(config) {
    this.pos = new Vector(config.x, config.y);
    this.v = new Vector(0, 0); //������ ��������

    this.d = config.d; //�������
    this.type = "BodyCircle";
    this.elast = config.elast; //���� ����� true �� ��� ���� �� ����� �������� ����������
  }

}
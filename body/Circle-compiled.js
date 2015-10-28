/*
 * Body ball
 */
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BodyBall =

/**
 * �����������
 * @param config
 */
function BodyBall(config) {
  _classCallCheck(this, BodyBall);

  this.pos = new Vector(config.x, config.y);
  this.v = new Vector(0, 0); //������ ��������

  this.d = config.d; //�������
  this.type = "BodyCircle";
  this.elast = config.elast; //���� ����� true �� ��� ���� �� ����� �������� ����������
};

//# sourceMappingURL=Circle-compiled.js.map
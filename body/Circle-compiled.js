"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BodyCircle = function BodyCircle(config) {
  _classCallCheck(this, BodyCircle);

  this.pos = new Vector(config.x, config.y);
  this.v = new Vector(0, 0); //������ ��������

  this.d = config.d; //�������
  this.type = "BodyCircle";
  this.speed = 0;
  this.elast = config.elast;
};

//# sourceMappingURL=Circle-compiled.js.map
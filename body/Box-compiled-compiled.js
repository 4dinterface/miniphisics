"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var BodyBox = function BodyBox(config) {
  _classCallCheck(this, BodyBox);

  this.pos = new Vector(config.x, config.y);
  this.v = new Vector(0, 0); //������ ��������
  this.width = config.width;
  this.height = config.height;
  this.type = "BodyBox";
  this.speed = 0;
  this["static"] = config["static"];
};

//# sourceMappingURL=Box-compiled.js.map

//# sourceMappingURL=Box-compiled-compiled.js.map
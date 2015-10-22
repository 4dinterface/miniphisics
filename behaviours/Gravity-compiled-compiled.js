"use strict";

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Gravity = (function () {
  function Gravity(config) {
    _classCallCheck(this, Gravity);

    this.config(config);
    this.isBehaviour = true;
  }

  _createClass(Gravity, [{
    key: "tick",
    value: function tick(scene, time, interval) {
      var items = scene.items;

      //������� ���������� �� ������ ��������
      for (var i = 0; i < items.length; i++) {
        if (items[i]["static"]) continue;
        //console.log(items[i]);
        items[i].v = items[i].v.add(this.worldGravity.mul(interval / 1000));
      }
    }
  }, {
    key: "config",
    value: function config(_config) {
      this.worldGravity = new Vector(0, _config.g);
    }
  }]);

  return Gravity;
})();

//# sourceMappingURL=Gravity-compiled.js.map

//# sourceMappingURL=Gravity-compiled-compiled.js.map
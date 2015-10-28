/**
 * �����
 */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhisicsScene = (function (_EventEmitter) {
  _inherits(PhisicsScene, _EventEmitter);

  /**
   * �����������
   * @param config
   */

  function PhisicsScene(config) {
    _classCallCheck(this, PhisicsScene);

    _get(Object.getPrototypeOf(PhisicsScene.prototype), "constructor", this).call(this);
    this.items = [];
    this.behaviours = [];
    this.tick = this.tick.bind(this);
  }

  /**
   * tick
   * @param time
   */

  _createClass(PhisicsScene, [{
    key: "tick",
    value: function tick(time) {
      //if(this.lastTime<0) this.lastTime=time-1;
      var interval = time - this.lastTime || 0;

      //�������� ��� ������������������ �� ����� ���������
      for (var i = 0; i < this.behaviours.length; i++) {
        this.behaviours[i].tick(this, time, interval);
      }

      //������� ������� �������� �� �������
      for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (item.isCollisionState) continue;

        if (item["static"]) continue;
        item.pos = item.pos.add(item.v.mul(interval / 1000)); //��� �� ����� ��� � pos.y=pos.y+v.y/1000*interval
      }

      this.fire("tick", {
        time: time
      });

      this.animFrame = requestAnimationFrame(this.tick);
      this.lastTime = time;
    }

    /**
     * ��������� ������������
     */
  }, {
    key: "play",
    value: function play() {
      this.tick(0);
    }

    /**
     * ������������� ������������
     */
  }, {
    key: "stop",
    value: function stop() {
      cancelAnimationFrame(this.animFrame);
    }

    /**
     * ��������� ���� ��� ��������� �� �����
     * @param obj - ���� ��� ���������
     */
  }, {
    key: "add",
    value: function add(obj) {
      if (obj.isBehaviour) this.behaviours.push(obj);else this.items.push(obj);

      obj.startTime = Date.now();
    }

    /**
     * ������� ���� �� �����
     * @param obj
     */
  }, {
    key: "remove",
    value: function remove(obj) {
      var i = this.items.indexOf(obj);
      this.items.splice(i, 1);
    }
  }]);

  return PhisicsScene;
})(EventEmitter);

//# sourceMappingURL=PhisicsScene-compiled.js.map
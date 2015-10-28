"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = (function () {

  /**
   * �����������
   * @param x
   * @param y
   */

  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  /**
   * �������� ������� ������ �� ������ v ��� ������ v
   * @param v
   */

  _createClass(Vector, [{
    key: "mul",
    value: function mul(v) {
      if (v instanceof Vector) return new Vector(this.x * v.x, this.y * v.y);else return new Vector(this.x * v, this.y * v);
    }

    /**
     * ����� ������� ������ �� ������ v ��� ������ v
     * @param v
     */
  }, {
    key: "divide",
    value: function divide(v) {
      if (v instanceof Vector) return new Vector(this.x / v.x, this.y / v.y);else return new Vector(this.x / v, this.y / v);
    }

    /**
     * ��������� � �������� �������, ������ v ��� ������ v
     * @param v
     */
  }, {
    key: "add",
    value: function add(v) {
      if (v instanceof Vector) return new Vector(this.x + v.x, this.y + v.y);
      if (!isNaN(v)) return new Vector(this.x + v, this.y + v);
    }

    /**
     * dot
     * @param v
     * @returns {number}
     */
  }, {
    key: "dot",
    value: function dot(v) {
      return this.x * v.x + this.y * v.y;
    }

    /**
     * ������
     * @returns {number}
     */
  }, {
    key: "length",
    value: function length() {
      return Math.sqrt(this.dot(this));
    }

    /**
     * ������������
     * @returns {number}
     */
  }, {
    key: "normalize",
    value: function normalize() {
      var length = this.length();
      return this.divide(this.length());
    }

    /**
     * ��������� � �������� ����� ������� ��������(������) � ��������(������)
     * @param v
     * @returns {number}
     */
  }, {
    key: "distanceSq",
    value: function distanceSq(v) {
      var dx = this.x - v.x,
          dy = this.y - v.y;
      return dx * dx + dy * dy;
    }

    /**
     * ��������� ����� ������� ��������(������) � ��������(������)
     * @param v
     * @returns {number}
     */
  }, {
    key: "distance",
    value: function distance(v) {
      return Math.sqrt(this.distanceSq(v));
    }
  }]);

  return Vector;
})();

//# sourceMappingURL=Vector-compiled.js.map
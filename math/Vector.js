"use strict";

class Vector {

  /**
   * конструктор
   * @param x
   * @param y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * умножает текущий вектор на вектор v или скаляр v
   * @param v
   */
  mul(v) {
    if (v instanceof Vector) return new Vector(this.x * v.x, this.y * v.y);
    else return new Vector(this.x * v, this.y * v);
  }

  /**
   * делим текущий вектор на вектор v или скаляр v
   * @param v
   */
  divide(v) {
    if (v instanceof Vector) return new Vector(this.x / v.x, this.y / v.y)
    else return new Vector(this.x / v, this.y / v);
  }

  /**
   * добавлеят к текущему вектору, вектор v или скаляр v
   * @param v
   */
  add(v) {
    if (v instanceof Vector) return new Vector(this.x + v.x, this.y + v.y);
    if (!isNaN(v)) return new Vector(this.x + v, this.y + v);
  }

  /**
   * dot
   * @param v
   * @returns {number}
   */
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  /**
   * длинна
   * @returns {number}
   */
  length() {
    return Math.sqrt(this.dot(this));
  }

  /**
   * нормализация
   * @returns {number}
   */
  normalize() {
    var length = this.length();
    return this.divide(this.length());
  }

  /**
   * дистанция в квадрате между текущим вектором(точкой) и вектором(точкой)
   * @param v
   * @returns {number}
   */
  distanceSq(v) {
    var dx = this.x - v.x,
        dy = this.y - v.y;
    return dx * dx + dy * dy;
  }

  /**
   * дистанция между текущим вектором(точкой) и вектором(точкой)
   * @param v
   * @returns {number}
   */
  distance(v) {
    return Math.sqrt(this.distanceSq(v));
  }
}
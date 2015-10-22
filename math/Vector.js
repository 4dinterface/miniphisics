"use strict";

class Vector{

  constructor(x, y){
    this.x=x;
    this.y=y;
  }

  mul(v){
    if(v instanceof Vector) return new Vector( this.x*v.x, this.y*v.y);
    else return new Vector( this.x*v, this.y*v);
  }

  divide(v) {
    if (v instanceof Vector) return new Vector(this.x / v.x, this.y / v.y)
    else return new Vector(this.x / v, this.y / v);
  }

  add(v){
    if(v instanceof Vector) return new Vector( this.x+v.x, this.y+v.y);
    if(!isNaN(v)) return new Vector( this.x+v, this.y+v);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  length() {
    return Math.sqrt(this.dot(this));
  }

  normalize(){
    var length = this.length();
    return this.divide(this.length());
  }

  distanceSq(v) {
    var dx = this.x - v.x,
        dy = this.y - v.y;
    return dx * dx + dy * dy;
  }

  distance(v){
    return Math.sqrt(this.distanceSq(v));
  }
}
"use strict";

class Collision {

  /**
   * конструктор
   * @param config
   */
  constructor(config) {
    this.isBehaviour = true;
  }

  /**
   * tick
   * @param scene
   * @param time
   * @param interval
   */
  tick(scene, time, interval) {
    var items = scene.items;

    //сбросим флаг столкнвения у каждого тела
    for (let i = 0; i < items.length; i++) {
      items[i].isCollisionState = false;
    }

    //проверим все тела на столкновения
    for (let i1 = 0; i1 < items.length; i1++) {
      let item1 = items[i1];

      for (var i2 = i1 + 1; i2 < items.length; i2++) { //оптимизация, с элементами до i мы уже сравнивали, i1 это сам элемент который сравниваем
        let item2 = items[i2],
            collision;

        if (item1.type == "BodyBox" && item2.type == "BodyCircle") collision = this.collisionBoxAndBall(item1, item2);
        if (item1.type == "BodyCircle" && item2.type == "BodyBox") collision = this.collisionBoxAndBall(item2, item1);
        if (item1.type == "BodyCircle" && item2.type == "BodyCircle") collision = this.collisionBallAndBall(item1, item2);

        //если столкновение обнаружено выясним определим направление
        if (collision) {
          let napY = item2.pos.y - item1.pos.y; //если item1 сверху то >0, если item2 сверху тогда <0
          let napX = item2.pos.x - item1.pos.x; //

          //изменим направлени у item 1
          if (napX < 0 && item1.v.x < 0) {
            item1.v.x = item1.v.x * -item1.elast;
            item1.isCollisionState = true;
          }
          if (napX > 0 && item1.v.x > 0) {
            item1.v.x = item1.v.x * -item1.elast;
            item1.isCollisionState = true;
          }
          if (napY < 0 && item1.v.y < 0) {
            item1.v.y = item1.v.y * -item1.elast;
            item1.isCollisionState = true;
          }
          if (napY > 0 && item1.v.y > 0) {
            item1.v.y = item1.v.y * -item1.elast;
            item1.isCollisionState = true;
          }

          //изменим направление у item 2
          if (napX > 0 && item2.v.x < 0) {
            item2.v.x = item2.v.x * -item2.elast;
            item2.isCollisionState = true;
          }
          if (napX < 0 && item2.v.x > 0) {
            item2.v.x = item2.v.x * -item2.elast;
            item2.isCollisionState = true;
          }
          if (napY > 0 && item2.v.y < 0) {
            item2.v.y = item2.v.y * -item2.elast;
            item2.isCollisionState = true;
          }
          if (napY < 0 && item2.v.y > 0) {
            item2.v.y = item2.v.y * -item2.elast;
            item2.isCollisionState = true;
          }
        }
      }
    }
  }

  /**
   * проверим столкновение двух мячей
   * @param ball1
   * @param ball2
   * @returns {boolean}
   */
  collisionBallAndBall(ball1, ball2) {
    var r = Math.sqrt(Math.pow(ball1.pos.x - ball2.pos.x, 2) + Math.pow(ball1.pos.y - ball2.pos.y, 2));
    if (r < ((ball1.d / 2) + (ball2.d / 2))) return true;
    return false;
  }

  /**
   * проверка на столкновение меча и боксаи
   * @param box
   * @param ball
   * @returns {*}
   */
  collisionBoxAndBall(box, ball) {
    var rectCenter = new Vector(box.width / 2, box.height / 2),
        center = new Vector(ball.pos.x - box.pos.x, ball.pos.y - box.pos.y),
        side = new Vector(Math.abs(center.x) - rectCenter.x, Math.abs(center.y) - rectCenter.y);

    if (side.x <= ball.d / 2 && side.y <= ball.d / 2) return {
      x: ball.d / 2 - (center.x - rectCenter.x),
      y: ball.d / 2 - (side.y)
    };
    return false;
  }

}
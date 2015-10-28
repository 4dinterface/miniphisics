"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collision = (function () {

  /**
   * �����������
   * @param config
   */

  function Collision(config) {
    _classCallCheck(this, Collision);

    this.isBehaviour = true;
  }

  /**
   * tick
   * @param scene
   * @param time
   * @param interval
   */

  _createClass(Collision, [{
    key: "tick",
    value: function tick(scene, time, interval) {
      var items = scene.items;

      //������� ���� ����������� � ������� ����
      for (var i = 0; i < items.length; i++) {
        items[i].isCollisionState = false;
      }

      //�������� ��� ���� �� ������������
      for (var i1 = 0; i1 < items.length; i1++) {
        var item1 = items[i1];

        for (var i2 = i1 + 1; i2 < items.length; i2++) {
          //�����������, � ���������� �� i �� ��� ����������, i1 ��� ��� ������� ������� ����������
          var item2 = items[i2],
              collision = undefined;

          if (item1.type == "BodyBox" && item2.type == "BodyCircle") collision = this.collisionBoxAndBall(item1, item2);
          if (item1.type == "BodyCircle" && item2.type == "BodyBox") collision = this.collisionBoxAndBall(item2, item1);
          if (item1.type == "BodyCircle" && item2.type == "BodyCircle") collision = this.collisionBallAndBall(item1, item2);

          //���� ������������ ���������� ������� ��������� �����������
          if (collision) {
            var napY = item2.pos.y - item1.pos.y; //���� item1 ������ �� >0, ���� item2 ������ ����� <0
            var napX = item2.pos.x - item1.pos.x; //

            //������� ���������� � item 1
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

            //������� ����������� � item 2
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
     * �������� ������������ ���� �����
     * @param ball1
     * @param ball2
     * @returns {boolean}
     */
  }, {
    key: "collisionBallAndBall",
    value: function collisionBallAndBall(ball1, ball2) {
      var r = Math.sqrt(Math.pow(ball1.pos.x - ball2.pos.x, 2) + Math.pow(ball1.pos.y - ball2.pos.y, 2));
      if (r < ball1.d / 2 + ball2.d / 2) return true;
      return false;
    }

    /**
     * �������� �� ������������ ���� � ������
     * @param box
     * @param ball
     * @returns {*}
     */
  }, {
    key: "collisionBoxAndBall",
    value: function collisionBoxAndBall(box, ball) {
      var rectCenter = new Vector(box.width / 2, box.height / 2),
          center = new Vector(ball.pos.x - box.pos.x, ball.pos.y - box.pos.y),
          side = new Vector(Math.abs(center.x) - rectCenter.x, Math.abs(center.y) - rectCenter.y);

      if (side.x <= ball.d / 2 && side.y <= ball.d / 2) return {
        x: ball.d / 2 - (center.x - rectCenter.x),
        y: ball.d / 2 - side.y
      };
      return false;
    }
  }]);

  return Collision;
})();

//# sourceMappingURL=Collision-compiled.js.map
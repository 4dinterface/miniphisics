"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collision = (function () {
  function Collision(config) {
    _classCallCheck(this, Collision);

    this.isBehaviour = true;
  }

  //exports.Collision = Collision;

  _createClass(Collision, [{
    key: "tick",
    value: function tick(scene, time, interval) {
      var items = scene.items;

      //������� ���������� �� ������ ��������
      for (var i1 = 0; i1 < items.length; i1++) {
        var item1 = items[i1];

        //for(var i2=0;i2<this.items.length;i2++) {

        for (var i2 = i1 + 1; i2 < items.length; i2++) {
          //�����������, � ���������� �� i �� ��� ����������, i1 ��� ��� ������� ������� ����������
          var item2 = items[i2],
              collision = undefined;

          if (item1.type == "BodyBox" && item2.type == "BodyCircle") collision = this.collisionBoxAndCircle(item1, item2);
          if (item1.type == "BodyCircle" && item2.type == "BodyBox") collision = this.collisionBoxAndCircle(item2, item1);
          if (item1.type == "BodyCircle" && item2.type == "BodyCircle") collision = this.collisionCircleAndCircle(item1, item2);

          if (collision) {
            //������� ����������� ���� �� ������������ � �������, ���� ��������� �� ��� ��� ������ ������ �����������
            //if(item1.pos.y<item2.pos.y  === item1.v.y>0 && item1.pos.x<item2.pos.x==item1.v.x>0) {

            var napY = item2.pos.y - item1.pos.y; //���� item1 ������ �� >0, ���� item2 ������ ����� <0
            var napX = item2.pos.x - item1.pos.x;

            if (napX < 0 && item1.v.x < 0) item1.v.x = item1.v.x * -item1.elast;
            if (napX > 0 && item1.v.x > 0) item1.v.x = item1.v.x * -item1.elast;
            if (napY < 0 && item1.v.y < 0) item1.v.y = item1.v.y * -item1.elast;
            if (napY > 0 && item1.v.y > 0) item1.v.y = item1.v.y * -item1.elast;

            if (napX > 0 && item2.v.x < 0) item2.v.x = item2.v.x * -item2.elast;
            if (napX < 0 && item2.v.x > 0) item2.v.x = item2.v.x * -item2.elast;
            if (napY > 0 && item2.v.y < 0) item2.v.y = item2.v.y * -item2.elast;
            if (napY < 0 && item2.v.y > 0) item2.v.y = item2.v.y * -item2.elast;
          }
        }
      }
    }
  }, {
    key: "collisionCircleAndCircle",
    value: function collisionCircleAndCircle(circle1, circle2) {
      var r = Math.sqrt(Math.pow(circle1.pos.x - circle2.pos.x, 2) + Math.pow(circle1.pos.y - circle2.pos.y, 2));
      if (r < circle1.d / 2 + circle2.d / 2) return true;
      return false;
    }

    //��� ����� ��������� � ��������, �������� �� �� ���� ��� ������� �����
  }, {
    key: "collisionBoxAndCircle",
    value: function collisionBoxAndCircle(rect, circle) {
      var rectCenter = new Vector(rect.width / 2, rect.height / 2),
          center = new Vector(circle.pos.x - rect.pos.x, circle.pos.y - rect.pos.y),
          side = new Vector(Math.abs(center.x) - rectCenter.x, Math.abs(center.y) - rectCenter.y);

      if (side.x <= circle.d / 2 && side.y <= circle.d / 2) return {
        x: circle.d / 2 - (center.x - rectCenter.x),
        y: circle.d / 2 - side.y
      };
      return false;
    }
  }]);

  return Collision;
})();

//# sourceMappingURL=Collision-compiled.js.map
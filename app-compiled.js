"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = (function () {
  function App(scene) {
    _classCallCheck(this, App);

    this.canvas = document.getElementById("scene");
    this.ctx = this.canvas.getContext("2d"), this.renderer = new CanvasRenderer(this.canvas);

    this.scene = new Phisics({});
    this.gravity = new Gravity({
      g: document.getElementsByName("g")[0].value
    });

    this.scene.add(this.gravity);
    this.scene.add(new Collision({}));
    this.scene.on("tick", this.tick.bind(this));
    this.scene.play();
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  _createClass(App, [{
    key: "resize",
    value: function resize() {
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
    }
  }, {
    key: "tick",
    value: function tick(interval) {
      var ballParams = this.getBallParams(),
          boxParams = this.getBoxParams();

      this.renderer.render(this.scene, interval);

      this.ctx.setLineDash([3, 2]);
      if (ballParams.d > 0) {
        this.ctx.beginPath();
        this.ctx.arc(ballParams.x, ballParams.y, ballParams.d / 2, 0, Math.PI * 2, false);
        this.ctx.closePath();
        this.ctx.stroke();
      }

      //rect
      if (boxParams.width > 0 && boxParams.height > 0) {
        this.ctx.strokeRect(boxParams.x - boxParams.width / 2, boxParams.y - boxParams.height / 2, boxParams.width, boxParams.height);
      }
    }
  }, {
    key: "addBall",
    value: function addBall() {
      var params = this.getBallParams();
      this.scene.add(new BodyCircle(params));
    }
  }, {
    key: "addBox",
    value: function addBox() {
      var boxParams = this.getBoxParams();
      this.scene.add(new BodyBox({
        x: boxParams.x,
        y: boxParams.y,
        width: boxParams.width,
        height: boxParams.height,
        "static": true,
        elast: 0
      }));
    }
  }, {
    key: "setG",
    value: function setG() {
      var g = Number(document.getElementsByName("g")[0].value);
      this.gravity.config({ g: g });
    }
  }, {
    key: "getBallParams",
    value: function getBallParams() {
      return {
        x: Number(document.getElementsByName("ballX")[0].value),
        y: Number(document.getElementsByName("ballY")[0].value),
        d: Number(document.getElementsByName("ballD")[0].value),
        elast: Number(document.getElementsByName("ballElastic")[0].value)
      };
    }
  }, {
    key: "getBoxParams",
    value: function getBoxParams() {
      return {
        x: Number(document.getElementsByName("boxX")[0].value),
        y: Number(document.getElementsByName("boxY")[0].value),
        width: Number(document.getElementsByName("boxW")[0].value),
        height: Number(document.getElementsByName("boxH")[0].value)
      };
    }
  }]);

  return App;
})();

var app = new App();

//# sourceMappingURL=app-compiled.js.map
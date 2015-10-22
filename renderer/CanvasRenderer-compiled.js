"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasRenderer = (function () {
  function CanvasRenderer(canvas) {
    _classCallCheck(this, CanvasRenderer);

    if (canvas.getContext) {
      this.ctx = canvas.getContext('2d');
    } else {
      throw !canvas ? "not canvas element" : "not context";
    }
  }

  _createClass(CanvasRenderer, [{
    key: "render",
    value: function render(scene) {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

      for (var i = 0; i < scene.items.length; i++) {
        var item = scene.items[i];

        switch (item.type) {
          case "BodyBox":
            this.ctx.fillRect(item.pos.x - item.width / 2, item.pos.y - item.height / 2, item.width, item.height);
            break;

          case "BodyCircle":
            this.ctx.beginPath();
            this.ctx.arc(item.pos.x, item.pos.y, item.d / 2, 0, Math.PI * 2, false);
            this.ctx.closePath();
            this.ctx.fill();
            break;
        }
      }
    }
  }]);

  return CanvasRenderer;
})();

//# sourceMappingURL=CanvasRenderer-compiled.js.map
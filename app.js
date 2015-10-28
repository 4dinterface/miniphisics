"use strict";

class App {
  /**
   * конструктор
   * @param scene
   */
  constructor(scene) {
    this.canvas = document.getElementById("scene");
    this.ctx = this.canvas.getContext("2d");
    this.renderer = new CanvasRenderer(this.canvas);

    this.scene = new PhisicsScene({});
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

  /**
   * обработчик событи€ ресайза экрана, изменит рзмер канваса
   */
  resize() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }

  /**
   * tick
   * @param interval
   */
  tick(interval) {
    var ballParams = this.getBallParams(),
        boxParams = this.getBoxParams();

    this.renderer.render(this.scene, interval);

    this.ctx.setLineDash([3, 2]);

    //отрисовываем м€ч
    if (ballParams.d > 0) {
      this.ctx.beginPath();
      this.ctx.arc(ballParams.x, ballParams.y, ballParams.d / 2, 0, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.stroke();
    }

    //отрисовываем box
    if (boxParams.width > 0 && boxParams.height > 0) {
      this.ctx.strokeRect(boxParams.x - boxParams.width / 2, boxParams.y - boxParams.height / 2, boxParams.width, boxParams.height);
    }
  }

  /**
   * обработчик нажати€ на кнопку добавлени€ м€ча
   */
  addBall() {
    var params = this.getBallParams();
    this.scene.add(new BodyBall(params));
  }

  /**
   * обработчик на кнопку добавлени€ бокса
   */
  addBox() {
    var boxParams = this.getBoxParams();
    this.scene.add(new BodyBox({
      x: boxParams.x,
      y: boxParams.y,
      width: boxParams.width,
      height: boxParams.height,
      static: true,
      elast: 0
    }));
  }

  /**
   * обработчик на кнопку добавлени€ изменени€ гравитации
   */
  setG() {
    var g = Number(document.getElementsByName("g")[0].value)
    this.gravity.config({
      g: g
    });
  }

  /**
   * вернЄт настройки из формы дл€ м€ча
   * @returns {{x: number, y: number, d: number, elast: number}}
   */
  getBallParams() {
    return {
      x: Number(document.getElementsByName("ballX")[0].value),
      y: Number(document.getElementsByName("ballY")[0].value),
      d: Number(document.getElementsByName("ballD")[0].value),
      elast: Number(document.getElementsByName("ballElastic")[0].value),
    }
  }

  /**
   * вернЄт настройки дл€ коробки
   * @returns {{x: number, y: number, width: number, height: number}}
   */
  getBoxParams() {
    return {
      x: Number(document.getElementsByName("boxX")[0].value),
      y: Number(document.getElementsByName("boxY")[0].value),
      width: Number(document.getElementsByName("boxW")[0].value),
      height: Number(document.getElementsByName("boxH")[0].value)
    }
  }
}

var app = new App();
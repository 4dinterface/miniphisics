"use strict";
class EventEmitter {
  /**
   * конструктор
   */
  constructor() {
    this.count = 0;
    this.events = {};
  }

  /**
   * подписка на события
   * @param name - имя события
   * @param handler - функция обработчик
   * @param context - конекст в котором вызывается обработчик
   * @returns {number} - id подписки на событие
   */
  on(name, handler, context) {
    var id = this.count++;
    this.events[name] = this.events[name] || {};
    this.events[name][id] = {
      handler: handler,
      context: context || this
    }; //this это eventEmitter или его наследник
    return id;
  }

  /**
   * отписка от событий
   * @param name - имя события
   * @param id - подписки на события
   */
  off(name, id) {
    delete this.events[name][id];
  }

  /**
   * поджигает события
   * @param name
   * @param data
   */
  fire(name, data) {
    this._cancelEvent = false;
    var handlers = this.events[name];
    for (var key in handlers) {
      handlers[key].handler.call(handlers[key].context, data);
    }
  }
}
"use strict";
class EventEmitter {
  /**
   * �����������
   */
  constructor() {
    this.count = 0;
    this.events = {};
  }

  /**
   * �������� �� �������
   * @param name - ��� �������
   * @param handler - ������� ����������
   * @param context - ������� � ������� ���������� ����������
   * @returns {number} - id �������� �� �������
   */
  on(name, handler, context) {
    var id = this.count++;
    this.events[name] = this.events[name] || {};
    this.events[name][id] = {
      handler: handler,
      context: context || this
    }; //this ��� eventEmitter ��� ��� ���������
    return id;
  }

  /**
   * ������� �� �������
   * @param name - ��� �������
   * @param id - �������� �� �������
   */
  off(name, id) {
    delete this.events[name][id];
  }

  /**
   * ��������� �������
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
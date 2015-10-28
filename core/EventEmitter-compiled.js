"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = (function () {
  /**
   * �����������
   */

  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

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

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(name, handler, context) {
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
  }, {
    key: "off",
    value: function off(name, id) {
      delete this.events[name][id];
    }

    /**
     * ��������� �������
     * @param name
     * @param data
     */
  }, {
    key: "fire",
    value: function fire(name, data) {
      this._cancelEvent = false;
      var handlers = this.events[name];
      for (var key in handlers) {
        handlers[key].handler.call(handlers[key].context, data);
      }
    }
  }]);

  return EventEmitter;
})();

//# sourceMappingURL=EventEmitter-compiled.js.map
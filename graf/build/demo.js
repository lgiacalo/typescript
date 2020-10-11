"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Demo = /** @class */ (function () {
    function Demo(name) {
        this._name = name;
    }
    Object.defineProperty(Demo.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Demo.prototype.start = function () {
        console.log("Demo start .....");
    };
    Demo.explain = function () {
        console.log("Class to handle demo");
    };
    return Demo;
}());
exports.default = Demo;

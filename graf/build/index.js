"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var demo_1 = require("./demo");
var scroll_to_1 = require("scroll-to");
demo_1.default.explain();
scroll_to_1.default(500, 1200, {
    ease: 'out-bounce',
    duration: 1500
});
$('.demo').click(function () {
    scroll_to_1.default(0, 0);
});

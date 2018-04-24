"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const majuro_1 = require("majuro");
const path = require("path");
const app = express();
app.route('/express-js-video-helper')
    .get((request, response) => {
    const expressJSVideoHelper = new majuro_1.ExpressJSVideoHelper(path.join(__dirname, '..', 'assets'), 1800000);
    expressJSVideoHelper.send('big_buck_bunny.mp4', request, response);
});
app.listen(process.env.PORT || 3000, () => {
});
//# sourceMappingURL=app.js.map
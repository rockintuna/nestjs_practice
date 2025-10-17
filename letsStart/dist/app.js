"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_module_1 = require("./app.module");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    next();
});
app.get('/cats', function (req, res, next) {
    console.log('This is the first middleware');
    next();
});
app.get('/', function (req, res) {
    res.send({ cats: app_module_1.Cat });
});
app.get('/cats/blue', function (req, res) {
    res.send({ blue: app_module_1.Cat[0] });
});
app.get('/cats/som', function (req, res) {
    res.send({ som: app_module_1.Cat[1] });
});
app.listen(8000, function () {
    console.log("Server is running on http://localhost:8000");
});
//# sourceMappingURL=app.js.map
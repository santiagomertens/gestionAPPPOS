"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var _incidentes = _interopRequireDefault(require("./routes/incidentes.router"));
var app = (0, _express["default"])();

//configuraciones
app.set('port', _config["default"].port);

//middleware
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_incidentes["default"]);
var _default = app;
exports["default"] = _default;
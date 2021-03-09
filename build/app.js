"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(express_1.default.json());
app.get('/hi', function (req, res, next) {
    res.send('<h1>Hello World</h1>');
});
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));
module.exports = app;

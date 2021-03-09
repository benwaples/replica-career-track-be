"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
};

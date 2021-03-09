"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (err, req, res, next) {
    var status = err.status || 500;
    res.status(status);
    console.log(err);
    res.send({
        status: status,
        message: err.message
    });
};

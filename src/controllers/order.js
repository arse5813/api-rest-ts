"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItem = void 0;
const error_handle_1 = require("../util/error.handle");
const getItem = (req, res) => {
    try {
        res.send({
            data: "esto solo ves las persona con session /JWT",
        });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_BLOGS");
    }
};
exports.getItem = getItem;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTramo = exports.updateTramo = exports.getTramo = exports.getTramos = exports.interTramo = void 0;
const tracto_1 = __importDefault(require("../models/tracto"));
const interTramo = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsert = yield tracto_1.default.create(item);
    return responseInsert;
});
exports.interTramo = interTramo;
const getTramos = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseIntem = yield tracto_1.default.find({});
    return responseIntem;
});
exports.getTramos = getTramos;
const getTramo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseIntem = yield tracto_1.default.findOne({ _id: id });
    return responseIntem;
});
exports.getTramo = getTramo;
const updateTramo = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const responseIntem = yield tracto_1.default.findOneAndUpdate({ _id: id }, data, {
        new: true
    });
    return responseIntem;
});
exports.updateTramo = updateTramo;
const deleteTramo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseIntem = yield tracto_1.default.findOneAndRemove({ _id: id });
    return responseIntem;
});
exports.deleteTramo = deleteTramo;

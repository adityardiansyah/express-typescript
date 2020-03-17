"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
//Import Controller
var AuthController_1 = __importDefault(require("../controllers/AuthController"));
var AuthRoutes = /** @class */ (function () {
    function AuthRoutes() {
        this.router = express_1.Router();
        this.routes();
    }
    AuthRoutes.prototype.routes = function () {
        this.router.get('/', AuthController_1.default.index);
        this.router.post('/', AuthController_1.default.create);
        this.router.get('/:id', AuthController_1.default.show);
        this.router.put('/:id', AuthController_1.default.update);
        this.router.delete('/:id', AuthController_1.default.delete);
    };
    return AuthRoutes;
}());
exports.default = new UserRoutes().router;

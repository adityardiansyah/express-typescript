"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var compression_1 = __importDefault(require("compression"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = require("dotenv");
// Route User
var UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
var AuthRoutes_1 = __importDefault(require("./routes/AuthRoutes"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.plugins();
        this.routes();
        dotenv_1.config();
    }
    App.prototype.plugins = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(morgan_1.default('dev'));
        this.app.use(compression_1.default());
        this.app.use(helmet_1.default());
        this.app.use(cors_1.default());
    };
    App.prototype.routes = function () {
        this.app.get('/', function (req, res) {
            res.send('Ok');
        });
        this.app.use('/auth', AuthRoutes_1.default);
        this.app.use('/users', UserRoutes_1.default);
    };
    return App;
}());
var port = 8000;
var app = new App().app;
app.listen(port, function () {
    console.log("Server running in port");
});

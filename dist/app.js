"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
class App {
    constructor() {
        this.app = express_1.default();
        this.Config();
        this.Routes();
    }
    Config() {
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default());
        this.app.use(cookie_parser_1.default());
        this.app.use(body_parser_1.default());
    }
    Routes() {
        const indexRoutes = index_1.default();
        this.app.use('/', indexRoutes);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map
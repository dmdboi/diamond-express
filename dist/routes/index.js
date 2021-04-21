"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_1 = __importDefault(require("../controllers/index"));
function Routes() {
    const index = new index_1.default();
    router.get('/', index.base);
    return router;
}
exports.default = Routes;
//# sourceMappingURL=index.js.map
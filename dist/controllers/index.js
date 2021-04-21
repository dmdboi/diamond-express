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
const Controller_1 = __importDefault(require("../interfaces/types/Controller"));
class IndexController extends Controller_1.default {
    constructor() {
        super();
    }
    base(req, res, next) {
        const _super = Object.create(null, {
            response: { get: () => super.response }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const data = { url: req.url };
            _super.response.call(this, res, 200, data, 'Hello World');
        });
    }
}
exports.default = IndexController;
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT;
app_1.default.listen(3000, () => {
    //Depending on setup, skip console.log()
    console.log(`Express server running on http://localhost:3000`);
});
//# sourceMappingURL=server.js.map
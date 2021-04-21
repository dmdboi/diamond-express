"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    response(res, status, data, message) {
        return res.status(status).json({
            message: message,
            data: data
        });
    }
}
exports.default = Controller;
//# sourceMappingURL=Controller.js.map
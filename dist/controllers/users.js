var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var userService = require("../services/users");
var _a = require("../services/auth"), login = _a.login, verify = _a.verify, register = _a.register;
exports.register = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
    var _a, username, email, password, user;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, email = _a.email, password = _a.password;
                if (!username || !email || !password) {
                    return [2 /*return*/, res.status(400).send({ message: "Missing Credentials" })];
                }
                return [4 /*yield*/, userService.create(email, password)];
            case 1:
                user = _b.sent();
                user.password = null;
                //In production, DO NOT send back the full user object. This is for demo purposes
                return [2 /*return*/, res
                        .status(200)
                        .send({ user: user })];
        }
    });
}); };
exports.login = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
    var _a, email, password, user, token;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                if (!email || !password) {
                    return [2 /*return*/, res.status(400).send({ message: "Missing Credentials" })];
                }
                return [4 /*yield*/, userService.find({ email: email })];
            case 1:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, res.status(400).send({ message: "No User Exists" })];
                }
                if (!user.validPassword(password)) {
                    return [2 /*return*/, res.status(400).send({ message: "Invalid Password" })];
                }
                return [4 /*yield*/, login(user)];
            case 2:
                token = _b.sent();
                return [2 /*return*/, res.status(200).send({ token: token })];
        }
    });
}); };
exports.updateAccount = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
    var uuid, user, _a, email, password, username, update, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                uuid = req.user.uuid;
                return [4 /*yield*/, userService.find({ uuid: uuid })];
            case 1:
                user = _c.sent();
                _a = req.body, email = _a.email, password = _a.password, username = _a.username;
                update = {
                    username: username,
                    email: email,
                };
                if (!!user.validPassword(password)) return [3 /*break*/, 3];
                console.log("Password Change");
                _b = update;
                return [4 /*yield*/, user.encryptPassword(password)];
            case 2:
                _b.password = _c.sent();
                _c.label = 3;
            case 3: return [4 /*yield*/, userService.update({ uuid: uuid }, update)];
            case 4:
                _c.sent();
                return [2 /*return*/, res.status(200).json({ message: "Account Updated" })];
        }
    });
}); };
exports.deleteAccount = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userService.find({ uuid: req.user.uuid })];
            case 1:
                user = _a.sent();
                return [4 /*yield*/, userService.delete({ uuid: req.user.uuid })];
            case 2:
                _a.sent();
                return [2 /*return*/, res.status(200).json({ message: "Account Deleted" })];
        }
    });
}); };
exports.me = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userService.find({ uuid: req.user.uuid })];
            case 1:
                user = _a.sent();
                user.password = null;
                return [2 /*return*/, res.status(200).send({ user: user })];
        }
    });
}); };

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
var User = require("../models/User");
var uniqid = require("uniqid");
var userService = {
    /**
     * @description Creates a User document in the database
     * @param {Object} body Object containing username, email and password
     * @return {Object} User Document
     */
    create: function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var document, username, email, password;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        document = new User();
                        username = body.username, email = body.email, password = body.password;
                        document.uuid = uniqid("u");
                        document.username = username;
                        document.email = email;
                        document.password = document.encryptPassword(password);
                        return [4 /*yield*/, document.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document];
                }
            });
        });
    },
    /**
     * @description Finds a User document in the database
     * @param {String} query Database Query
     * @return {Object} User Document
     */
    find: function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var document;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.findOne(query)];
                    case 1:
                        document = _a.sent();
                        return [2 /*return*/, document];
                }
            });
        });
    },
    /**
     * @description Finds all User document in the database that match Query
     * @param {String} query Database Query
     * @return {Array} Array of User Documents
     */
    findAll: function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var documents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.find(query).select("-password -__v")];
                    case 1:
                        documents = _a.sent();
                        return [2 /*return*/, documents];
                }
            });
        });
    },
    /**
     * @description Updates a User document in the database
     * @param {String} query Database Query
     * @return {Object} User Document
     */
    update: function (query, body) {
        return __awaiter(this, void 0, void 0, function () {
            var document;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.findOneAndUpdate(query, { $set: body })];
                    case 1:
                        document = _a.sent();
                        return [2 /*return*/, document];
                }
            });
        });
    },
    /**
     * @description Deletes a User document in the database
     * @param {String} query Database Query
     * @return {Object} User Document
     */
    delete: function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var document;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.deleteOne(query)];
                    case 1:
                        document = _a.sent();
                        return [2 /*return*/, document];
                }
            });
        });
    },
};
module.exports = userService;

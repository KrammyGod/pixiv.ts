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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
var Translate_1 = require("../Translate");
var axios_1 = require("axios");
var Search = /** @class */ (function () {
    function Search(api) {
        var _this = this;
        this.api = api;
        this.nextURL = null;
        this.defaults = [
            "gabriel dropout", "kisaragi", "azur lane", "konosuba",
            "megumin", "aqua", "black tights", "white tights", "eromanga sensei",
            "sagiri", "kancolle", "loli", "is the order a rabbit", "chino", "kiniro mosaic",
            "gabriel", "hibiki", "tohru", "laffey", "kanna", "tights"
        ];
        /**
         * Default params for searches are `partial_match_for_tags` and `date_desc`.
         */
        this.searchDefaults = function (params) {
            if (!(params === null || params === void 0 ? void 0 : params.word))
                params.word = _this.defaults[Math.floor(Math.random() * _this.defaults.length)];
            if (!(params === null || params === void 0 ? void 0 : params.search_target))
                params.search_target = "partial_match_for_tags";
            if (!(params === null || params === void 0 ? void 0 : params.sort))
                params.sort = "date_desc";
            return params;
        };
        this.processWord = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(params === null || params === void 0 ? void 0 : params.word))
                            params.word = this.defaults[Math.floor(Math.random() * this.defaults.length)];
                        if (!!params.en) return [3 /*break*/, 2];
                        _a = params;
                        return [4 /*yield*/, Translate_1.default.translateTag(params.word)];
                    case 1:
                        _a.word = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (params.r18 !== undefined) {
                            switch (params.r18) {
                                case true:
                                    params.word += " R-18";
                                    break;
                                case false:
                                    params.word += " -R-18";
                                    break;
                                default:
                            }
                        }
                        if (params.bookmarks && Number(params.bookmarks) > 0) {
                            params.word += " ".concat(params.bookmarks, "users\u5165\u308A");
                        }
                        return [2 /*return*/, params];
                }
            });
        }); };
        /**
         * Searches for illusts with a query.
         */
        this.illusts = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response, setUgoira, res, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.searchDefaults(params);
                        return [4 /*yield*/, this.processWord(params)];
                    case 1:
                        params = _a.sent();
                        if (!params.moe) return [3 /*break*/, 5];
                        setUgoira = false;
                        if ((params === null || params === void 0 ? void 0 : params.type) === "ugoira")
                            setUgoira = true;
                        return [4 /*yield*/, this.moe({ query: params.word, r18: params.r18, en: params.en, ugoira: setUgoira })];
                    case 2:
                        response = _a.sent();
                        if (!!(response === null || response === void 0 ? void 0 : response[0])) return [3 /*break*/, 4];
                        params.moe = undefined;
                        return [4 /*yield*/, this.api.get("/v1/search/illust", params)];
                    case 3:
                        res = _a.sent();
                        this.nextURL = res.next_url;
                        response = res.illusts;
                        _a.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.api.get("/v1/search/illust", params)];
                    case 6:
                        res = _a.sent();
                        this.nextURL = res.next_url;
                        response = res.illusts;
                        _a.label = 7;
                    case 7:
                        if (params.type)
                            response = response.filter(function (i) { return i.type === params.type; });
                        response.forEach(function (i) { return i.url = "https://www.pixiv.netartworks/".concat(i.id); });
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * Searches for novels with a query.
         */
        this.novels = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.searchDefaults(params);
                        return [4 /*yield*/, this.processWord(params)];
                    case 1:
                        params = _a.sent();
                        return [4 /*yield*/, this.api.get("/v1/search/novel", params)];
                    case 2:
                        response = _a.sent();
                        response.novels.forEach(function (i) { return i.url = "https://www.pixiv.net/novel/show.php?id=".concat(i.id); });
                        response.novels.forEach(function (i) { return i.type = "novel"; });
                        this.nextURL = response.next_url;
                        return [2 /*return*/, response.novels];
                }
            });
        }); };
        /**
         * Searches for users with a query.
         */
        this.users = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.processWord(params)];
                    case 1:
                        params = _a.sent();
                        return [4 /*yield*/, this.api.get("/v1/search/user", params)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * Gets autocompleted keywords for the word.
         */
        this.autoComplete = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.processWord(params)];
                    case 1:
                        params = _a.sent();
                        return [4 /*yield*/, this.api.get("/v1/search/autocomplete", params)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * The V2 endpoint includes translated names.
         */
        this.autoCompleteV2 = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.processWord(params)];
                    case 1:
                        params = _a.sent();
                        return [4 /*yield*/, this.api.get("/v2/search/autocomplete", params)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * Searches pixiv.moe. If there is no query, some defaults are provided.
         */
        this.moe = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var _a, kotoriToken, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!params)
                            params = {};
                        if (!(params === null || params === void 0 ? void 0 : params.query))
                            params.query = this.defaults[Math.floor(Math.random() * this.defaults.length)];
                        if (!!(params === null || params === void 0 ? void 0 : params.en)) return [3 /*break*/, 2];
                        _a = params;
                        return [4 /*yield*/, Translate_1.default.translateTag(params.query)];
                    case 1:
                        _a.query = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (params === null || params === void 0 ? void 0 : params.ugoira)
                            params.query += " うごイラ";
                        if ((params === null || params === void 0 ? void 0 : params.r18) === true) {
                            params.query += " R-18";
                        }
                        else {
                            params.query += " -R-18";
                        }
                        return [4 /*yield*/, axios_1.default.get("https://api.pixiv.moe/session").then((function (r) { return r.data.response.access_token; }))];
                    case 3:
                        kotoriToken = _b.sent();
                        return [4 /*yield*/, axios_1.default.get("https://api.pixiv.moe/v2/search?word=".concat(encodeURIComponent(params.query)), { headers: { "x-kotori-token": kotoriToken } }).then(function (r) { return r.data.response.illusts; })];
                    case 4:
                        response = _b.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
    }
    return Search;
}());
exports.Search = Search;

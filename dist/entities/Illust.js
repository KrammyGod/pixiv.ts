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
exports.Illust = void 0;
var index_1 = require("./index");
var Illust = /** @class */ (function () {
    function Illust(api) {
        var _this = this;
        this.api = api;
        this.nextURL = null;
        this.search = new index_1.Search(this.api);
        /**
         * Gets an illust by either URL or ID.
         */
        this.get = function (illustResolvable, params) { return __awaiter(_this, void 0, void 0, function () {
            var illustId, illusts, response;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        illustId = String(illustResolvable).match(/\d{5,}/) ? String(illustResolvable).match(/\d{5,}/)[0] : null;
                        if (!!illustId) return [3 /*break*/, 2];
                        if (!params)
                            params = {};
                        params.word = String(illustResolvable);
                        return [4 /*yield*/, this.search.illusts(params)];
                    case 1:
                        illusts = _b.sent();
                        Array.prototype.sort.call(illusts, (function (a, b) { return (a.total_bookmarks - b.total_bookmarks) * -1; }));
                        illusts = illusts.filter(function (i) {
                            return (i.type === "illust" || i.type === "ugoira") ? true : false;
                        });
                        if (!illusts.length)
                            return [2 /*return*/];
                        illustId = String((_a = illusts[0]) === null || _a === void 0 ? void 0 : _a.id);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, this.detail({ illust_id: Number(illustId) })];
                    case 3:
                        response = _b.sent();
                        response.url = "https://www.pixiv.netartworks/".concat(response.id);
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * Gets the details for an illust.
         */
        this.detail = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v1/illust/detail", params)];
                    case 1:
                        response = _a.sent();
                        if (response.illust.type === "novel")
                            return [2 /*return*/, Promise.reject("This is not an illust, it is a novel.")];
                        response.illust.url = "https://www.pixiv.netartworks/".concat(response.illust.id);
                        return [2 /*return*/, response.illust];
                }
            });
        }); };
        /**
         * Gets the URLS of all the pages for an illust.
         */
        this.getPages = function (illust) { return __awaiter(_this, void 0, void 0, function () {
            var urls, i;
            return __generator(this, function (_a) {
                urls = [];
                if (!illust.meta_pages[0]) {
                    urls.push(illust.image_urls.large ? illust.image_urls.large : illust.image_urls.medium);
                }
                else {
                    for (i = 0; i < illust.meta_pages.length; i++) {
                        urls.push(illust.meta_pages[i].image_urls.large ? illust.meta_pages[i].image_urls.large : illust.meta_pages[i].image_urls.medium);
                    }
                }
                return [2 /*return*/, urls];
            });
        }); };
        /**
         * Gets new illusts.
         */
        this.new = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!params)
                            params = {};
                        params.content_type = "illust";
                        return [4 /*yield*/, this.api.get("/v1/illust/new", params)];
                    case 1:
                        response = _a.sent();
                        if (params.type)
                            response.illusts = response.illusts.filter(function (i) { return i.type === params.type; });
                        response.illusts.forEach(function (i) { return i.url = "https://www.pixiv.netartworks/".concat(i.id); });
                        this.nextURL = response.next_url;
                        return [2 /*return*/, response.illusts];
                }
            });
        }); };
        /**
         * Gets illusts from users you follow.
         */
        this.follow = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!params.restrict)
                            params.restrict = "all";
                        return [4 /*yield*/, this.api.get("/v2/illust/follow", params)];
                    case 1:
                        response = _a.sent();
                        if (params.type)
                            response.illusts = response.illusts.filter(function (i) { return i.type === params.type; });
                        response.illusts.forEach(function (i) { return i.url = "https://www.pixiv.netartworks/".concat(i.id); });
                        this.nextURL = response.next_url;
                        return [2 /*return*/, response.illusts];
                }
            });
        }); };
        /**
         * Comments from V3 API
         */
        this.comments = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v3/illust/comments", params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * Gets recommended illusts.
         */
        this.recommended = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v1/illust/recommended", params)];
                    case 1:
                        response = _a.sent();
                        if (params.type)
                            response.illusts = response.illusts.filter(function (i) { return i.type === params.type; });
                        response.illusts.forEach(function (i) { return i.url = "https://www.pixiv.netartworks/".concat(i.id); });
                        this.nextURL = response.next_url;
                        return [2 /*return*/, response.illusts];
                }
            });
        }); };
        /**
         * Gets illusts from the ranking. Defaults to daily ranking
         */
        this.ranking = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!params)
                            params = {};
                        if (!params.mode)
                            params.mode = "day";
                        return [4 /*yield*/, this.api.get("/v1/illust/ranking", params)];
                    case 1:
                        response = _a.sent();
                        if (params.type)
                            response.illusts = response.illusts.filter(function (i) { return i.type === params.type; });
                        response.illusts.forEach(function (i) { return i.url = "https://www.pixiv.netartworks/".concat(i.id); });
                        this.nextURL = response.next_url;
                        return [2 /*return*/, response.illusts];
                }
            });
        }); };
        /**
         * Searches illusts in the popular previews.
         */
        this.popularPreview = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v1/search/popular-preview/illust", params)];
                    case 1:
                        response = _a.sent();
                        if (params.type)
                            response.illusts = response.illusts.filter(function (i) { return i.type === params.type; });
                        response.illusts.forEach(function (i) { return i.url = "https://www.pixiv.netartworks/".concat(i.id); });
                        this.nextURL = response.next_url;
                        return [2 /*return*/, response.illusts];
                }
            });
        }); };
        /**
         * Gets trending tags.
         */
        this.trendingTags = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v1/trending-tags/illust", params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * Gets the details for a bookmark.
         */
        this.bookmarkDetail = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v2/illust/bookmark/detail", params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * Gets the tags for a bookmark.
         */
        this.bookmarkTags = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!params)
                            params = {};
                        if (!params.restrict)
                            params.restrict = "public";
                        return [4 /*yield*/, this.api.get("/v1/user/bookmark-tags/illust", params)];
                    case 1:
                        response = _a.sent();
                        this.nextURL = response.next_url;
                        return [2 /*return*/, response.bookmark_tags];
                }
            });
        }); };
        /**
         * Gets the bookmark ranges.
         */
        this.bookmarkRanges = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v1/search/bookmark-ranges/illust", params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
    }
    return Illust;
}());
exports.Illust = Illust;

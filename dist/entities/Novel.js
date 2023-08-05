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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
exports.Novel = void 0;
var index_1 = require("./index");
var Novel = /** @class */ (function () {
    function Novel(api) {
        var _this = this;
        this.api = api;
        this.nextURL = null;
        this.search = new index_1.Search(this.api);
        /**
         * Gets a novel by URL or ID.
         */
        this.get = function (novelResolvable, params) { return __awaiter(_this, void 0, void 0, function () {
            var novelId, illusts, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        novelId = String(novelResolvable).match(/\d{8,}/) ? String(novelResolvable).match(/\d{8,}/)[0] : null;
                        if (!!novelId) return [3 /*break*/, 2];
                        if (!params)
                            params = {};
                        params.word = String(novelResolvable);
                        return [4 /*yield*/, this.search.illusts(params)];
                    case 1:
                        illusts = _a.sent();
                        Array.prototype.sort.call(illusts, (function (a, b) { return (a.total_bookmarks - b.total_bookmarks) * -1; }));
                        illusts = illusts.filter(function (i) {
                            return (i.type === "novel") ? true : false;
                        });
                        novelId = String(illusts[0].id);
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.detail({ novel_id: Number(novelId) })];
                    case 3:
                        response = _a.sent();
                        response.url = "https://www.pixiv.net/novel/show.php?id=".concat(response.id);
                        response.type = "novel";
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * Gets the details for a novel.
         */
        this.detail = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v2/novel/detail", params)];
                    case 1:
                        response = _a.sent();
                        response.novel.url = "https://www.pixiv.net/novel/show.php?id=".concat(response.novel.id);
                        response.novel.type = "novel";
                        return [2 /*return*/, response.novel];
                }
            });
        }); };
        /**
         * Gets the text for a novel.
         */
        this.text = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v1/novel/text", params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * Gets new novels.
         */
        this.new = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v1/novel/new", params)];
                    case 1:
                        response = _a.sent();
                        response.novels.forEach(function (i) { return i.url = "https://www.pixiv.net/novel/show.php?id=".concat(i.id); });
                        response.novels.forEach(function (i) { return i.type = "novel"; });
                        this.nextURL = response.next_url;
                        return [2 /*return*/, response.novels];
                }
            });
        }); };
        /**
         * Gets novels from users you follow.
         */
        this.follow = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!params)
                            params = {};
                        if (!params.restrict)
                            params.restrict = "all";
                        return [4 /*yield*/, this.api.get("/v1/novel/follow", params)];
                    case 1:
                        response = _a.sent();
                        response.novels.forEach(function (i) { return i.url = "https://www.pixiv.net/novel/show.php?id=".concat(i.id); });
                        response.novels.forEach(function (i) { return i.type = "novel"; });
                        this.nextURL = response.next_url;
                        return [2 /*return*/, response.novels];
                }
            });
        }); };
        /**
         * Gets recommended novels.
         */
        this.recommended = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v1/novel/recommended", params)];
                    case 1:
                        response = _a.sent();
                        response.novels.forEach(function (i) { return i.url = "https://www.pixiv.net/novel/show.php?id=".concat(i.id); });
                        response.novels.forEach(function (i) { return i.type = "novel"; });
                        this.nextURL = response.next_url;
                        return [2 /*return*/, response.novels];
                }
            });
        }); };
        /**
         * Fetches novels from the popular preview.
         */
        this.popularPreview = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v1/search/popular-preview/novel", params)];
                    case 1:
                        response = _a.sent();
                        response.novels.forEach(function (i) { return i.url = "https://www.pixiv.net/novel/show.php?id=".concat(i.id); });
                        response.novels.forEach(function (i) { return i.type = "novel"; });
                        this.nextURL = response.next_url;
                        return [2 /*return*/, response.novels];
                }
            });
        }); };
        /**
         * Gets novel bookmark ranges.
         */
        this.bookmarkRanges = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v1/search/bookmark-ranges/novel", params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * Gets novel trending tags.
         */
        this.trendingTags = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v1/trending-tags/novel", params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * Gets the comments on a novel.
         */
        this.comments = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v1/novel/comments", params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * CommentsV2 replaces parent_comment with has_replies.
         */
        this.commentsV2 = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v2/novel/comments", params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * Gets all the novels in the series.
         */
        this.series = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v1/novel/series", params)];
                    case 1:
                        response = _a.sent();
                        response.novels.forEach(function (i) { return i.url = "https://www.pixiv.net/novel/show.php?id=".concat(i.id); });
                        response.novels.forEach(function (i) { return i.type = "novel"; });
                        this.nextURL = response.next_url;
                        return [2 /*return*/, response.novels];
                }
            });
        }); };
        /**
         * Gets novel rankings. Defaults to daily rankings.
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
                        return [4 /*yield*/, this.api.get("/v1/novel/ranking", params)];
                    case 1:
                        response = _a.sent();
                        response.novels.forEach(function (i) { return i.url = "https://www.pixiv.net/novel/show.php?id=".concat(i.id); });
                        response.novels.forEach(function (i) { return i.type = "novel"; });
                        this.nextURL = response.next_url;
                        return [2 /*return*/, response.novels];
                }
            });
        }); };
        /**
         * Gets the details of a novel bookmark.
         */
        this.bookmarkDetail = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get("/v2/novel/bookmark/detail", params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
    }
    return Novel;
}());
exports.Novel = Novel;

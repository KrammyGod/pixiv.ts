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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
var axios_1 = require("axios");
var fs = require("fs");
var image_size_1 = require("image-size");
var path = require("path");
var unzip = require("unzipper");
var child_process = require("child_process");
var Translate_1 = require("../Translate");
var index_1 = require("./index");
var Util = /** @class */ (function () {
    function Util(api) {
        var _this = this;
        this.api = api;
        this.illust = new index_1.Illust(this.api);
        this.novel = new index_1.Novel(this.api);
        this.search = new index_1.Search(this.api);
        this.ugoira = new index_1.Ugoira(this.api);
        /**
         * Parsed a pixiv id from the url.
         */
        this.parseID = function (input) {
            var parsed = input.match(/\d{5,}/);
            return parsed ? Number(parsed) : null;
        };
        /**
         * Translates a tag to Japanese.
         *
         */
        this.translateTag = function (tag) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Translate_1.default.translateTag(tag)];
            });
        }); };
        /**
         * Translates a title to English.
         */
        this.translateTitle = function (title) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Translate_1.default.translateTitle(title)];
            });
        }); };
        /**
         * Utility for awaiting a setTimeout
         */
        this.timeout = function (ms) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
            });
        }); };
        /**
         * Utility for awaiting a stream.Writable
         */
        this.awaitStream = function (writeStream) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        writeStream.on("finish", resolve);
                        writeStream.on("error", reject);
                    })];
            });
        }); };
        /**
         * Makes subsequent api calls to get more search results, then returns them.
         */
        this.multiCall = function (response, limit) { return __awaiter(_this, void 0, void 0, function () {
            var responseArray, counter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        responseArray = [];
                        counter = limit || Infinity;
                        if (!response.next_url)
                            return [2 /*return*/, Promise.reject("You can only use this method on search responses.")];
                        _a.label = 1;
                    case 1:
                        if (!((response.next_url !== null) && (counter > 0))) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.api.next(response.next_url)];
                    case 2:
                        response = _a.sent();
                        if (response.hasOwnProperty("illusts")) {
                            responseArray.push(response.illusts);
                        }
                        else if (response.hasOwnProperty("user_previews")) {
                            responseArray.push(response.user_previews);
                        }
                        else if (response.hasOwnProperty("comments")) {
                            responseArray.push(response.comments);
                        }
                        else if (response.hasOwnProperty("novels")) {
                            responseArray.push(response.novels);
                        }
                        else if (response.hasOwnProperty("bookmark_tags")) {
                            responseArray.push(response.bookmark_tags);
                        }
                        return [4 /*yield*/, this.timeout(500)];
                    case 3:
                        _a.sent();
                        counter--;
                        return [3 /*break*/, 1];
                    case 4:
                        if (response.hasOwnProperty("illusts")) {
                            responseArray = __spreadArray(__spreadArray([], __read(response.illusts), false), [responseArray], false);
                        }
                        else if (response.hasOwnProperty("user_previews")) {
                            responseArray = __spreadArray(__spreadArray([], __read(response.user_previews), false), [responseArray], false);
                        }
                        else if (response.hasOwnProperty("comments")) {
                            responseArray = __spreadArray(__spreadArray([], __read(response.comments), false), [responseArray], false);
                        }
                        else if (response.hasOwnProperty("novels")) {
                            responseArray = __spreadArray(__spreadArray([], __read(response.novels), false), [responseArray], false);
                        }
                        else if (response.hasOwnProperty("bookmark_tags")) {
                            responseArray = __spreadArray(__spreadArray([], __read(response.bookmark_tags), false), [responseArray], false);
                        }
                        return [2 /*return*/, responseArray.flat(Infinity)];
                }
            });
        }); };
        this.bookmarkMultiCall = function (response, bookmarks, limit) { return __awaiter(_this, void 0, void 0, function () {
            var responseArray, thresholdReached, lastBookmarks, amount;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        responseArray = [];
                        if (!response.next_url)
                            return [2 /*return*/, Promise.reject("You can only use this method on search responses.")];
                        thresholdReached = false;
                        _b.label = 1;
                    case 1:
                        if (!((response.next_url !== null) && !thresholdReached)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.api.next(response.next_url)];
                    case 2:
                        response = _b.sent();
                        if (response.hasOwnProperty("illusts")) {
                            responseArray.push(response.illusts);
                        }
                        else if (response.hasOwnProperty("user_previews")) {
                            responseArray.push(response.user_previews);
                        }
                        else if (response.hasOwnProperty("comments")) {
                            responseArray.push(response.comments);
                        }
                        else if (response.hasOwnProperty("novels")) {
                            responseArray.push(response.novels);
                        }
                        else if (response.hasOwnProperty("bookmark_tags")) {
                            responseArray.push(response.bookmark_tags);
                        }
                        return [4 /*yield*/, this.timeout(500)];
                    case 3:
                        _b.sent();
                        lastBookmarks = (_a = response.illusts[response.illusts.length - 1]) === null || _a === void 0 ? void 0 : _a.total_bookmarks;
                        if (lastBookmarks === undefined)
                            return [3 /*break*/, 1];
                        if (!thresholdReached)
                            thresholdReached = lastBookmarks <= bookmarks;
                        amount = responseArray.reduce(function (p, c) { return p + c.length; }, 0);
                        if (amount >= limit)
                            thresholdReached = true;
                        return [3 /*break*/, 1];
                    case 4:
                        if (response.hasOwnProperty("illusts")) {
                            responseArray = __spreadArray(__spreadArray([], __read(response.illusts), false), [responseArray], false);
                        }
                        else if (response.hasOwnProperty("user_previews")) {
                            responseArray = __spreadArray(__spreadArray([], __read(response.user_previews), false), [responseArray], false);
                        }
                        else if (response.hasOwnProperty("comments")) {
                            responseArray = __spreadArray(__spreadArray([], __read(response.comments), false), [responseArray], false);
                        }
                        else if (response.hasOwnProperty("novels")) {
                            responseArray = __spreadArray(__spreadArray([], __read(response.novels), false), [responseArray], false);
                        }
                        else if (response.hasOwnProperty("bookmark_tags")) {
                            responseArray = __spreadArray(__spreadArray([], __read(response.bookmark_tags), false), [responseArray], false);
                        }
                        return [2 /*return*/, responseArray.flat(Infinity)];
                }
            });
        }); };
        /**
         * Utility for sorting by bookmarks.
         */
        this.sort = function (illusts) {
            Array.prototype.sort.call(illusts, (function (a, b) { return (a.total_bookmarks - b.total_bookmarks) * -1; }));
            return illusts;
        };
        this.download = function (url_1, folder_1, nameExt_1) {
            var args_1 = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args_1[_i - 3] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([url_1, folder_1, nameExt_1], __read(args_1), false), void 0, function (url, folder, nameExt, fileExt) {
                var basename, dest, writeStream;
                if (fileExt === void 0) { fileExt = "png"; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            basename = path.basename(folder);
                            if (!path.isAbsolute(folder)) {
                                if (__dirname.includes("node_modules")) {
                                    folder = path.join(__dirname, "../../../../", folder);
                                }
                                else {
                                    folder = path.join(__dirname, "../../", folder);
                                }
                            }
                            if (basename.includes("."))
                                folder = folder.replace(basename, "");
                            if (!fs.existsSync(folder))
                                fs.mkdirSync(folder, { recursive: true });
                            dest = basename.includes(".") ? "".concat(folder).concat(basename) : path.join(folder, "".concat(url.match(/\d{6,}/) ? url.match(/\d{6,}/)[0] : "illust").concat(nameExt !== null && nameExt !== void 0 ? nameExt : "", ".").concat(fileExt));
                            writeStream = fs.createWriteStream(dest);
                            return [4 /*yield*/, axios_1.default.get(url, { responseType: "stream", headers: { Referer: "https://www.pixiv.net/" } })
                                    .then(function (r) { return r.data.pipe(writeStream); })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.awaitStream(writeStream)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, dest];
                    }
                });
            });
        };
        this.downloadData = function (data_1, folder_1, id_1) {
            var args_1 = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args_1[_i - 3] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([data_1, folder_1, id_1], __read(args_1), false), void 0, function (data, folder, id, fileExt) {
                var basename, dest;
                if (fileExt === void 0) { fileExt = "txt"; }
                return __generator(this, function (_a) {
                    basename = path.basename(folder);
                    if (!path.isAbsolute(folder)) {
                        if (__dirname.includes("node_modules")) {
                            folder = path.join(__dirname, "../../../../", folder);
                        }
                        else {
                            folder = path.join(__dirname, "../../", folder);
                        }
                    }
                    if (basename.includes("."))
                        folder = folder.replace(basename, "");
                    if (!fs.existsSync(folder))
                        fs.mkdirSync(folder, { recursive: true });
                    dest = basename.includes(".") ? "".concat(folder).concat(basename) : "".concat(path.join(folder, id ? "".concat(id) : "data"), ".").concat(fileExt);
                    fs.writeFileSync(dest, data);
                    return [2 /*return*/, dest];
                });
            });
        };
        /**
         * Downloads an illust locally.
         */
        this.downloadIllust = function (illustResolvable, folder, size) { return __awaiter(_this, void 0, void 0, function () {
            var url, illust, i, _a, _b, image, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!size)
                            size = "medium";
                        illust = illustResolvable;
                        if (!illustResolvable.hasOwnProperty("image_urls")) return [3 /*break*/, 10];
                        if (!(illust.meta_pages.length === 0)) return [3 /*break*/, 1];
                        // Single Image
                        if (size == "original") {
                            url = illust.meta_single_page.original_image_url;
                        }
                        else {
                            url = illust.image_urls[size];
                        }
                        return [2 /*return*/, this.download(url, folder)];
                    case 1:
                        i = 0;
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 7, 8, 9]);
                        _a = __values(illust.meta_pages), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 6];
                        image = _b.value;
                        url = image.image_urls[size];
                        return [4 /*yield*/, this.download(url, folder, "_p".concat(i++))];
                    case 4:
                        _d.sent();
                        _d.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [3 /*break*/, 13];
                    case 10:
                        url = illustResolvable;
                        if (!url.startsWith("https://i.pximg.net/")) return [3 /*break*/, 11];
                        return [2 /*return*/, this.download(url, folder)];
                    case 11: return [4 /*yield*/, this.illust.get(url)];
                    case 12:
                        illust = _d.sent();
                        return [2 /*return*/, this.downloadIllust(illust, folder, size)];
                    case 13: return [2 /*return*/];
                }
            });
        }); };
        /**
         * Downloads an author"s profile picture locally.
         */
        this.downloadProfilePicture = function (illustResolvable, folder, size) { return __awaiter(_this, void 0, void 0, function () {
            var basename, url, username, illust, dest, writeStream;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        basename = path.basename(folder);
                        if (!size)
                            size = "medium";
                        if (illustResolvable.hasOwnProperty("image_urls")) {
                            url = illustResolvable.user.profile_image_urls[size];
                            username = illustResolvable.user.name;
                        }
                        else {
                            url = illustResolvable;
                            username = illustResolvable.match(/\d{6,}/) ? illustResolvable.match(/\d{6,}/)[0] : "profile";
                        }
                        if (!!url.startsWith("https://i.pximg.net/")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.illust.get(url)];
                    case 1:
                        illust = _a.sent();
                        url = illust.user.profile_image_urls[size] ?
                            illust.user.profile_image_urls[size] : illust.user.profile_image_urls.medium;
                        username = illust.user.name;
                        _a.label = 2;
                    case 2:
                        if (!path.isAbsolute(folder)) {
                            if (__dirname.includes("node_modules")) {
                                folder = path.join(__dirname, "../../../../", folder);
                            }
                            else {
                                folder = path.join(__dirname, "../../", folder);
                            }
                        }
                        if (!fs.existsSync(folder))
                            fs.mkdirSync(folder, { recursive: true });
                        dest = basename.includes(".") ? "".concat(folder).concat(basename) : path.join(folder, "".concat(username, ".png"));
                        writeStream = fs.createWriteStream(dest);
                        return [4 /*yield*/, axios_1.default.get(url, { responseType: "stream", headers: { Referer: "https://www.pixiv.net/" } })
                                .then(function (r) { return r.data.pipe(writeStream); })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.awaitStream(writeStream)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, dest];
                }
            });
        }); };
        /**
         * Downloads a novel locally.
         */
        this.downloadNovel = function (novelResolvable, folder) { return __awaiter(_this, void 0, void 0, function () {
            var novel, data, dest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        novel = novelResolvable;
                        if (!novelResolvable.hasOwnProperty("image_urls")) return [3 /*break*/, 1];
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.novel.get(novelResolvable)];
                    case 2:
                        novel = _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.novel.text({ novel_id: novel.id })];
                    case 4:
                        data = _a.sent();
                        return [4 /*yield*/, this.downloadData(data.content, folder, novel.id)];
                    case 5:
                        dest = _a.sent();
                        return [4 /*yield*/, this.download(data.coverUrl, folder)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, dest];
                }
            });
        }); };
        /**
         * Mass downloads illusts from a search result. You can map the results into different folders by tag
         * with the folderMap parameter.
         */
        this.downloadIllusts = function (query, dest, size, folderMap, r18) { return __awaiter(_this, void 0, void 0, function () {
            var illusts, promiseArray, i, illust, k, j, tag, promise_1, promise, resolved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!size)
                            size = "medium";
                        if (!r18)
                            r18 = false;
                        return [4 /*yield*/, this.search.illusts({ word: query, r18: r18 })];
                    case 1:
                        illusts = _a.sent();
                        promiseArray = [];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < illusts.length)) return [3 /*break*/, 10];
                        illust = illusts[i];
                        if (!r18) {
                            if (illust.x_restrict !== 0)
                                return [3 /*break*/, 9];
                        }
                        if (!folderMap) return [3 /*break*/, 8];
                        k = 0;
                        _a.label = 3;
                    case 3:
                        if (!(k < illust.tags.length)) return [3 /*break*/, 8];
                        j = 0;
                        _a.label = 4;
                    case 4:
                        if (!(j < folderMap.length)) return [3 /*break*/, 7];
                        return [4 /*yield*/, Translate_1.default.translateTag(folderMap[j].tag)];
                    case 5:
                        tag = _a.sent();
                        if (tag.includes(illust.tags[k].name)) {
                            promise_1 = this.downloadIllust(illust, path.join(dest, folderMap[j].folder), size);
                            promiseArray.push(promise_1);
                            return [3 /*break*/, 9];
                        }
                        _a.label = 6;
                    case 6:
                        j++;
                        return [3 /*break*/, 4];
                    case 7:
                        k++;
                        return [3 /*break*/, 3];
                    case 8:
                        promise = this.downloadIllust(illust, dest, size);
                        promiseArray.push(promise);
                        _a.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 2];
                    case 10: return [4 /*yield*/, Promise.all(promiseArray)];
                    case 11:
                        resolved = _a.sent();
                        return [2 /*return*/, resolved];
                }
            });
        }); };
        /**
         * Encodes a new gif from an array of file paths.
         */
        this.encodeGif = function (files, delays, dest) { return __awaiter(_this, void 0, void 0, function () {
            var GifEncoder, getPixels;
            return __generator(this, function (_a) {
                GifEncoder = require("gif-encoder");
                getPixels = require("get-pixels");
                return [2 /*return*/, new Promise(function (resolve) {
                        var dimensions = (0, image_size_1.imageSize)(files[0]);
                        var gif = new GifEncoder(dimensions.width, dimensions.height);
                        var pathIndex = files[0].search(/\d{5,}/);
                        var pathDir = files[0].slice(0, pathIndex);
                        if (!dest)
                            dest = "".concat(pathDir).concat(files[0].match(/\d{5,}/)[0], ".gif");
                        var file = fs.createWriteStream(dest);
                        gif.pipe(file);
                        gif.setQuality(10);
                        gif.setRepeat(0);
                        gif.writeHeader();
                        var counter = 0;
                        var addToGif = function (frames) {
                            getPixels(frames[counter], function (err, pixels) {
                                delays ? gif.setDelay(delays[counter]) : gif.setDelay(0);
                                gif.addFrame(pixels.data);
                                gif.read();
                                if (counter >= frames.length - 1) {
                                    gif.finish();
                                }
                                else {
                                    counter++;
                                    addToGif(files);
                                }
                            });
                        };
                        addToGif(files);
                        gif.on("end", function () {
                            resolve(dest);
                        });
                    })];
            });
        }); };
        /**
         * Encodes a webp from an array of file paths.
         */
        this.encodeAnimatedWebp = function (files, delays, dest, webpPath) { return __awaiter(_this, void 0, void 0, function () {
            var pathIndex, pathDir, frames, absolute, program, command, child, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathIndex = files[0].search(/\d{5,}/);
                        pathDir = files[0].slice(0, pathIndex);
                        if (!dest)
                            dest = "".concat(pathDir).concat(files[0].match(/\d{5,}/)[0], ".webp");
                        frames = files.map(function (f, i) { return "-d ".concat(delays[i], " \"").concat(f, "\""); }).join(" ");
                        absolute = webpPath ? path.normalize(webpPath).replace(/\\/g, "/") : path.join(__dirname, "../../webp");
                        program = "cd \"".concat(absolute, "\" && img2webp.exe");
                        if (process.platform === "darwin")
                            program = "cd \"".concat(absolute, "\" && ./img2webp.app");
                        command = "".concat(program, " -loop \"0\" ").concat(frames, " -o \"").concat(dest, "\"");
                        child = child_process.exec(command);
                        error = "";
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                child.stderr.on("data", function (chunk) { return error += chunk; });
                                child.on("close", function () { return resolve(); });
                            })];
                    case 1:
                        _a.sent();
                        console.log(error);
                        return [2 /*return*/, dest];
                }
            });
        }); };
        /**
         * Gives permission to webp binaries.
         */
        this.chmod777 = function (webpPath) {
            if (process.platform === "win32")
                return;
            var webp = webpPath ? path.normalize(webpPath).replace(/\\/g, "/") : path.join(__dirname, "../../webp");
            fs.chmodSync(webp, "777");
        };
        /**
         * Downloads and extracts all of the individual images in a ugoira.
         */
        this.downloadZip = function (url, dest) { return __awaiter(_this, void 0, void 0, function () {
            var writeStream;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!url.startsWith("https://i.pximg.net/")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.ugoira.get(url).then(function (u) { return u.ugoira_metadata.zip_urls.medium; })];
                    case 1:
                        url = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!path.isAbsolute(dest)) {
                            if (__dirname.includes("node_modules")) {
                                dest = path.join(__dirname, "../../../../", dest, url.match(/\d{5,}/)[0]);
                            }
                            else {
                                dest = path.join(__dirname, "../../", dest, url.match(/\d{5,}/)[0]);
                            }
                        }
                        if (!fs.existsSync(dest))
                            fs.mkdirSync(dest, { recursive: true });
                        return [4 /*yield*/, axios_1.default.get(url, { responseType: "stream", headers: { Referer: "https://www.pixiv.net/" } })
                                .then(function (r) { return r.data.pipe(unzip.Extract({ path: dest })); })];
                    case 3:
                        writeStream = _a.sent();
                        return [4 /*yield*/, this.awaitStream(writeStream)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, dest];
                }
            });
        }); };
        /**
         * Downloads the zip archive of a ugoira and converts it to a gif.
         */
        this.downloadUgoira = function (illustResolvable, dest, options) { return __awaiter(_this, void 0, void 0, function () {
            var url, id, metadata, zipUrl, zipDest, destPath, files, constraint, step, fileArray, delayArray, i, destination;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!options)
                            options = { speed: 1, reverse: false, webp: false, webpPath: null };
                        if (illustResolvable.hasOwnProperty("id")) {
                            url = String(illustResolvable.id);
                        }
                        else {
                            url = illustResolvable;
                        }
                        id = this.parseID(url);
                        return [4 /*yield*/, this.ugoira.get(url).then(function (r) { return r.ugoira_metadata; })];
                    case 1:
                        metadata = _a.sent();
                        zipUrl = metadata.zip_urls.medium;
                        zipDest = path.extname(dest) ? path.dirname(dest) + "/".concat(id) : dest + "/".concat(id);
                        return [4 /*yield*/, this.downloadZip(zipUrl, zipDest).then(function (p) { return p.replace("\\", "/"); })];
                    case 2:
                        destPath = _a.sent();
                        files = fs.readdirSync(destPath).filter(function (f) { return f.endsWith(".jpg") || f.endsWith(".png"); });
                        constraint = (options === null || options === void 0 ? void 0 : options.speed) > 1 ? files.length / options.speed : files.length;
                        step = Math.ceil(files.length / constraint);
                        fileArray = [];
                        delayArray = [];
                        for (i = 0; i < files.length; i += step) {
                            if (files[i].slice(-5) === ".webp")
                                continue;
                            if (!metadata.frames[i])
                                break;
                            fileArray.push("".concat(destPath, "/").concat(files[i]));
                            delayArray.push(metadata.frames[i].delay);
                        }
                        if ((options === null || options === void 0 ? void 0 : options.speed) < 1)
                            delayArray = delayArray.map(function (n) { return n / options.speed; });
                        if (options.reverse) {
                            fileArray = fileArray.reverse();
                            delayArray = delayArray.reverse();
                        }
                        destination = "";
                        if (!options.webp) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.encodeAnimatedWebp(fileArray, delayArray, dest, options.webpPath)];
                    case 3:
                        destination = _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.encodeGif(fileArray, delayArray, dest)];
                    case 5:
                        destination = _a.sent();
                        _a.label = 6;
                    case 6:
                        try {
                            this.removeLocalDirectory(zipDest);
                        }
                        catch (_b) { }
                        return [2 /*return*/, destination];
                }
            });
        }); };
        /**
         * Gets a viewable link for an illust, if it exists.
         */
        this.viewLink = function (illustResolvable) { return __awaiter(_this, void 0, void 0, function () {
            var id, html, match, _a;
            var _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (illustResolvable.hasOwnProperty("id")) {
                            id = String(illustResolvable.id);
                        }
                        else {
                            id = (_c = (_b = String(illustResolvable).match(/\d{5,}/)) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.trim();
                        }
                        return [4 /*yield*/, axios_1.default.get("https://www.pixiv.net/en/artworks/".concat(id), { headers: { referer: "https://www.pixiv.net/" } }).then(function (r) { return r.data; })];
                    case 1:
                        html = _f.sent();
                        match = (_e = (_d = html.match(/(?<="regular":")(.*?)(?=")/gm)) === null || _d === void 0 ? void 0 : _d.map(function (m) { return m; })) === null || _e === void 0 ? void 0 : _e[0];
                        if (!(match && (match.match(/i-cf/) || match.match(/tc-px/)))) return [3 /*break*/, 6];
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, axios_1.default.get(match, { headers: { referer: "https://www.pixiv.net/" } })];
                    case 3:
                        _f.sent();
                        return [2 /*return*/, match];
                    case 4:
                        _a = _f.sent();
                        return [2 /*return*/, null];
                    case 5: return [3 /*break*/, 7];
                    case 6: return [2 /*return*/, null];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.removeLocalDirectory = function (dir) {
            if (!fs.existsSync(dir))
                return;
            fs.readdirSync(dir).forEach(function (file) {
                var current = path.join(dir, file);
                if (fs.lstatSync(current).isDirectory()) {
                    _this.removeLocalDirectory(current);
                }
                else {
                    fs.unlinkSync(current);
                }
            });
            try {
                fs.rmdirSync(dir);
            }
            catch (error) {
                console.log(error);
            }
        };
    }
    return Util;
}());
exports.Util = Util;

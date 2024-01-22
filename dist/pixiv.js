"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
var axios_1 = require("axios");
var crypto = require("crypto");
var querystring_1 = require("querystring");
var API_1 = require("./API");
var index_1 = require("./entities/index");
var oauthURL = "https://oauth.secure.pixiv.net/auth/token";
var clientId = "MOBrBDS8blbauoSck0ZfDbtuzpyT";
var clientSecret = "lsACyCD94FhDUtGTXi3QzcFE2uU1hqtDaKeqrdwj";
var hashSecret = "28c1fdd170a5204386cb1313c7077b34f83e4aaf4aa829ce78c231e05b0bae2c";
var clientTime = new Date().toISOString().slice(0, -5) + "+00:00";
var clientHash = crypto.createHash("md5").update(String(clientTime + hashSecret)).digest("hex");
var data = {
    client_id: clientId,
    client_secret: clientSecret,
    get_secure_url: true
};
var headers = {
    "app-os": "ios",
    "app-os-version": "13.2.0",
    "app-version": "7.7.5",
    "user-agent": "PixivIOSApp/7.7.5 (iOS 13.2.0; iPhone XR)",
    "host": "oauth.secure.pixiv.net",
    "accept-language": "en_US",
    "x-client-time": clientTime,
    "x-client-hash": clientHash,
    "content-type": "application/x-www-form-urlencoded",
    "accept-encoding": "gzip"
};
/**
 * The main class for interacting with the Pixiv API.
 */
var Pixiv = /** @class */ (function () {
    function Pixiv(loginTime, expirationTime) {
        var _this = this;
        this.loginTime = loginTime;
        this.expirationTime = expirationTime;
        this.api = new API_1.default(data, headers, _a.refreshToken, _a.accessToken, this.loginTime, this.expirationTime);
        this.illust = new index_1.Illust(this.api);
        this.manga = new index_1.Manga(this.api);
        this.novel = new index_1.Novel(this.api);
        this.search = new index_1.Search(this.api);
        this.user = new index_1.User(this.api);
        this.ugoira = new index_1.Ugoira(this.api);
        this.util = new index_1.Util(this.api);
        this.spotlight = new index_1.Spotlight(this.api);
        this.web = new index_1.Web(this.api);
        /**
         * Refreshes your refresh token and access token if they have expired.
         */
        this.refreshToken = function (refreshToken) { return __awaiter(_this, void 0, void 0, function () {
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!refreshToken)
                            refreshToken = _a.refreshToken;
                        if (!refreshToken)
                            return [2 /*return*/, Promise.reject("You must login with a username and password first.")];
                        _b = _a;
                        return [4 /*yield*/, this.api.refreshAccessToken(refreshToken)];
                    case 1:
                        _b.refreshToken = _c.sent();
                        this.api = new API_1.default(data, headers, _a.refreshToken, _a.accessToken, this.loginTime, this.expirationTime);
                        this.illust = new index_1.Illust(this.api);
                        this.illust = new index_1.Illust(this.api);
                        this.manga = new index_1.Manga(this.api);
                        this.novel = new index_1.Novel(this.api);
                        this.search = new index_1.Search(this.api);
                        this.user = new index_1.User(this.api);
                        this.ugoira = new index_1.Ugoira(this.api);
                        this.util = new index_1.Util(this.api);
                        this.spotlight = new index_1.Spotlight(this.api);
                        this.web = new index_1.Web(this.api);
                        return [2 /*return*/, _a.refreshToken];
                }
            });
        }); };
    }
    var _a;
    _a = Pixiv;
    /**
     * Logs into Pixiv with your username and password, or refresh token if it is available.
     */
    Pixiv.login = function (username, password) { return __awaiter(void 0, void 0, void 0, function () {
        var missing, result;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!username || !password) {
                        missing = username ? "password" : (password ? "username" : "username and password");
                        return [2 /*return*/, Promise.reject("You must provide a ".concat(missing, " in order to login!"))];
                    }
                    if (!_a.refreshToken) {
                        data.username = username;
                        data.password = password;
                        data.grant_type = "password";
                    }
                    else {
                        data.refresh_token = _a.refreshToken;
                        data.grant_type = "refresh_token";
                    }
                    return [4 /*yield*/, axios_1.default.post(oauthURL, (0, querystring_1.stringify)(data), { headers: headers }).then(function (r) { return r.data; })];
                case 1:
                    result = _b.sent();
                    _a.accessToken = result.response.access_token;
                    _a.refreshToken = result.response.refresh_token;
                    headers.authorization = "Bearer ".concat(_a.accessToken);
                    return [2 /*return*/, new _a(Date.now(), result.response.expires_in)];
            }
        });
    }); };
    /**
     * Logs in with username and password only.
     */
    Pixiv.passwordLogin = function (username, password) { return __awaiter(void 0, void 0, void 0, function () {
        var missing, result;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!username || !password) {
                        missing = username ? "password" : (password ? "username" : "username and password");
                        return [2 /*return*/, Promise.reject("You must provide a ".concat(missing, " in order to login!"))];
                    }
                    data.username = username;
                    data.password = password;
                    data.grant_type = "password";
                    return [4 /*yield*/, axios_1.default.post(oauthURL, (0, querystring_1.stringify)(data), { headers: headers }).then(function (r) { return r.data; })];
                case 1:
                    result = _b.sent();
                    _a.accessToken = result.response.access_token;
                    _a.refreshToken = result.response.refresh_token;
                    headers.authorization = "Bearer ".concat(_a.accessToken);
                    return [2 /*return*/, new _a(Date.now(), result.response.expires_in)];
            }
        });
    }); };
    /**
     * Logs in with refresh token only.
     */
    Pixiv.refreshLogin = function (refreshToken) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    data.refresh_token = refreshToken;
                    data.grant_type = "refresh_token";
                    return [4 /*yield*/, axios_1.default.post(oauthURL, (0, querystring_1.stringify)(data), { headers: headers }).then(function (r) { return r.data; })];
                case 1:
                    result = _b.sent();
                    _a.accessToken = result.response.access_token;
                    _a.refreshToken = result.response.refresh_token;
                    headers.authorization = "Bearer ".concat(_a.accessToken);
                    return [2 /*return*/, new _a(Date.now(), result.response.expires_in)];
            }
        });
    }); };
    return Pixiv;
}());
exports.default = Pixiv;
module.exports.default = Pixiv;
__exportStar(require("./entities/index"), exports);
__exportStar(require("./types/index"), exports);

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
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var querystring_1 = require("querystring");
var url_1 = require("url");
var oauthURL = "https://oauth.secure.pixiv.net/auth/token";
var appURL = "https://app-api.pixiv.net/";
var webURL = "https://www.pixiv.net/";
var publicURL = "https://public-api.secure.pixiv.net/";
var API = /** @class */ (function () {
    function API(data, authHeaders, refreshToken, accessToken, loginTime, expirationTime) {
        var _this = this;
        this.data = data;
        this.authHeaders = authHeaders;
        this.refreshToken = refreshToken;
        this.accessToken = accessToken;
        this.loginTime = loginTime;
        this.expirationTime = expirationTime;
        this.headers = { "user-agent": "PixivIOSApp/7.7.5 (iOS 13.2.0; iPhone XR)", "referer": "https://www.pixiv.net/", "accept-language": "English" };
        /**
         * Gets a new access token if the refresh token expires.
         */
        this.refreshAccessToken = function (refreshToken) { return __awaiter(_this, void 0, void 0, function () {
            var expired, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (refreshToken)
                            this.refreshToken = refreshToken;
                        expired = (Date.now() - this.loginTime) > (this.expirationTime * 900);
                        if (!expired) return [3 /*break*/, 2];
                        this.data.grant_type = "refresh_token";
                        return [4 /*yield*/, axios_1.default.post(oauthURL, (0, querystring_1.stringify)(this.data), { headers: this.headers }).then(function (r) { return r.data; })];
                    case 1:
                        result = _a.sent();
                        this.accessToken = result.response.access_token;
                        this.refreshToken = result.response.refresh_token;
                        this.authHeaders.authorization = "Bearer ".concat(this.accessToken);
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.refreshToken];
                }
            });
        }); };
        /**
         * Fetches an endpoint from the API and returns the response.
         */
        this.get = function (endpoint, params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.refreshAccessToken()];
                    case 1:
                        _a.sent();
                        if (!params)
                            params = {};
                        params.filter = "for_ios";
                        params.access_token = this.accessToken;
                        if (endpoint.startsWith("/"))
                            endpoint = endpoint.slice(1);
                        endpoint = appURL + endpoint;
                        return [4 /*yield*/, axios_1.default.get(endpoint, { json: true, form: true, headers: this.headers, params: params }).then(function (r) { return r.data; })];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * Fetches from web url and returns the response.
         */
        this.getWeb = function (endpoint, params) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (endpoint.startsWith("/"))
                            endpoint = endpoint.slice(1);
                        endpoint = webURL + endpoint;
                        return [4 /*yield*/, axios_1.default.get(endpoint, { json: true, form: true, headers: this.headers, params: params }).then(function (r) { return r.data; })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * Fetches the url in the nextUrl() property of search responses.
         */
        this.next = function (nextUrl) { return __awaiter(_this, void 0, void 0, function () {
            var _a, baseUrl, params, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.refreshAccessToken()];
                    case 1:
                        _b.sent();
                        _a = this.destructureParams(nextUrl), baseUrl = _a.baseUrl, params = _a.params;
                        params.access_token = this.accessToken;
                        return [4 /*yield*/, axios_1.default.get(baseUrl, { params: params, headers: this.headers }).then(function (r) { return r.data; })];
                    case 2:
                        response = _b.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        /**
         * Destructures a URL to get all of the search parameters and values.
         */
        this.destructureParams = function (nextUrl) {
            var e_1, _a;
            var paramUrl = nextUrl.split("?");
            var baseUrl = paramUrl[0];
            paramUrl.shift();
            var searchParams = new url_1.URLSearchParams(paramUrl.join(""));
            var params = {};
            try {
                for (var searchParams_1 = __values(searchParams), searchParams_1_1 = searchParams_1.next(); !searchParams_1_1.done; searchParams_1_1 = searchParams_1.next()) {
                    var _b = __read(searchParams_1_1.value, 2), key = _b[0], value = _b[1];
                    params[key] = value;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (searchParams_1_1 && !searchParams_1_1.done && (_a = searchParams_1.return)) _a.call(searchParams_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return { baseUrl: baseUrl, params: params };
        };
        /**
         * Fetches any url.
         */
        this.request = function (url, params) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, axios_1.default.get(url, params).then(function (r) { return r.data; })];
            });
        }); };
    }
    return API;
}());
exports.default = API;

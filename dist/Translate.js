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
var bing_translate_api_1 = require("bing-translate-api");
/**
 * Translates search terms to japanese
 */
var Translate = /** @class */ (function () {
    function Translate() {
    }
    var _a;
    _a = Translate;
    Translate.translateTag = function (tag) { return __awaiter(void 0, void 0, void 0, function () {
        var newTag, translated, _b;
        return __generator(_a, function (_c) {
            switch (_c.label) {
                case 0:
                    newTag = tag
                        .replace(/gabriel dropout/i, "ガヴリールドロップアウト")
                        .replace(/tenma gabriel white|gabriel white|gabriel/i, "天真=ガヴリール=ホワイト")
                        .replace(/vignette tsukinose april|vignette tsukinose|vignette|vigne/i, "月乃瀬=ヴィネット=エイプリル")
                        .replace(/satanichia kurumizawa mcDowell|satania/i, "胡桃沢=サタニキア=マクドウェル")
                        .replace(/chisaki tapris sugarbell|tapris/i, "千咲=タプリス=シュガーベル")
                        .replace(/shiraha raphiel ainsworth|raphiel|raphi/i, "白羽=ラフィエル=エインズワース")
                        .replace(/kisaragi/i, "如月(アズールレーン)")
                        .replace(/sagiri izumi|sagiri/i, "和泉紗霧")
                        .replace(/eromanga sensei/i, "エロマンガ先生")
                        .replace(/black tights/i, "黒タイツ")
                        .replace(/white tights/i, "白タイツ")
                        .replace(/konosuba/i, "この素晴らしい世界に祝福を!")
                        .replace(/megumin/i, "めぐみん")
                        .replace(/aqua/i, "アクア(このすば)")
                        .replace(/kiniro mosaic/i, "きんいろモザイク")
                        .replace(/tight|tights/i, "タイツ")
                        .replace(/karen kujo|karen/i, "九条カレン")
                        .replace(/chino kafuu|chino/i, "香風智乃")
                        .replace(/is the order a rabbit[\s\S]*/i, "ご注文はうさぎですか?")
                        .replace(/tohru/i, "トール(小林さんちのメイドラゴン)")
                        .replace(/kanna kamui|kanna/i, "カンナカムイ")
                        .replace(/miss kobayashi[\s\S]*dragon maid|dragon maid/i, "小林さんちのメイドラゴン")
                        .replace(/kancolle/i, "艦これ")
                        .replace(/azur lane/i, "アズールレーン")
                        .replace(/laffey/i, "ラフィー(アズールレーン)")
                        .replace(/senko[\s\S]*san|senko/i, "仙狐さん")
                        .replace(/kancolle|kantai collection/i, "艦隊これくしょん")
                        .replace(/interspecies reviewers/i, "異種族レビュアーズ")
                        .replace(/stockings/i, "ストッキング")
                        .replace(/ugoira/i, "うごイラ")
                        .replace(/hibiki/i, "響(艦隊これくしょん)")
                        .replace(/loli/i, "ロリ")
                        .replace(/R18/i, "R-18")
                        .replace(/R18G/i, "R-18G");
                    if (!/[a-z]/i.test(newTag))
                        return [2 /*return*/, newTag];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, bing_translate_api_1.translate)(tag, "en", "ja")];
                case 2:
                    translated = _c.sent();
                    return [2 /*return*/, translated.translation];
                case 3:
                    _b = _c.sent();
                    return [2 /*return*/, tag];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    Translate.translateTitle = function (title) { return __awaiter(void 0, void 0, void 0, function () {
        var translated, _b;
        return __generator(_a, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, bing_translate_api_1.translate)(title, "ja", "en")];
                case 1:
                    translated = _c.sent();
                    return [2 /*return*/, translated.translation];
                case 2:
                    _b = _c.sent();
                    return [2 /*return*/, title];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return Translate;
}());
exports.default = Translate;

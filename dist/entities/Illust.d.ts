import api from "../API";
import { PixivBookmarkDetail, PixivBookmarkRanges, PixivCommentSearch, PixivIllust, PixivParams, PixivTrendTags } from "../types";
export declare class Illust {
    protected readonly api: api;
    nextURL: string | null;
    private readonly search;
    constructor(api: api);
    /**
     * Gets an illust by either URL or ID.
     */
    get: (illustResolvable: string | number, params?: PixivParams) => Promise<PixivIllust>;
    /**
     * Gets the details for an illust.
     */
    detail: (params: PixivParams & {
        illust_id: number;
    }) => Promise<PixivIllust>;
    /**
     * Gets the URLS of all the pages for an illust.
     */
    getPages: (illust: PixivIllust) => Promise<string[]>;
    /**
     * Gets new illusts.
     */
    new: (params?: PixivParams) => Promise<PixivIllust[]>;
    /**
     * Gets illusts from users you follow.
     */
    follow: (params: PixivParams & {
        user_id: number;
    }) => Promise<PixivIllust[]>;
    /**
     * Comments from V3 API
     */
    comments: (params: PixivParams & {
        illust_id: number;
    }) => Promise<PixivCommentSearch>;
    /**
     * Gets recommended illusts.
     */
    recommended: (params?: PixivParams) => Promise<PixivIllust[]>;
    /**
     * Gets illusts from the ranking. Defaults to daily ranking
     */
    ranking: (params?: PixivParams) => Promise<PixivIllust[]>;
    /**
     * Searches illusts in the popular previews.
     */
    popularPreview: (params: PixivParams & {
        word: string;
    }) => Promise<PixivIllust[]>;
    /**
     * Gets trending tags.
     */
    trendingTags: (params?: PixivParams) => Promise<PixivTrendTags>;
    /**
     * Gets the details for a bookmark.
     */
    bookmarkDetail: (params: PixivParams & {
        illust_id: number;
    }) => Promise<PixivBookmarkDetail>;
    /**
     * Gets the tags for a bookmark.
     */
    bookmarkTags: (params?: PixivParams) => Promise<import("../types").PixivTag[]>;
    /**
     * Gets the bookmark ranges.
     */
    bookmarkRanges: (params: PixivParams & {
        word: string;
    }) => Promise<PixivBookmarkRanges>;
}

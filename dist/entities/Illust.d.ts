import api from "../API";
import { PixivBookmarkDetail, PixivBookmarkRanges, PixivCommentSearch, PixivCommentSearchV2, PixivIllust, PixivParams, PixivTrendTags } from "../types";
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
     * Fetches the comments on an illust.
     */
    comments: (params: PixivParams & {
        illust_id: number;
    }) => Promise<PixivCommentSearch>;
    /**
     * The difference from the V1 API is that parent_comment was replaced with
     * has_replies.
     */
    commentsV2: (params: PixivParams & {
        illust_id: number;
    }) => Promise<PixivCommentSearchV2>;
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

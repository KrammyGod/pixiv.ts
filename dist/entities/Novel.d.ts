import api from "../API";
import { PixivBookmarkDetail, PixivBookmarkRanges, PixivCommentSearch, PixivAJAXNovelText, PixivNovel, PixivParams, PixivTrendTags } from "../types";
export declare class Novel {
    private readonly api;
    nextURL: string | null;
    private readonly search;
    constructor(api: api);
    /**
     * Gets a novel by URL or ID.
     */
    get: (novelResolvable: string | number, params?: PixivParams) => Promise<PixivNovel>;
    /**
     * Gets the details for a novel.
     */
    detail: (params: PixivParams & {
        novel_id: number;
    }) => Promise<PixivNovel>;
    /**
     * Gets the text for a novel.
     */
    text: (params: {
        novel_id: number;
    }) => Promise<PixivAJAXNovelText>;
    /**
     * Gets new novels.
     */
    new: (params?: PixivParams) => Promise<PixivNovel[]>;
    /**
     * Gets novels from users you follow.
     */
    follow: (params?: PixivParams) => Promise<PixivNovel[]>;
    /**
     * Gets recommended novels.
     */
    recommended: (params?: PixivParams) => Promise<PixivNovel[]>;
    /**
     * Fetches novels from the popular preview.
     */
    popularPreview: (params: PixivParams & {
        word: string;
    }) => Promise<PixivNovel[]>;
    /**
     * Gets novel bookmark ranges.
     */
    bookmarkRanges: (params: PixivParams & {
        word: string;
    }) => Promise<PixivBookmarkRanges>;
    /**
     * Gets novel trending tags.
     */
    trendingTags: (params?: PixivParams) => Promise<PixivTrendTags>;
    /**
     * Comments from V3 API
     */
    comments: (params: PixivParams & {
        novel_id: number;
    }) => Promise<PixivCommentSearch>;
    /**
     * Gets all the novels in the series.
     */
    series: (params: PixivParams & {
        series_id: number;
    }) => Promise<PixivNovel[]>;
    /**
     * Gets novel rankings. Defaults to daily rankings.
     */
    ranking: (params?: PixivParams) => Promise<PixivNovel[]>;
    /**
     * Gets the details of a novel bookmark.
     */
    bookmarkDetail: (params: PixivParams & {
        novel_id: number;
    }) => Promise<PixivBookmarkDetail>;
}

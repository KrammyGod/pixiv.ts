import api from "../API";
import { PixivBookmarkDetail, PixivFollowDetail, PixivParams, PixivUserDetail, PixivUserSearch, PixivNovel } from "../types";
export declare class User {
    private readonly api;
    nextURL: string | null;
    constructor(api: api);
    /**
     * Gets a user by URL or ID.
     */
    get: (userResolvable: string | number) => Promise<PixivUserDetail>;
    /**
     * Gets a detailed user profile.
     */
    detail: (params: PixivParams & {
        user_id: number;
    }) => Promise<PixivUserDetail>;
    /**
     * Gets all illusts by the user.
     */
    illusts: (params: PixivParams & {
        user_id: number;
    }) => Promise<import("../types").PixivIllust[]>;
    /**
     * Gets all novels by the user.
     */
    novels: (params: PixivParams & {
        user_id: number;
    }) => Promise<PixivNovel[]>;
    /**
     * Gets all the public bookmarked illusts by the user.
     */
    bookmarksIllust: (params: PixivParams & {
        user_id: number;
    }) => Promise<import("../types").PixivIllust[]>;
    /**
     * Gets bookmark illust tags.
     */
    bookmarkIllustTags: (params?: PixivParams) => Promise<import("../types").PixivTag[]>;
    /**
     * Gets details on a bookmark.
     */
    bookmarkDetail: (params: PixivParams & {
        illust_id: number;
    }) => Promise<PixivBookmarkDetail>;
    /**
     * Gets a user's public bookmarked novels.
     */
    bookmarksNovel: (params: PixivParams & {
        user_id: number;
    }) => Promise<PixivNovel[]>;
    /**
     * Fetches bookmark novel tags.
     */
    bookmarkNovelTags: (params: PixivParams & {
        user_id: number;
    }) => Promise<import("../types").PixivTag[]>;
    /**
     * Fetches the users a user is following.
     */
    following: (params: PixivParams & {
        user_id: number;
    }) => Promise<PixivUserSearch>;
    /**
     * Fetches the followers of a user.
     */
    followers: (params: PixivParams & {
        user_id: number;
    }) => Promise<PixivUserSearch>;
    /**
     * Gets the MyPixiv of a user.
     */
    myPixiv: (params: PixivParams & {
        user_id: number;
    }) => Promise<PixivUserSearch>;
    /**
     * Gets recommended users.
     */
    recommended: (params?: PixivParams) => Promise<PixivUserSearch>;
    /**
     * Gets details on a user follow.
     */
    followDetail: (params: PixivParams & {
        user_id: number;
    }) => Promise<PixivFollowDetail>;
}

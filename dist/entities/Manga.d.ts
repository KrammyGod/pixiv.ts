import api from "../API";
import { PixivManga, PixivParams } from "../types";
export declare class Manga {
    private readonly api;
    nextURL: string | null;
    private readonly search;
    constructor(api: api);
    /**
     * Gets a manga by URL or ID.
     */
    get: (illustResolvable: string | number, params?: PixivParams) => Promise<PixivManga>;
    /**
     * Gets all of the pages in a manga.
     */
    getPages: (manga: PixivManga) => Promise<string[]>;
    /**
     * Gets the details for a manga.
     */
    detail: (params: PixivParams & {
        illust_id: number;
    }) => Promise<PixivManga>;
    /**
     * Fetches new manga.
     */
    new: (params?: PixivParams) => Promise<PixivManga[]>;
    /**
     * Fetches recommended manga.
     */
    recommended: (params?: PixivParams) => Promise<PixivManga[]>;
}

import api from "../API";
import { PixivAutoComplete, PixivAutoCompleteV2, PixivIllust, PixivNovel, PixivParams, PixivUserSearch } from "../types";
export declare class Search {
    private readonly api;
    nextURL: string | null;
    private readonly defaults;
    constructor(api: api);
    /**
     * Default params for searches are `partial_match_for_tags` and `date_desc`.
     */
    private readonly searchDefaults;
    private readonly processWord;
    /**
     * Searches for illusts with a query.
     */
    illusts: (params?: PixivParams & {
        moe?: boolean;
    }) => Promise<PixivIllust[]>;
    /**
     * Searches for novels with a query.
     */
    novels: (params?: PixivParams) => Promise<PixivNovel[]>;
    /**
     * Searches for users with a query.
     */
    users: (params?: PixivParams) => Promise<PixivUserSearch>;
    /**
     * Gets autocompleted keywords for the word.
     */
    autoComplete: (params?: PixivParams) => Promise<PixivAutoComplete>;
    /**
     * The V2 endpoint includes translated names.
     */
    autoCompleteV2: (params?: PixivParams) => Promise<PixivAutoCompleteV2>;
    /**
     * Searches pixiv.moe. If there is no query, some defaults are provided.
     */
    moe: (params?: {
        query?: string;
        r18?: boolean;
        ugoira?: boolean;
        en?: boolean;
    }) => Promise<PixivIllust[]>;
}

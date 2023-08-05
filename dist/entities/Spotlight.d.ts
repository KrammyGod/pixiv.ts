import api from "../API";
import { PixivParams } from "../types";
export declare class Spotlight {
    private readonly api;
    nextURL: string | null;
    constructor(api: api);
    /**
     * Gets articles on pixivision.
     */
    articles: (params?: PixivParams) => Promise<import("../types").PixivArticle[]>;
}

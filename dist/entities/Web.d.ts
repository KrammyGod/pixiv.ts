import api from "../API";
import { PixivCandidates, PixivWebParams } from "../types";
export declare class Web {
    private readonly api;
    constructor(api: api);
    /**
     * Gets suggested candidates from web url that includes tag translation and access count.
     */
    candidates: (params?: PixivWebParams) => Promise<PixivCandidates>;
}

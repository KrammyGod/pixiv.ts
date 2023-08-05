import api from "../API";
import { PixivParams, UgoiraMetaData } from "../types";
export declare class Ugoira {
    private readonly api;
    constructor(api: api);
    /**
     * Gets the metadata for a ugoira by URL or ID.
     */
    get: (ugoiraResolvable: string | number) => Promise<UgoiraMetaData>;
    /**
     * Gets the metadata for a ugoira, such as the zip url and file names/frame delays.
     */
    metadata: (params: PixivParams & {
        illust_id: number;
    }) => Promise<UgoiraMetaData>;
}

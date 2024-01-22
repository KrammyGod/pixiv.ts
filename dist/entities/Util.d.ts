/// <reference types="node" />
import * as stream from "stream";
import api from "../API";
import { PixivFolderMap, PixivIllust, PixivMultiCall } from "../types";
export declare class Util {
    private readonly api;
    private readonly illust;
    private readonly search;
    private readonly ugoira;
    constructor(api: api);
    /**
     * Parsed a pixiv id from the url.
     */
    parseID: (input: string) => number;
    /**
     * Translates a tag to Japanese.
     *
     */
    translateTag: (tag: string) => Promise<string>;
    /**
     * Translates a title to English.
     */
    translateTitle: (title: string) => Promise<string>;
    /**
     * Utility for awaiting a setTimeout
     */
    timeout: (ms: number) => Promise<unknown>;
    /**
     * Utility for awaiting a stream.Writable
     */
    awaitStream: (writeStream: stream.Writable) => Promise<unknown>;
    /**
     * Makes subsequent api calls to get more search results, then returns them.
     */
    multiCall: (response: PixivMultiCall, limit?: number) => Promise<any[]>;
    /**
     * Utility for sorting by bookmarks.
     */
    sort: (illusts: PixivIllust[]) => PixivIllust[];
    private download;
    /**
     * Downloads an illust locally.
     */
    downloadIllust: (illustResolvable: string | PixivIllust, folder: string, size?: "medium" | "large" | "square_medium" | "original") => any;
    /**
     * Downloads an author"s profile picture locally.
     */
    downloadProfilePicture: (illustResolvable: string | PixivIllust, folder: string, size?: string) => Promise<string>;
    /**
     * Mass downloads illusts from a search result. You can map the results into different folders by tag
     * with the folderMap parameter.
     */
    downloadIllusts: (query: string, dest: string, size?: "medium" | "large" | "square_medium" | "original", folderMap?: PixivFolderMap[], r18?: boolean) => Promise<any[]>;
    /**
     * Encodes a new gif from an array of file paths.
     */
    encodeGif: (files: string[], delays?: number[], dest?: string) => Promise<string>;
    /**
     * Encodes a webp from an array of file paths.
     */
    encodeAnimatedWebp: (files: string[], delays: number[], dest?: string, webpPath?: string) => Promise<string>;
    /**
     * Gives permission to webp binaries.
     */
    chmod777: (webpPath?: string) => void;
    /**
     * Downloads and extracts all of the individual images in a ugoira.
     */
    downloadZip: (url: string, dest: string) => Promise<string>;
    /**
     * Downloads the zip archive of a ugoira and converts it to a gif.
     */
    downloadUgoira: (illustResolvable: string | PixivIllust, dest: string, options?: {
        speed?: number;
        reverse?: boolean;
    }) => Promise<string>;
    /**
     * Gets a viewable link for an illust, if it exists.
     */
    viewLink: (illustResolvable: string | PixivIllust) => Promise<string | null>;
}

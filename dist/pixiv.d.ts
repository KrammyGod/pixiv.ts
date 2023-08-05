import api from "./API";
import { Illust, Manga, Novel, Search, Spotlight, Ugoira, User, Util, Web } from "./entities/index";
/**
 * The main class for interacting with the Pixiv API.
 */
export default class Pixiv {
    private readonly loginTime;
    private readonly expirationTime;
    static accessToken: string;
    static refreshToken: string;
    api: api;
    illust: Illust;
    manga: Manga;
    novel: Novel;
    search: Search;
    user: User;
    ugoira: Ugoira;
    util: Util;
    spotlight: Spotlight;
    web: Web;
    private constructor();
    /**
     * Refreshes your refresh token and access token if they have expired.
     */
    refreshToken: (refreshToken?: string) => Promise<string>;
    /**
     * Logs into Pixiv with your username and password, or refresh token if it is available.
     */
    static login: (username: string, password: string) => Promise<Pixiv>;
    /**
     * Logs in with username and password only.
     */
    static passwordLogin: (username: string, password: string) => Promise<Pixiv>;
    /**
     * Logs in with refresh token only.
     */
    static refreshLogin: (refreshToken: string) => Promise<Pixiv>;
}
export * from "./entities/index";
export * from "./types/index";

import { PixivAuthData, PixivAuthHeaders, PixivParams, PixivWebParams } from "./types/index";
export default class API {
    private readonly data;
    private readonly authHeaders;
    private refreshToken;
    private accessToken;
    private readonly loginTime;
    private readonly expirationTime;
    private readonly headers;
    constructor(data: PixivAuthData, authHeaders: PixivAuthHeaders, refreshToken: string, accessToken: string, loginTime: number, expirationTime: number);
    /**
     * Gets a new access token if the refresh token expires.
     */
    refreshAccessToken: (refreshToken?: string) => Promise<string>;
    /**
     * Fetches an endpoint from the API and returns the response.
     */
    get: (endpoint: string, params?: PixivParams) => Promise<any>;
    /**
     * Fetches from web url and returns the response.
     */
    getWeb: (endpoint: string, params?: PixivWebParams) => Promise<any>;
    /**
     * Fetches the url in the nextUrl() property of search responses.
     */
    next: (nextUrl: string) => Promise<any>;
    /**
     * Destructures a URL to get all of the search parameters and values.
     */
    destructureParams: (nextUrl: string) => {
        baseUrl: string;
        params: PixivParams;
    };
    /**
     * Fetches any url.
     */
    request: (url: string, params?: any) => Promise<any>;
}

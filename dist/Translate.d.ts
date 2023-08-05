/**
 * Translates search terms to japanese
 */
export default class Translate {
    static translateTag: (tag: string) => Promise<string>;
    static translateTitle: (title: string) => Promise<string>;
}

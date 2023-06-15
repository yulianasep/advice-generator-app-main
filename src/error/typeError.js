export class BadResponseError extends Error {
    constructor(message) {
        super(message);
        this.name = "BadResponseError";
    }
}
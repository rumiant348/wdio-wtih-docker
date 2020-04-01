export default class Page {
    constructor(path: string) {
        this.path = path;
        this.open();
    }

    path: string;

    get currentUrl() {
        return browser.getUrl();
    }

    open() {
        browser.url(this.path);
    }

    refresh() {
        browser.refresh();
        this.waitForExist();
    }

    waitForExist() {
        $('body').waitForExist({ timeout: 3000 });
    }

    waitForNavigation() {
        browser.waitUntil(
            () => browser.getUrl() !== this.path,
            {
                timeout: 5000,
                timeoutMsg: 'expected url to change after 5s'
            }
        )
    }
}
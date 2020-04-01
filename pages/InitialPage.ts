import Page from "./Page";
import { initialPageUrl } from '../urls/urls';

class InitialPage extends Page {
    constructor() {
        super(initialPageUrl);
    }

    get proceedButton(): WebdriverIO.Element {
        return $(`button=GET STARTED`);
    }

    clickProceedButton(): void {
        this.proceedButton.click();
    }
}

export default InitialPage;

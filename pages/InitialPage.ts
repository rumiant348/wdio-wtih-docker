import Page from "./Page";
import { initialPageUrl } from '../urls/urls';

class InitialPage extends Page {
    constructor() {
        super(initialPageUrl);
    }

    get proceedButton() {
        return $('#lets-go-selector')
    }

    clickProceedButton() {
        this.proceedButton.click();
    }
}

export default InitialPage;

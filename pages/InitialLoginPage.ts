import Page from "./Page";
import { initialLoginPageUrl } from '../urls/urls';

class InitialLoginPage extends Page {
    constructor() {
        super(initialLoginPageUrl);
    }

    get stateDropDown(): WebdriverIO.Element {
        return $('#selectProductSort');
    }

    get districtDropDown(): WebdriverIO.Element {
        return $('#selectProductSort');
    }

    get finishButton(): WebdriverIO.Element {
        return $(`button=LET'S GO!`);
    }

    selectInStateDropDown(index: number): void {
        this.selectInDropDown('#school-state-select', index);
    }

    selectInDistrictDropDown(index: number): void {
        this.selectInDropDown('#school-district-select', index);
    }

    finishButtonEnabled(): boolean {
        return this.finishButton.isEnabled();
    }

    clickFinishButton(): void {
        this.finishButton.click()
    }

    private selectInDropDown(selector: string, index: number) {
        let dropdown = $(selector);
        dropdown.waitForExist({ timeout: 3000 });
        dropdown.selectByIndex(index);
    }
}

export default InitialLoginPage;

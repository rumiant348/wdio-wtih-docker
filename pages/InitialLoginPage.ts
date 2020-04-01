import Page from "./Page";
import { initialLoginPageUrl } from '../urls/urls';

class InitialLoginPage extends Page {
    constructor() {
        super(initialLoginPageUrl);
    }

    get stateDropDown() {
        return $('#selectProductSort');
    }

    get districtDropDown() {
        return $('#selectProductSort');
    }

    get finishButton() {
        return $(`button=LET'S GO!`);
    }

    selectInStateDropDown(index: number) {
        this.selectInDropDown('#school-state-select', index);
    }

    selectInDistrictDropDown(index: number) {
        this.selectInDropDown('#school-district-select', index);
    }

    finishButtonEnabled() {
        return this.finishButton.isEnabled();
    }

    clickFinishButton() {
        this.finishButton.click()
    }

    private selectInDropDown(selector: string, index: number) {
        let dropdown = $(selector);
        dropdown.waitForExist({ timeout: 3000 });
        dropdown.selectByIndex(index);
    }
}

export default InitialLoginPage;

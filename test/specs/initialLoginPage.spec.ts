import InitialLoginPage from '../../pages/InitialLoginPage';
import {expect} from 'chai';

describe('On a Initial Login Page user', () => {
    let loginPage = new InitialLoginPage();

    beforeEach(() => {
        loginPage.refresh();
    });

    it('sees disabled "Let\s go button" when nothing is selected', () => {
        expect(loginPage.finishButtonEnabled() === false);
    });

    it('can select state', () => {
        loginPage.selectInStateDropDown(0);
        expect(loginPage.finishButtonEnabled() === false);
    });

    it('can select state and district', () => {
        loginPage.selectInStateDropDown(0);
        loginPage.selectInDistrictDropDown(0);
        expect(loginPage.finishButtonEnabled() === true);
    });

    it('can proceed after selection', () => {
        loginPage.selectInStateDropDown(0);
        loginPage.selectInDistrictDropDown(0);
        expect(loginPage.finishButtonEnabled() === true);
        loginPage.clickFinishButton();
        loginPage.waitForNavigation();
    });
});

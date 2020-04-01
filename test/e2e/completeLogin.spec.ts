import InitialPage from '../../pages/InitialPage';
import InitialLoginPage from "../../pages/InitialLoginPage";
import FinalLoginPage from "../../pages/FinalLoginPage";
import { expect } from 'chai';
import * as urls from '../../urls/urls';

describe('On a Initial Page user', () => {

    it('can proceed further', () => {
        const initialPage = new InitialPage();
        initialPage.clickProceedButton();
        initialPage.waitForNavigation();
        expect(initialPage.currentUrl).to.equal(urls.initialPageUrl);

        const loginPage = new InitialLoginPage()
        loginPage.selectInStateDropDown(0);
        loginPage.selectInDistrictDropDown(0);
        expect(loginPage.finishButtonEnabled() === true);
        loginPage.clickFinishButton();
        loginPage.waitForNavigation();
        expect(loginPage.currentUrl).to.equal(urls.initialLoginPageUrl);

        const finalLoginPage = new FinalLoginPage()
        finalLoginPage.enterUsername('Anton348@mail.ru');
        finalLoginPage.enterPassword('Testte3@');
        finalLoginPage.clickLogin();
    });
});

import InitialPage from '../../pages/InitialPage';

describe('On a Initial Page user', () => {

    it('can proceed further', () => {
        const initialPage = new InitialPage();
        initialPage.clickProceedButton();
        initialPage.waitForNavigation();
    });
});

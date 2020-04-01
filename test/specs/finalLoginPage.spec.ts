import FinalLoginPage from '../../pages/FinalLoginPage';

describe('On a Final Login Page user', () => {
    let loginPage = new FinalLoginPage();

    beforeEach(() => {
        loginPage.refresh();
    });

    it('doesn\'t login with only username', () => {
        loginPage.enterUsername('Anton');
        loginPage.clickLogin();
    });

    it('doesn\'t login with only password', () => {
        loginPage.enterPassword('test');
        loginPage.clickLogin();
    });

    it('logins with valid creds', () => {
        loginPage.enterUsername('Anton348@mail.ru');
        loginPage.enterPassword('Testte3@');
        loginPage.clickLogin();
    });
});

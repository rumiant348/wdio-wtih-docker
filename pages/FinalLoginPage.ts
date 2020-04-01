import Page from './Page';
import { finalLoginPageUrl } from '../urls/urls';

class FinalLoginPage extends Page {
    constructor() {
        super(finalLoginPageUrl);
    }

    get username() {
        return $('#email');
    }

    get password() {
        return $('#passwd');
    }

    get submit() {
        return $('#SubmitLogin');
    }

    enterUsername(username) {
        let el = this.username;
        el.waitForClickable({ timeout: 3000 });
        el.setValue(username)
    }

    enterPassword(password) {
        let el = this.password;
        el.waitForClickable({ timeout: 3000 });
        el.setValue(password)
    }

    clickLogin() {
        this.submit.click();
    }

    loginWithCredentials(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.submit.click();
    }
}

export default FinalLoginPage;

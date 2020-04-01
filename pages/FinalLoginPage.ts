import Page from './Page';
import { finalLoginPageUrl } from '../urls/urls';

class FinalLoginPage extends Page {
    constructor() {
        super(finalLoginPageUrl);
    }

    get username(): WebdriverIO.Element {
        return $('#username');
    }

    get password(): WebdriverIO.Element {
        return $('#password');
    }

    get submit(): WebdriverIO.Element {
        return $(`button=LET'S GO!`);
    }

    enterUsername(username: string): void {
        let el = this.username;
        el.waitForClickable({ timeout: 3000 });
        el.setValue(username)
    }

    enterPassword(password: string): void {
        let el = this.password;
        el.waitForClickable({ timeout: 3000 });
        el.setValue(password)
    }

    clickLogin(): void {
        this.submit.click();
    }
}

export default FinalLoginPage;

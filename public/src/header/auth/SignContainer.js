import SignLink from './signlink/SignLink.js';

class SignContainer {
    constructor() {
        this._sign_link = new SignLink();
    }

    render() {
        return `
        <div class="sign-container">
            ${this._sign_link.render_sign_up()}
            <span class="sign-container--separator">|</span>
            ${this._sign_link.render_sign_in()}
        </div>
        `;
    }
}

export default SignContainer;
import SignLink from './signlink/SignLink.js';

class SignLinksContainer {
    constructor() {
        this._sign_link = new SignLink();
    }

    render() {
        return `
        <div class="sign-links-container">
            ${this._sign_link.render_sign_up()}
            <span class="sign-links-container--separator">|</span>
            ${this._sign_link.render_sign_in()}
        </div>
        `;
    }
}

export default SignLinksContainer;
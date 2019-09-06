const STATE = {
    sign_in: {
        klass: 'sign-in',
        href: '/#signin',
        text: 'Sign In',
    },
    sign_up: {
        klass: 'sign-up',
        href: '/#signup',
        text: 'Sign Up',
    },
};

class SignLink {
    render_sign_in() {
        return this._render(STATE.sign_in);
    }

    render_sign_up() {
        return this._render(STATE.sign_up);
    }

    _render(state) {
        const { klass, href, text } = state;

        return `
        <div class="${klass}">
            <a href="${href}" class="${klass}--link nav-link">${text}</a>
        </div>
        `;
    }
}

export default SignLink;
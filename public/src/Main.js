import Logo from './header/logo/Logo.js';
import SignLinksContainer from './header/auth/SignLinksContainer.js';
import Router from './router/Router.js';

class Main {
    constructor() {
        this._set_root_elements();
        this._initialize_subclasses();
    }

    _set_root_elements() {
        this._header = document.getElementById('header');
        this._app = document.getElementById('app');
    }

    _initialize_subclasses() {
        this._router = new Router(this._app);
        this._logo = new Logo();
        this._sign_container = new SignLinksContainer();
    }

    init_app() {
        this._initial_url();
        this._listen_url_change();
        this._render_header();
        this._render_sign_container();
    }

    _initial_url() {
        this._router.change_route();
    }

    _listen_url_change() {
        this._router.listen_url_change();
    }

    _render_header() {
        this._header.insertAdjacentHTML('afterbegin', this._logo.render());
    }

    _render_sign_container() {
        this._header.insertAdjacentHTML('beforeend', this._sign_container.render());
    }
}

new Main().init_app();
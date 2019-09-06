import Logo from './header/logo/Logo.js';
import SignContainer from './header/auth/SignContainer.js';
import Router from './router/Router.js';
import ElementFactory from './factory/ElementFactory.js';

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
        this._router = new Router();
        this._logo = new Logo();
        this._sign_container = new SignContainer();
    }

    init_app() {
        this._initial_url();
        this._listen_url_change();
        this._render_header();
        this._render_sign_container();
    }

    _initial_url() {
        this._is_need_change_url();
    }

    _listen_url_change() {
        this._router.listen_url_change((url) => {
            this._is_need_change_url();
        });
    }

    _is_need_change_url() {
        if (this._router.has_url()) {
            ElementFactory.set_element_and_render(
                this._app,
                this._router.selected_element
            );
        }
    }

    _render_header() {
        this._header.insertAdjacentHTML('afterbegin', this._logo.render());
    }

    _render_sign_container() {
        this._header.insertAdjacentHTML('beforeend', this._sign_container.render());
    }
}

new Main().init_app();
import SignForm from '../app/signform/SignForm.js';
import Router from '../router/Router.js';

class ElementFactory {
    static set_element_and_render(root, element) {
        if (
            element instanceof SignForm &&
            Router.current_url === Router.routes.sign_in
        ) {
            root.innerHTML = element.render_sign_in_form();
            element.set_events();
        } else if (
            element instanceof SignForm &&
            Router.current_url === Router.routes.sign_up
        ) {
            root.innerHTML = element.render_sign_up_form();
            element.set_events();
        } else {
            root.innerHTML = '';
        }
    }
}

export default ElementFactory;
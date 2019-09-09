import SignForm from '../app/signform/SignForm.js';
import Router from '../router/Router.js';
import QuizContainer from '../app/quiz/QuizContainer.js';
import TestContainer from '../app/quiz/test/TestContainer.js';

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
        } else if (element instanceof QuizContainer) {
            root.innerHTML = element.render();
            element.set_events();
        } else if (element instanceof TestContainer && Router.current_url === Router.routes.test) {
            root.innerHTML = element.render();
        }
    }
}

export default ElementFactory;
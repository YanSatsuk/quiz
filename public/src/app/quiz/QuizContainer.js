import QuizMenu from './menu/QuizMenu.js';
import QuizDashboard from './dashboard/QuizDashboard.js';
import EventListener from '../../helpers/EventListener.js';

class QuizContainer {
    constructor() {
        this._menu_event_listener = new EventListener();
        this._menu = new QuizMenu({
            listener: this._menu_event_listener,
        });
        this._dashboard = new QuizDashboard({
            listener: this._menu_event_listener,
        });
    }

    render() {
        return `
        <div class="quiz-container">
            ${this._menu.render()}
            ${this._dashboard.render()}
        </div>
        `;
    }

    set_events() {
        this._menu.set_events();
        this._dashboard.set_events();
    }
}

export default QuizContainer;
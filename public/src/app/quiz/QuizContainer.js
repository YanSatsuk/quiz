import QuizMenu from './menu/QuizMenu.js';
import QuizDashboard from './dashboard/QuizDashboard.js';

class QuizContainer {
    constructor() {
        this._menu = new QuizMenu();
        this._dashboard = new QuizDashboard();
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
import QuizMenu from './menu/QuizMenu.js';

class QuizContainer {
    constructor() {
        this._menu = new QuizMenu();
    }
    render() {
        return `
        <div class="quiz-container">
            ${this._menu.render()}
        </div>
        `;
    }

    set_events() {
        this._menu.set_events();
    }
}

export default QuizContainer;
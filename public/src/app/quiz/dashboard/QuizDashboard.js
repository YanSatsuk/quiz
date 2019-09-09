import QuizzesItems from './items/QuizzesItems.js';

const COMPONENT_CSS = 'quiz-dashboard';

class QuizDashboard {
    constructor(params) {
        this._quizzes = new QuizzesItems({
            listener: params.listener,
        });
    }

    render() {
        return `
        <div class="${COMPONENT_CSS}">
            <div class="${COMPONENT_CSS}--title-container">
                <h2 class="${COMPONENT_CSS}--title">Quizzes list</h2>
            </div>
            ${this._quizzes.render()}
        </div>
        `;
    }

    set_events() {
        this._quizzes.set_events();
    }
}

export default QuizDashboard;
import QuizCategoriesList from '../../menu/list/QuizCategoriesList.js';

const itemsMock = [
    {
        name: 'JS',
        questions: 24,
        category: 'First',
    },
    {
        name: 'Python',
        questions: 22,
        category: 'First',
    },
    {
        name: 'jQuery',
        questions: 10,
        category: 'Second',
    },
    {
        name: 'HTML',
        questions: 50,
        category: 'Second',
    },
    {
        name: 'CSS',
        questions: 45,
        category: 'First',
    },
];

const COMPONENT_CSS = 'quizzes-items';

const CSS = {
    ITEM: `${COMPONENT_CSS}--item`,
    TITLE: `${COMPONENT_CSS}--title`,
    QUESTIONS: `${COMPONENT_CSS}--questions`,
    BUTTON: `${COMPONENT_CSS}--button`,
    BUTTON_CONTAINER: `${COMPONENT_CSS}--button-container`,
};

class QuizzesItems {
    constructor(params) {
        this._menu_event_listener = params.listener;
        this._menu_event_listener.subscribe(this, QuizCategoriesList.EVENTS.MENU_CLICKED);
        this._quizzes = itemsMock;
    }

    render(quizzes) {
        const quizzes_items = quizzes || this._get_quizzes();

        return `
        <div class="${COMPONENT_CSS}" id="${COMPONENT_CSS}">
            ${quizzes_items}
        </div>
        `;
    }

    receive(param) {
        this.rerender(param.innerText);
    }

    rerender(category) {
        let quizzes = '';
        const quizzes_element = document.getElementById(COMPONENT_CSS);

        this._quizzes.forEach(quiz => {
            if (quiz.category === category) {
                quizzes += this._get_template(quiz)
            }
        });

        quizzes_element.innerHTML = this.render(quizzes);
    }

    _get_quizzes() {
        let quizzes = '';

        this._quizzes.forEach(quiz =>
            quizzes += this._get_template(quiz)
        );

        return quizzes;
    }

    _get_template(quiz) {
        return `
            <div class="${CSS.ITEM}">
                <div class="${CSS.TITLE} text-center">
                    <h1>${quiz.name} Quiz</h1>
                </div>
                <div class="${CSS.QUESTIONS} text-center">
                    <h2>${quiz.questions} Questions</h2>
                </div>
                <div class="${CSS.BUTTON_CONTAINER} text-center">
                    <button class="${CSS.BUTTON}">Start Quiz</button>
                </div>
            </div>
            `;
    }

    set_events() {
        const quizzes = document.getElementById(COMPONENT_CSS);
        quizzes.onclick = (e) => this._on_click(e);
    }

    _on_click(e) {
        const button = e.target.closest('button');

        if (!button) {
            return;
        }

        console.log(e.target);
    }
}

export default QuizzesItems;
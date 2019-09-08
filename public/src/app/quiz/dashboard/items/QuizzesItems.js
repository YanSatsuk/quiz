const itemsMock = [
    {
        name: 'JS',
        questions: 24,
    },
    {
        name: 'Python',
        questions: 22,
    },
    {
        name: 'jQuery',
        questions: 10,
    },
    {
        name: 'HTML',
        questions: 50,
    },
    {
        name: 'CSS',
        questions: 45,
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
    constructor() {
        this._quizzes = itemsMock;
    }

    render() {
        const quizzes = this._get_quizzes();

        return `
        <div class="${COMPONENT_CSS}" id="${COMPONENT_CSS}">
            ${quizzes}
        </div>
        `;
    }

    _get_quizzes() {
        let quizzes = '';

        this._quizzes.forEach(quiz =>
            quizzes += `
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
            `
        );

        return quizzes;
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
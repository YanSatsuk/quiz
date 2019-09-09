const mockData = [
    {
        question: 'Кто круче супермена?',
        answers: [
            {
                value: 'Зеленый фонарь',
                correct: false,
            },
            {
                value: 'Робин',
                correct: false,
            },
            {
                value: 'Аквамэн',
                correct: false,
            },
            {
                value: 'Бэтмен',
                correct: true,
            },
        ]
    },
];

const COMPONENT_CSS = 'test';

const CSS = {
    ITEM: `${COMPONENT_CSS}--item`,
    QUESTION: `${COMPONENT_CSS}--question`,
    ANSWER: `${COMPONENT_CSS}--answer`,
    BUTTON: `${COMPONENT_CSS}--button`,
};

class Test {
    constructor() {
        this._data = mockData;
    }

    render() {
        const tests = this._get_test_template();

        return `
        <div class="${COMPONENT_CSS}">
            ${tests}
        </div>
        `;
    }

    _get_test_template() {
        let test_data = '';

        this._data.forEach(test => {
           test_data += this._build_template(test);
        });

        return test_data;
    }

    _build_template(test) {
        const answers = this._get_answers_template(test);

        return `
        <div class="${CSS.QUESTION}">
            <h2>${test.question}</h2>
        </div>
        <div class="${CSS.ITEM}">
            ${answers}
        </div>
        <div class="${CSS.BUTTON}">
            <button>Next</button>
        </div>
        `;
    }

    _get_answers_template(test) {
        let answers = '';

        test.answers.forEach(answer => {
            answers += `
            <div class="${CSS.ANSWER}">
                <input type="checkbox">
                <label>${answer.value}</label>
            </div>
            `;
        });

        return answers;
    }
}

export default Test;
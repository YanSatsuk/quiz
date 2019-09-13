import TestResult from './TestResult.js';

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
    {
        question: 'Кто круче меня?',
        answers: [
            {
                value: 'Красный череп',
                correct: false,
            },
            {
                value: 'Найтвинг',
                correct: false,
            },
            {
                value: 'Бэйн',
                correct: false,
            },
            {
                value: 'Бэтмен',
                correct: true,
            },
        ]
    },
    {
        question: 'Кто круче чака норриса?',
        answers: [
            {
                value: 'Никто',
                correct: true,
            },
            {
                value: 'Найтвинг',
                correct: false,
            },
            {
                value: 'Бэйн',
                correct: false,
            },
            {
                value: 'Бэтмен',
                correct: false,
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
    RESULT: `${COMPONENT_CSS}--result`,
    BUTTONS: `${COMPONENT_CSS}--buttons`,
};

class Test {
    constructor() {
        this._data = mockData;
    }

    render() {
        this._answers = [];
        this._index = 0;
        const tests = this._get_test_template();

        return `
        <div class="${COMPONENT_CSS}" id="${COMPONENT_CSS}">
            ${tests}
        </div>
        `;
    }

    _get_test_template() {
        let test_data = '';

        if (this._index === this._data.length - 1) {
            test_data += this._build_template(this._data[this._index++], true);
        } else if (this._index < this._data.length - 1) {
            test_data += this._build_template(this._data[this._index++]);
        } else {
            test_data += this._show_result(this._get_score());
            this.set_events();
        }

        return test_data;
    }

    _build_template(test, last_question = false) {
        const answers = this._get_answers_template(test);
        const button_value = last_question ? 'Finish' : 'Next';

        return `
        <div class="${CSS.QUESTION}">
            <h1>${test.question}</h1>
        </div>
        <div class="${CSS.ITEM}">
            ${answers}
        </div>
        <div class="${CSS.BUTTON}">
            <button id="${CSS.BUTTON}">${button_value}</button>
        </div>
        `;
    }

    _get_answers_template(test) {
        let answers = '';

        test.answers.forEach(answer => {
            answers += `
            <div class="${CSS.ANSWER}">
                <input type="radio" name="answer" value="${answer.value}" id="${answer.value}">
                <label for="${answer.value}">${answer.value}</label>
            </div>            
            `;
        });

        return answers;
    }

    set_events() {
        const button = document.getElementById(CSS.BUTTON);
        const result_button = document.getElementById(CSS.RESULT);

        if (button) {
            button.onclick = () => this._handle_click();
        }

        if (result_button) {
            result_button.onclick = () => this._show_results();
        }
    }

    _handle_click() {
        const container = document.getElementById(COMPONENT_CSS);
        const answer = container.querySelector('input:checked');

        if (answer) {
            this._add_answer(answer.value);
            container.innerHTML = this._get_test_template();
            this.set_events();
        }
    }

    _add_answer(answer) {
        this._answers.push(answer)
    }

    _get_score() {
        const result = [];
        const score = {
            total: this._data.length,
            correct: 0,
        };

        this._data.forEach((item, index) => {
            const temp = this._get_result_object_template(item);
            item.answers.forEach(answer => {
                if (this._is_my_answer_right(answer, index)) {
                    temp.answers.push({
                        value: answer.value,
                        correct: true,
                    });
                    score.correct++;
                } else if (this._is_my_answer_wrong(answer, index)) {
                    temp.answers.push({
                        value: answer.value,
                        wrong: true,
                    });
                } else {
                    temp.answers.push({
                        value: answer.value,
                        correct: answer.correct
                    });
                }
            });
            result.push(temp);
        });

        score.percent = this._get_percent_of_guessed(score);

        return {
            result: result,
            score: score,
        };
    }

    _get_result_object_template(item) {
        const temp = {};
        temp.question = item.question;
        temp.answers = [];

        return temp;
    }

    _is_my_answer_right(answer, index) {
        return this._answers[index] === answer.value &&
            answer.correct;
    }

    _is_my_answer_wrong(answer, index) {
        return this._answers[index] === answer.value &&
            !answer.correct;
    }

    _show_result(object) {
        return `
        <div class="${CSS.RESULT}">
            ${this.constructor._get_result_template(object.score)}
            <div class="${CSS.BUTTONS}">
                <button class="button" id="${CSS.RESULT}">Check your answers</button>
                <button class="button" onclick="location.hash = ''">Back to Quizzes</button>    
            </div> 
        </div>
        `;
    }

    _get_percent_of_guessed({ correct, total }) {
        return Math.floor((100 * correct) / total)
    }

    static _get_result_template({ correct, total, percent }) {
        return `
        <h1>Result:</h1>
        <br>
        <h2>${correct} of ${total}</h2>
        <br>
        <h2>${percent}%</h2>
        `;
    }

    _show_results() {
        const container = document.getElementById(COMPONENT_CSS);
        container.innerHTML = new TestResult(this._get_score()).render();
    }
}

export default Test;
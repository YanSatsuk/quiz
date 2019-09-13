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
            console.log(this._get_score());
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

        if (button) {
            button.onclick = () => this._handle_click();
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
        const { score: { total: total, correct: correct } } = object;
        const percent = Math.floor((100 * correct) / total);

        return `
        <div class="test--result">
            <h2>Result: </h2>
            <span>${correct} of ${total}</span>
            <br>
            <span>${percent}%</span>
        </div>
        `;
    }
}

export default Test;
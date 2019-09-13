import Test from './Test.js';

const COMPONENT_CSS = 'test-result';

const CSS = {
    RESULTS: `${COMPONENT_CSS}--results`,
    SCORE: `${COMPONENT_CSS}--score`,
    ITEM: `${COMPONENT_CSS}--item`,
    ANSWER: `${COMPONENT_CSS}--answer`,
    ANSWER_RIGHT: `${COMPONENT_CSS}--answer__right`,
    ANSWER_WRONG: `${COMPONENT_CSS}--answer__wrong`,
};

class TestResult {
    constructor(data) {
        this._data = data;
    }

    render() {
        const score = Test._get_result_template(this._data.score);
        const results = this._get_results(this._data.result);

        return `
        <div class="${COMPONENT_CSS}">
            <div class="${CSS.SCORE} test--result">
                ${score}
            </div>
            <div class="${CSS.RESULTS}">
                ${results}
            </div>
        </div>
        `;
    }

    _get_results(result) {
        let results = '';

        result.forEach((item, index) => {
            results += `
            <div class="${CSS.ITEM}">
                <h2>Question ${++index}:</h2>
                <h2>${item.question}</h2>
            `;
            item.answers.forEach(answer => {
                results += `
                <div class="${CSS.ANSWER} ${this._get_answer_style(answer)}">
                    ${answer.value}
                </div>
                `;
            });
            results += '</div>';
        });

        return results;
    }

    _get_answer_style(answer) {
        let style = '';

        if (answer.correct) {
            style = CSS.ANSWER_RIGHT;
        } else if (answer.wrong) {
            style = CSS.ANSWER_WRONG;
        }

        return style;
    }
}

export default TestResult;
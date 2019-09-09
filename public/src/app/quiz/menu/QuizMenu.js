import QuizCategoriesList from './list/QuizCategoriesList.js';

class QuizMenu {
    constructor(params) {
        this._list = new QuizCategoriesList({
            listener: params.listener,
        });
    }

    render() {
        return `
        <div class="quiz-menu">
            ${this._list.render()}        
        </div> 
        `;
    }

    set_events() {
        this._list.set_events();
    }
}

export default QuizMenu;
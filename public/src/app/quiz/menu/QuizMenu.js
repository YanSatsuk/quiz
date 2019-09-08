import QuizCategoriesList from './list/QuizCategoriesList.js';

class QuizMenu {
    constructor() {
        this._list = new QuizCategoriesList();
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
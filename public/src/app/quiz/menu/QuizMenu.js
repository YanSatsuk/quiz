import QuizList from './list/QuizList.js';

class QuizMenu {
    constructor() {
        this._list = new QuizList();
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
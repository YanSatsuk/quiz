import QuizCategoriesList from './list/QuizCategoriesList.js';

class QuizMenu {
    constructor(params) {
        this._menu_event_listener = params.listener;
        this._list = new QuizCategoriesList({
            listener: this._menu_event_listener,
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
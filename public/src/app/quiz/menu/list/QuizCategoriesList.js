const itemsMock = [
    {
        name: 'First',
        count: 12,
    },
    {
        name: 'Second',
        count: 1,
    },
    {
        name: 'Third',
        count: 2,
    },
    {
        name: 'Four',
        count: 7,
    },
    {
        name: 'Fifth',
        count: 6,
    },
];

const COMPONENT_CSS = 'quiz-categories-list';

const CSS = {
    UL: `${COMPONENT_CSS}--ul`,
    LI: `${COMPONENT_CSS}--li`,
    LI_ACTIVE: `${COMPONENT_CSS}--li__active`,
};

class QuizCategoriesList {
    constructor() {
        this._items = itemsMock;
    }

    render() {
        const items = this._get_items();

        return `
        <div class="${COMPONENT_CSS}">
            <ul class="${CSS.UL}" id="${CSS.UL}">
                ${items}
            </ul>
        </div>
        `;
    }

    _get_items() {
        let items = '';

        this._items.forEach(item =>
            items += `<li class="${CSS.LI}">${item.name}</li>`
        );

        return items;
    }

    set_events() {
        const list = document.getElementById(CSS.UL);
        list.onclick = (e) => this._on_click(e);
    }

    _on_click(e) {
        const li = e.target.closest('li');

        if (!li) {
            return;
        }

        this._highlight_selected_item(e.target);
    }

    _highlight_selected_item(target) {
        const list = document.getElementById(CSS.UL);

        for (let item of list.children) {
            item.classList.contains(CSS.LI_ACTIVE) && item.classList.remove(CSS.LI_ACTIVE);
        }

        target.classList.add(CSS.LI_ACTIVE);
    }
}

export default QuizCategoriesList;
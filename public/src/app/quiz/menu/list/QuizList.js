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

const COMPONENT_CSS = 'quiz-list';

const CSS = {
    ul: `${COMPONENT_CSS}--ul`,
    li: `${COMPONENT_CSS}--li`,
    li_active: `${COMPONENT_CSS}--li__active`,
};

class QuizList {
    constructor() {
        this._items = itemsMock;
    }

    render() {
        const items = this._get_items();

        return `
        <div class="${COMPONENT_CSS}">
            <ul class="${CSS.ul}" id="${CSS.ul}">
                ${items}
            </ul>
        </div>
        `;
    }

    _get_items() {
        let items = '';
        this._items.forEach(item =>
            items += `<li class="${CSS.li}">${item.name}</li>`
        );
        return items;
    }

    set_events() {
        const list = document.getElementById(CSS.ul);
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
        const list = document.getElementById(CSS.ul);

        for (let item of list.children) {
            item.classList.remove(CSS.li_active);
        }

        target.classList.add(CSS.li_active);
    }
}

export default QuizList;
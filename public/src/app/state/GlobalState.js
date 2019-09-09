class GlobalState {
    constructor() {
        this._state = {
            selected_test: '',
        };
    }

    static get_instance() {
        if (!this._instance) {
            this._instance = new this();
        }

        return this._instance;
    }

    get test() {
        return this._state.selected_test;
    }

    set test(test) {
        this._state.selected_test = test;
    }
}

export default GlobalState;
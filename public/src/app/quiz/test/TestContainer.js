import Test from './Test.js';

class TestContainer {
    constructor() {
        this._test = new Test();
    }

    render() {
        return `
        <div class="test-container">
            ${this._test.render()}
        </div>
        `;
    }

    set_events() {
        this._test.set_events();
    }
}

export default TestContainer;
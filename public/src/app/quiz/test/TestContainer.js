import Test from './Test.js';

class TestContainer {
    constructor() {
        this._test = new Test();
    }

    render() {
        return `
        <div class="test-container">
            <h1>${this._test.render()}</h1>
        </div>
        `;
    }
}

export default TestContainer;
import {route_elements, routes} from './routes.js';
import ElementFactory from '../factory/ElementFactory.js';

class Router {
    constructor(root_element) {
        this._root = root_element;
    }

    listen_url_change() {
        window.onhashchange = () => {
            this.change_route();
        }
    }

/*    has_url() {
        return !!location.hash;
    }*/

    static get current_url() {
        return location.hash;
    }

    get selected_element() {
        return route_elements[location.hash];
    }

    static get routes() {
        return routes;
    }

    change_route() {
        ElementFactory.set_element_and_render(
            this._root,
            this.selected_element,
        );
    }
}

export default Router;
import {route_elements, routes} from './routes.js';

class Router {
    listen_url_change(callback) {
        window.onhashchange = () => {
            callback(location.hash);
        }
    }

    has_url() {
        return !!location.hash;
    }

    static get current_url() {
        return location.hash;
    }

    get selected_element() {
        return route_elements[location.hash];
    }

    static get routes() {
        return routes;
    }
}

export default Router;
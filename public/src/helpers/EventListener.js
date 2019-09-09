class EventListener {
    constructor() {
        this._observers = {};
    }

    subscribe(observer, event) {
        if (
            observer &&
            event &&
            !this._observers.hasOwnProperty(event)
        ) {
            this._observers[event] = [];
            this._observers[event].push(observer);
        } else if (observer && event) {
            this._observers[event].push(observer);
        }
    }

    notify(event, param) {
        if (event && this._observers.hasOwnProperty(event)) {
            this._observers[event].forEach(observer => {
                observer.receive(param);
            });
        }
    }
}

export default EventListener;
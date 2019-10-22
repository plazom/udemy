function createSubscribe(name) {
    return {
        next(x) {
            console.log(name, ': ', x);
        },
        error(err) {
            console.log('Error: ', x);
        },
        complete() {
            console.log(name, ' completed');
        }
    }
}

Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
    //.map(x => x.target.value)
    .pluck('target', 'value')
    .subscribe(createSubscribe('map'));
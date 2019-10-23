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


Rx.Observable.interval(1000)
    .buffer(Rx.Observable.fromEvent(document, 'click'))
    .map(x => x.length)
    .subscribe(createSubscribe('buffer'));
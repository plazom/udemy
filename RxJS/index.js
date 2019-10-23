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


Rx.Observable.range(1, 3)
    .map(x => x + 1)
    .let(observer => observer.map(x => x * x))
    .subscribe(createSubscribe('let'));
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

//Rx.Observable.interval(500)
//    .skipWhile(x => x < 5)
//    .takeWhile(x => x < 13)
//    .subscribe(createSubscribe('takeWhile'));

Rx.Observable.interval(500)
    .skipUntil(Rx.Observable.timer(3000))
    .takeUntil(Rx.Observable.timer(5000))
    .subscribe(createSubscribe('skipUntil'));
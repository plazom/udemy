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
//    .take(15)
//    .subscribe(createSubscribe('interval'));
//
//Rx.Observable.timer(4000, 500)
//    .take(10)
//    .subscribe(createSubscribe('timer'));

Rx.Observable.range(3, 6)
    .subscribe(createSubscribe('range'));
function createSubscribe(name) {
    return {
        next(x) {
            console.log(name, ': ', x);
        },
        error(err) {
            console.log('Error: ', x);
        },
        complete() {
            console.log(name, ': Completed.');
        }
    }
}

// const s1$ = Rx.Observable.interval(1000).map(x => 'Stream 1: ' + x);
// const s2$ = Rx.Observable.interval(500).map(x => 'Stream 2: ' + x);
//
// Rx.Observable
//     .merge(s1$, s2$)
//     .take(12)
//     .subscribe(createSubscribe('merge'));

// Rx.Observable.range(1, 2) // 1, 2, 3
//     .map(x => Rx.Observable.range(1, 3))
//     .mergeAll()
//     .subscribe(createSubscribe('mergeAll'));


Rx.Observable.range(1, 3)
    .map(x => Rx.Observable.range(x, 3))
    .concatAll()
    .subscribe(createSubscribe('concatAll'));
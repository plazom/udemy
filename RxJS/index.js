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
    .concatMap((x, i) => {
        return Rx.Observable.interval(100)
            .take(x)
            .map(q => i)
    })
    .subscribe(createSubscribe('concatMap'))
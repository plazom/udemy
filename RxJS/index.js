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


const t1$ = Rx.Observable.timer(1000, 2000);
const t2$ = Rx.Observable.timer(2000, 2000);
const t3$ = Rx.Observable.timer(3000, 2000);
const t4$ = Rx.Observable.timer(4000, 2000);

Rx.Observable
    .combineLatest(t1$, t2$, t3$, t4$)
    .take(10)
    .subscribe(createSubscribe('combineLatest'));


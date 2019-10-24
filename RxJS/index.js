function createSubscribe(name) {
    return {
        next(x) {
            console.log(name, ': ', x);
        },
        error(err) {
            console.log(name, ': ', x);
        },
        complete() {
            console.log(name, ': Completed.');
        }
    }
}

const s1$ = Rx.Observable.throw(new Error('Что-то пошло не так!'));
const s2$ = Rx.Observable.interval(500).take(2);

s1$.onErrorResumeNext(s2$)
    .subscribe(createSubscribe('onErrorResumeNext'));
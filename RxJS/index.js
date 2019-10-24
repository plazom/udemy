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

const subject$ = new Rx.AsyncSubject();


subject$.next(1);
subject$.next('WFM');
subject$.complete();

subject$.subscribe(createSubscribe('async'));


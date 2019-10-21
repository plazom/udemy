var stream$ = Rx.Observable.create(function(observer) {
    observer.next('One');

    setTimeout(function() {
        observer.error('Error');
    }, 5000);

    setTimeout(function() {
        observer.next('2 secs');
    }, 2000);

    observer.next('Two');
});


stream$
    .subscribe(
        function(data) {
            console.log('subscribe', data);
        },
        function(err) {
            console.log('Error'. err);
        },
        function() {
            console.log('Completed');
        }
    );
let fib = {
    *[Symbol.iterator]() {
        let cur = 1, pre = 0;
        for (;;) {
            [cur, pre] = [cur + pre, cur];
            yield cur;
        }
    }
};


for (let n of fib) {
    if (n > 3000) break;
    console.log(n);
}
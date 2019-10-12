let fib = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return {value: cur, done: false};
            }
        }
    }
};

for (let n of fib) {
    if (n > 1500) break;
    console.log(n);
}
const myNumber: number = 10;
const numberArray: number[] = [10, 20, 30, 40];

function log(str: string): void {
    console.log(str);
}

class User<T> {
    constructor(private name: string, private age: number) {}
}
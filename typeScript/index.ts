function genericGetter<T>(data: T): T {
    return data;
}

let newGenericFunction: <T>(data: T) => T = genericGetter;

// =============================================

class Multiply<T extends number | string> {
    constructor(private a: T, private b: T) {}

    public getResult(): number {
        return +this.a * +this.b;
    }
}

const mNum = new Multiply<number>(10, 5);
console.log('Number: ', mNum.getResult());

const mStr = new Multiply<string>('50', '60');
console.log('String: ', mStr.getResult());


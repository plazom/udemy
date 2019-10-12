class Car {
    constructor(name) {
        console.log('Car constructor');
        this.name = name;
    }

    logName() {
        console.log('Car name is: ', this.name);
    }
}

class BMW extends Car {
    constructor(name) {
        super(name);

        console.log('BMW constructor');
    }

    logName() {
        super.logName();
    }
}

let bmw = new BMW('x6');
bmw.logName();
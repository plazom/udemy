export class CarsService {
    cars = [
        { name: 'Ford', isSold: true },
        { name: 'Mazda', isSold: false },
        { name: 'Bently', isSold: false }
    ];

    addCar(name: string) {
        this.cars.push({
            name: name,
            isSold: false
        });
    }
}
// interface ILength {
//     length: number;
// }
//
// function getLength(variable: ILength): void {
//     console.log('getLength', variable.length);
// }
//
// const box = {
//     name: 'WFM',
//     length: 20
// };
//
// getLength(box);
// getLength([1, 2, 3]);


interface IUser {
    name: string;
    age?: number;
    logInfo(info: string): void;
}

interface IGetYear {
    getYear(): number;
}

class User implements IUser, IGetYear {
    name: string = 'user';
    job: string;
    newAge: number;

    logInfo(info: string): void {
        console.log(info);
    }

    getYear(): number {
        return 200;
    }
}


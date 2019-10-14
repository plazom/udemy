type User = {name: string, age: number};

const user: User = {
    name: 'WFM',
    age: 20
};

function logUser(user: User): void {
    console.log(user.name + ' ' + user.age);
}

logUser(user);


let variable: any;
variable = 1;
variable = '';
// function logger(constrFn: Function) {
//     console.log(constrFn);
// }
//
// function shouldLog(flag: boolean): any {
//     return flag ? logger : null;
// }
//
// @shouldLog(true)
// class User {
//     constructor(public name: string, public age: number) {
//         console.log('I am  new user');
//     }
// }

// ===========================================

function addShowAbility(constructorFn: Function) {
    constructorFn.prototype.showHtml = function() {
        const pre = document.createElement('pre');
        pre.innerHTML = JSON.stringify(this);
        document.body.appendChild(pre);
    }
}

@addShowAbility
class User {
    constructor(public name: string, public age: number, public job: string) {}
}

let user = new User('WFM', 20, 'Frontend');
console.log(user);
(<any>user).showHtml();
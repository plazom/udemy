"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ===========================================
function addShowAbility(constructorFn) {
    constructorFn.prototype.showHtml = function () {
        var pre = document.createElement('pre');
        pre.innerHTML = JSON.stringify(this);
        document.body.appendChild(pre);
    };
}
var User = (function () {
    function User(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    return User;
}());
User = __decorate([
    addShowAbility
], User);
var user = new User('WFM', 20, 'Frontend');
console.log(user);
user.showHtml();

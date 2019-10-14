"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = (function () {
    function User(name, job) {
        this.name = name;
        this.job = job;
        this.age = 30;
    }
    User.prototype.getAge = function () {
        return this.age + '';
    };
    return User;
}());
var WFM = (function (_super) {
    __extends(WFM, _super);
    function WFM(job) {
        var _this = _super.call(this, 'WFM', job) || this;
        _this.age = 100;
        return _this;
    }
    WFM.prototype.getAge = function () {
        return 'Hello ' + this.age;
    };
    return WFM;
}(User));
var user = new User('WFM', 'Frontend');
var wfm = new WFM('Frontend');
var Car = (function () {
    function Car() {
        this.year = 2010;
    }
    Car.prototype.getCarYear = function () {
        return this.year;
    };
    return Car;
}());
var Mercedes = (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mercedes.prototype.logInfo = function (info) {
        console.log(info);
    };
    return Mercedes;
}(Car));
var car = new Mercedes();
console.log(car);
car.logInfo('Info');
console.log(car.getCarYear());

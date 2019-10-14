"use strict";
var User = (function () {
    function User(name, job) {
        this.name = name;
        this.job = job;
        this.age = 30;
    }
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setTitle = function (title) {
        console.log(this.isTeacher);
        this.isTeacher = title;
        console.log(this.isTeacher);
        console.log(this.getAge());
    };
    return User;
}());
var user = new User('WFM', 'Frontend');
user.setTitle(false);

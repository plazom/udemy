"use strict";
function genericGetter(data) {
    return data;
}
var newGenericFunction = genericGetter;
// =============================================
var Multiply = (function () {
    function Multiply(a, b) {
        this.a = a;
        this.b = b;
    }
    Multiply.prototype.getResult = function () {
        return +this.a * +this.b;
    };
    return Multiply;
}());
var mNum = new Multiply(10, 5);
console.log('Number: ', mNum.getResult());
var mStr = new Multiply('50', '60');
console.log('String: ', mStr.getResult());

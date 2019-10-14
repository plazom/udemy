"use strict";
var Util;
(function (Util) {
    function isEmpty(d) {
        return !d;
    }
    Util.isEmpty = isEmpty;
    function isUndefined(d) {
        return typeof d === 'undefined';
    }
    Util.PI = Math.PI;
    Util.EXP = Math.E;
})(Util || (Util = {}));
var EXP = 'TEST';
console.log(Util.isEmpty(''));
console.log(Util.isEmpty('dsa'));
console.log(Util.PI);
console.log(EXP);
console.log(Util.EXP);

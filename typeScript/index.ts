namespace Util {
    export function isEmpty(d: any): boolean {
        return !d;
    }

    function isUndefined(d: any): boolean {
        return typeof d === 'undefined';
    }

    export const PI = Math.PI;
    export const EXP = Math.E;
}

const EXP = 'TEST';

console.log(Util.isEmpty(''));
console.log(Util.isEmpty('dsa'));
console.log(Util.PI);
console.log(EXP);
console.log(Util.EXP);

// function getMyAge(age: number, prefix: string = 'WFM-'): string {
//     return prefix + age;
// }
//
// function consoleLog(str: string): void {
//     console.log(str);
// }
//
// consoleLog('Test string');
// console.log(getMyAge(40));
var testFunc = function () { return 1 + 1; };
var testFunc2 = function () {
    return 1 + 1;
};
var mySum;
function sum(num1, num2) {
    return num1 + num2;
}
mySum = sum;
console.log(mySum(15, 10));

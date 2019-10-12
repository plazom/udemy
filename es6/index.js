function logString(num, ...args) {
    console.log(num, args);
}

let spreadArray = ['WFM', 'WFM2', 'WFM3', 'WFM4'];
logString(20, ...spreadArray);
// logString(20, 'WFM', 'WFM2', 'WFM3', 'WFM4');
"use strict";
var Job;
(function (Job) {
    Job[Job["Frontend"] = 0] = "Frontend";
    Job[Job["Backend"] = 50] = "Backend";
    Job[Job["Designer"] = 51] = "Designer";
})(Job || (Job = {}));
var job = Job.Backend;
console.log(job);
var job2 = Job.Designer;
console.log(job2);

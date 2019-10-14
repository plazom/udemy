enum Job {
    Frontend,
    Backend = 50,
    Designer
}

const job: Job = Job.Backend;
console.log(job);

const job2: Job = Job.Designer;
console.log(job2);

function throwNewError(err: string): never {
    throw new Error(err);
}

let newVar;
newVar = null;

let myNumber: number | null = 20;
myNumber = null;
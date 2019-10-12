let set = new WeakSet();

let key = {};
set.add(key);
console.log(set.size);
key = null;
console.log(set.size);
let map = new WeakMap();

let key = {};
map.set(key, 'key');
console.log('Size: ', map.size);
key = null;
console.log('Size: ', map.size);
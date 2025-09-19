let arr = [true, 42, "foo", null];

console.log(arr[2]);
arr[3] = undefined;
console.log(arr);
arr.push(3.14);
console.log(arr);
arr.unshift("sss");
console.log(arr);

const hasDuplicate = (arr) => arr.length !== new Set(arr).size;
console.log(hasDuplicate([1,2,3,4,5,6,6]));
console.log(hasDuplicate([1,2,3,4,7]));
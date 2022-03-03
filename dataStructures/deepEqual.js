function deepEqual (element1, element2) {
    if(typeof element1 == 'object'|| typeof element2 == 'object') {
        if(element1 === null || element2 === null){
            return false;
        }
        if(element1.length !== element2.length) return false;
        const keys1 = Object.keys(element1); 
        const keys2 = Object.keys(element2);
        let result = true;
        for (let i = 0; i < keys1.length; i += 1) {
            if(keys1[i]!==keys2[i]){
                result = false;
            }
            if (!deepEqual(element1[keys1[i]], element2[keys2[i]])) {
                result = false 
            }
        }
        return result;
    };
    return element1 === element2;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// // → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
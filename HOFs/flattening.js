let array = [[1, 2, 3], [4, 5], [6]];
function flat(array){
return array.reduce((arr, current) => arr.concat(current), []);
}
console.log(flat(array))
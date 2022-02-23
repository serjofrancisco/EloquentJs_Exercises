function reverseArray(arr) {
    let array = [];
   for (let i = arr.length - 1 ; i >= 0; i -= 1) {
      array.push(arr[i])
    }
    return array;
}
function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i += 1) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1]
        arr[arr.length - i - 1] = temp;     
    }
    return arr;
}

// Demorei um tempo para entender essa dica de dividir por dois, mas fazendo no papel depois entendi.
// Se for até o final a função fará de novo a troca, ordenando da forma inicial. E o do meio não
// precisa ser mexido, pois ficará sempre no meio. 
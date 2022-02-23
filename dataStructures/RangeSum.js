function range(n1, n2) {
    let arr = [];
    for (let i = n1; i <= n2; i += 1) {
        arr.push(i);
    }
    return arr;
}

function sum(arr) {
    result = 0;
    arr.forEach((element) => {
        result += element
    });
    return result;
}

function rangeStep(n1, n2, step) {
    let arr = [];
    if (step > 0) {
        for (let i = n1; i <= n2; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = n1; i >= n2; i += step) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(rangeStep(10, 1, -2));
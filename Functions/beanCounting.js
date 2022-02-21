function countBs(string){
    let count = 0;
    Array.from(string).forEach((el) => {
        if(el === 'B') count += 1;
    })
    return count;
}
function countChar(string, letter) {
    let count = 0;
    Array.from(string).forEach((el) => {
        if(el === letter) count += 1;
    })
    return count;
}
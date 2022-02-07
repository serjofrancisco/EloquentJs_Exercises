function FizzBuzz(max){
    const result = []
for (let i = 1; i <= max ; i +=1) {
    let output = '';
    if(i % 3 === 0) output += 'Fizz';
    if(i % 5 === 0) output += 'Buzz';
    result.push(output || i);
}return result
};
console.log(FizzBuzz(50));
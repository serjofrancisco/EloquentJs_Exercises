function makeTriangle(size){
let count = 1;
let print = '#';
let result = '';
while(count < size){
    result += print + '\n';
    count += 1;
    print += '#';
} return result;
};
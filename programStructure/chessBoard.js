function makeChessBoard (size){
let board = "";
for (let i = 0; i < size; i+=1) {
  for (let j = 0; j < size; j+=1) {
    if ((j + i) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
};
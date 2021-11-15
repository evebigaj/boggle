const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
export const boggleAlphabet = alphabet.map(x=> {
  if(x==='Q'){return 'Qu'}
else{return x}} )

export let initialBoard = []

for(let rowIndex = 0; rowIndex<4; rowIndex++){
    let row = []
    let letterIndex = 0
  while(letterIndex<4){
      let letter = boggleAlphabet[Math.floor(Math.random()*26)]
      row.push(letter);
  letterIndex++
  }
  initialBoard.push(row)
  }



  




function stringPaths(string, board){
    board = board.map(row => row.map(x => {if(x==='Qu'){return 'Q'}
else{return x}}));
    string = string.replace('QU','Q');
    let results = []
       if(string.length==1){
        //find letter going row by row,
        //replacing the letters we've already found with 0:
        for(let rowIndex=0; rowIndex<4;rowIndex++){ 
            const letter = string
            let stringIndex = 0
            let modifiedRow = board[rowIndex]
            while(stringIndex !== -1){
               stringIndex = modifiedRow.findIndex(x => x===letter);
                if(stringIndex !=-1){
                results.push([[rowIndex,stringIndex]])}
                //replacing the letters we've already found with 0:
                modifiedRow = modifiedRow.map((x,index) => {if(index === stringIndex){
                    return 0
                }
            else{return x}})
        }}}
    
    else{ 
        let previousSubstring = string.slice(0,-1);
        let previousPaths = stringPaths(previousSubstring, board);
        //search for last letter 
        //in all boxes adjacent to previous letter
        //throw out the ones in previous path
        //and the ones outside the board:
        for(let previousPath of previousPaths){
            const previousLetterLocation = 
            previousPath[previousPath.length -1];
            const [i, j] = previousLetterLocation;
            for(let n=-1; n<=1; n++){
                for(let m=-1; m<=1; m++){
                    if(i+m>=0&&i+m<4&&j+n>=0&&j+n<4){
                        const isLetterLocation = board[i+m][j+n] === string.slice(-1);
                        const notInPreviousPath = previousPath.findIndex(x=> x[0]===i+m&&x[1]===j+n) ==-1;
                    let availableSteps = []
                    if( isLetterLocation && notInPreviousPath){
                        availableSteps.push([i+m, j+n])
                    }
                    for(let step of availableSteps){
                        let newPath = previousPath.concat([step]);
                        results.push(newPath)
                    }
                }
                }
            }
        }  
    }
    return results
    
}



export const existsStringPath = (string, board) => 
{if(stringPaths(string, board).length > 0){
    return true
}
else{return false}}




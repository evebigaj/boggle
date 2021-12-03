
//given string, and board as array of arrays,
//returns array of arrays representing paths containing string
//each array in result is itself made up of [x,y] coordinate arrays

function stringPaths(string, board){
    //dealing with 'Q' edge case
    //for display purposes, board has 'Qu'
    //for wordsearch purposes, convert it to Q
    board = board.map(row => row.map(x => {if(x==='Qu'){
        return 'Q'}
        else{return x}}));
    //NB: when we call stringPaths in App.js,
    // it's on string.toUpperCase()
    //so we can assume uppercase input: 
    string = string.replace('QU','Q');
    let results = []
       if(string.length===1){
           //next step: isn't there a cleaner method for this?
           //but first: commit changes
            //we find the letter going row by row,
            //and push its coordinates to result
            //replacing the letters we've already found with 0:
            for(let rowIndex=0; rowIndex<4;rowIndex++){ 
            //just so we remember we're looking for a single letter:
                const letter = string
                let letterIndex = 0
                let modifiedRow = board[rowIndex]

                while(letterIndex !== -1){
               letterIndex = modifiedRow.indexOf(letter);
                if(letterIndex !==-1){
                results.push([[rowIndex,letterIndex]])}
                //replacing the letters we've already found with 0:
                modifiedRow = modifiedRow.map((x,index) => {if(index === letterIndex){
                    return 0
                }
            else{return x}})
        }}}
        //recursive step:
        else{ 
            let previousSubstring = string.slice(0,-1);
            let previousPaths = stringPaths(previousSubstring, board);
            //for each previous path,
            //search for last letter of string
            //in all boxes adjacent to location of penultimate letter 
            //(i.e. adjacent to last location in previous path)
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
                        const notInPreviousPath = previousPath.findIndex(x=> x[0]===i+m&&x[1]===j+n) === -1;
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




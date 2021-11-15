const countPoints = array =>
{ 
    let total = 0
    for(let string of array){
    if(string.length === 3 || string.length === 4){
        total++
    }
    else if(string.length === 5){
        total = total +2
    }
    else if(string.length === 6){
        total = total +3
    }
    else if(string.length ===7){  
        total = total +5
    }
    else if(string.length >=8){
        total = total+11
    }
    else{console.log('Words must have 3 or more letters')}
}
return total}

export default countPoints


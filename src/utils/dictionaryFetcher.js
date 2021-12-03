//you'll need to get your own key from https://dictionaryapi.com/products/api-collegiate-dictionary 
import {key} from '../private/key'


const fetchWord = (word) => {
  
    
   return fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${key}`)
    .then(
    response => {
    if(response.ok){ 
        return response.json()
    }
}
).then( 
    data => {
      //for some non-existent words, 
      //Merriam-Webster API returns array of words you might have meant
      // so this conditional rules out that possibility
      //because there typeof data[0]==="string"
      if(typeof data[0] === "object"){
    return true}
      else{
    return false}
    })
    .catch(error => Promise.reject())
}


export const asyncFetchWord = async (word) => {
  const result = await fetchWord(word);
  return result
}

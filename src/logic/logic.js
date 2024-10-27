 export function partialAnagram(source, word){

    let dictionary = {};
    for (let letter of source){
        if(!dictionary[letter]){
            dictionary[letter] = 0
        }
        dictionary[letter] += 1
    }
    

    for(let letter of word){
        if(!dictionary[letter]){
            return false
        }
        dictionary[letter] -= 1;
    }

    return true

}
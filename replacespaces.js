//function to replace all spaces in a word or sentence
function replaceSpaces(any){
    let spaces = /\s+/g  // regex to match
    let newWord = any.replace(spaces, "%20")
   return newWord
}
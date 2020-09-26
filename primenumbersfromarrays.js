/**function to check primeNumbers from an array
 * parameter must be an array
 * 
 **/

function OnlyPrimeNumbers(any){
     let primeNumbers = any.filter((elements)=>{
        
  if(elements == 2 || elements % 2 == 1){ return elements}//check if a number is 2 or divisible by 2 without a remainder
     else{/*ignore and enjoy yourself....lol*/ }
})
return primeNumbers
}


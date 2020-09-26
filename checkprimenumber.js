 //function to check prime number
 function PrimeNumber(number){
	number = prompt('enter any number')// or a variable can be passed instead of prompt method
	var x = parseInt(number)
	

  if(x==2 || x % 2 == 1){ //check if a number is 2 or divisible by 2 without a remainder
   return true
  }else{
      return false
  }
}
PrimeNumber()
//function to check and return sums of all even numbers and odd number from an array 
function EvenAndOdd(anyArray){  



//check and return only even numbers
let evenNumbers = anyArray.filter(function(item){
    if(item % 2==0){
        return item 
    }else{//do nothing
        }
    })


//check and return only odd numbers
let OddNumbers = numbers.filter(function(item){
    if(item % 2==1){
        return item 
    }else{
        // do nothing
        }
    })

    evenNumbers = evenNumbers.reduce((sum, InitialValue) => { return sum + InitialValue }, 0) //sum of all even numbers
    OddNumbers = OddNumbers.reduce((sum, InitialValue) => { return sum + InitialValue }, 0) //sum of all odd numbers
    
    return [evenNumbers , OddNumbers]
}
 







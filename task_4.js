/*
Create a password validator function that takes in the password as its argument and returns an integer value you can evaluate to determine the password strength. Using the following validators:
0 -> very weak e.g. a password with only strings
1 -> weak e.g. a password with only numbers
2 -> strong e.g. a password containing strings and numbers
3 -> very strong e.g. a password containing strings, numbers and special characters (!,@,#,$,%, etc)
*
*/
function validatePassword(any){

    let status = ['Very Weak', 'Weak', 'Strong', 'Very Strong']



    const stringsOnlyOnly = /\d+\W+/g // 

    const numbersOnly = /[a-z]|\W+/g

    const strAndNumbers = /\w+/g

    const allPresent =  /(\w)+\W+/g

    let response = undefined
    
    response = stringsOnlyOnly.test(any);
    if(response == false){
        return status[0] //0 -> very weak e.g. a password with only strings
    }else{

    }

    response = numbersOnly.test(any);
    if(response == false){
        return status[1] //1 -> weak e.g. a password with only numbers
    }

     response = strAndNumbers.test(any);
    if(response == true){
        let checkForSpecialChar = /\W+/g

        let response2 = checkForSpecialChar.test(any)
        if(response2 == false){
            return status[2] //2 -> strong e.g. a password containing strings and numbers

        }

        
    }



    response = allPresent.test(any);
    if(response == true){
        return status[3] //3 -> very strong e.g. a password containing strings, numbers and special characters (!,@,#,$,%, etc)
    }

    return response

}



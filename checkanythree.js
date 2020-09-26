
 /**
  * 
  * @param {integer} a 
  * @param {Array} b  
  */

function checkAnyThree(a, b=[1, 2, 3, 4]){
    let part = b.slice(0, 3)
    let sum = part.reduce((total, value)=> {
        return total + value;
    })
    if(sum === a){
        return part;
    }else{
        return -1
    }
}



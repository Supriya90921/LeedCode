
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {

    return function() {
     
      n=n+1;
       return n-1;
       
    };
  
};


//2nd approch is

function createCounter(start) {
  let count = start;
  return function() {
    return count++;
  }
}

 

 

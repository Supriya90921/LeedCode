
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe: (val2) => { 
            if(val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
        if(val === val2) throw new Error("Equal");
        else return true;
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */


//alternative
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

function toBe(val2)
{ 

if(val2 === val) return true;
else throw new Error ("Not Equal");

}
function notToBe(val3)
{
    if(val !== val3) return true;
    else throw new Error("Equal");
}

return{toBe, notToBe}
    
}

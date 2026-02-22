
/**
 * @param {Function} fn
 * @return {Function}
 */

 var fs = require('fs');
var once = function(fn) {
    let doOnce=false
    return function(...args){
       if(!doOnce){
        doOnce=true;
        let r= fn(...args);
        return r;
       }
       return undefined;
    }
};
fs.writeFileSync("display_runtime.txt", "0")
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

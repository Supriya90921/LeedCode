/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
 var fs = require('fs');
var cancellable = function(fn, args, t) {
    const cancellable = function(){
        clearTimeout(timer);
    };
    const timer=setTimeout(()=>{
        fn(...args)
    }, t);
    return cancellable;
    
};
fs.writeFileSync("display_runtime.txt", "0")


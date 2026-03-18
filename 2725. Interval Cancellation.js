
var fs=require('fs');
var cancellable = function(fn, args, t) {
  fn(...args);
 let timer = setInterval(()=> fn(...args));
  let cancelFn= () =>clearInterval(timer);
  return cancelFn;
};
fs.writeFileSync("display_runtime.txt", "0")

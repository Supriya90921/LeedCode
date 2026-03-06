function Memoize(fn)
{
  const cache={};

  return function memoize(...args)
  {
    const key=JSON.stringify(args);  //convert args array into string
    if(key in cache)
    {
      return cache[key];

    }
    cache[key]=fn(...args);
    return cache[key];
  }
}

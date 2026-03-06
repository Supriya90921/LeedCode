function Memorize(fn)
{
  const cache={};

  function Memorize(...args)
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

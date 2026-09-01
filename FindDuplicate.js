
function findDuplicate(... nums)
{


  let seen = new Set();
  let duplicate = new Set();

  for (const num of nums)
  {
    if(seen.has(num))
    {
      duplicate.add(num);
    }
    else
    {
      seen.add(num);

    }
  }



  return Array.from(duplicate);

}
console.log(findDuplicate(1,2,2,3));





//without rest operattor

function findDuplicate(nums)
{


  let seen = new Set();
  let duplicate = new Set();

  for (const num of nums)
  {
    if(seen.has(num))
    {
      duplicate.add(num);
    }
    else
    {
      seen.add(num);

    }
  }



  return Array.from(duplicate);

}
console.log(findDuplicate([1,2,2,3]));

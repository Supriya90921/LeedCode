function getFactorial(num)
{

  if(num<0)
  {
     return "Undefined";
  }

  if(num ==0 || num==1)
  {
   return(1);
  }
  
  
 let fact=1;
  for(let i= 2 ;i <= num ;i++)
  {

    fact= fact * i;

  }
return(fact);


}

console.log(getFactorial(2));





//USING RECURSSION


function factorial(num)
{

   if(num < 0)
   return "Undefined";

  if(num == 0 || num == 1)
  return 1;

  return num*factorial(num-1);

}
factorial((7));









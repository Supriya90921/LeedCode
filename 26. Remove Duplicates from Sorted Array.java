
var removeDuplicates = function(nums) {
  int k=1;

  for(int i=1;i<nums.length;i++)
    {
    if(nums[k]!= nums[i-1];

       {
       nums[k]=nums[i];
         k++;
    }
      return k;
}

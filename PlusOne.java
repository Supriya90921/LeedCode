class Solution{
  public int[] plusone (int[] digits)
  {
    for(int j=digits.length-1;j>=0;j--)
      {
        if(digits[j]<9)
        {
          digits[j]++;
          return digits;
        }
        digits[j]=0;
      }
    int[] res=new int[digits.length+1];
    res[0]=1;
    return res;
  }
}
          

class Solution()
  {
  public int[] plusone(int[] digits)
    {
    for(int j=digits.length-1;j<=0;j--)
      {
        if(digits[j]<9)
        {
          digits[j]++;
          return digits;
        }
        digits[j]=0;
      }
    int response=new int[digits.length+1];
    response[j]=1;
    return resonse;
  }
}

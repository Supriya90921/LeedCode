class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        double median=0;
        int totalLength = nums1.length + nums2.length;
        int[] nums3 =new int[totalLength]; 
         System.arraycopy(nums1, 0, nums3, 0, nums1.length);
        // Copy elements from nums2 into nums3, starting after the last element of nums1
         System.arraycopy(nums2, 0, nums3, nums1.length, nums2.length);
        Arrays.sort(nums3);
        int s= nums3.length;
        for(int i=0 ;i<=s;i++)
        {
         if ((s % 2)!=0)
         {
            median=nums3[s/2];
         }
           
         else
         {
             median= (float)(nums3[s/2] + nums3[s/2-1])/2.0;
        
        }
        
        }
         return median;
    }

}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array
   if (nums1.length > nums2.length) {
       return findMedianSortedArrays(nums2, nums1);
   }

   const m = nums1.length;
   const n = nums2.length;
   let low = 0, high = m;

   while (low <= high) {
       const partitionX = Math.floor((low + high) / 2);
       const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

       const maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
       const minRightX = (partitionX === m) ? Infinity : nums1[partitionX];

       const maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
       const minRightY = (partitionY === n) ? Infinity : nums2[partitionY];

       if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
           // Found the correct partition
           if ((m + n) % 2 === 0) {
               return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
           } else {
               return Math.max(maxLeftX, maxLeftY);
           }
       } else if (maxLeftX > minRightY) {
           // Move towards left in nums1
           high = partitionX - 1;
       } else {
           // Move towards right in nums1
           low = partitionX + 1;
       }
   }
};
/**
 * @param {number[]} height
 * @return {number}
 */
 // logic
 // left and right ptr
 // traverse from start to end and end to start
 // check min(left and right), compute water stored between left and right and store in a storage val
 // if left is lesser than right move left ahead else move right back
 // again check for the water stored between if greater than storage update the storage
 // repeat till index of left < index of right
 
 var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
  
    while (left < right) {
      const h = Math.min(height[left], height[right]);
      const w = right - left;
      max = Math.max(max, h * w);
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
  
    return max;
  };
  
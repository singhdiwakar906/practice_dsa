var rotate = function(nums, k) {
    k = k % nums.length; 

    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };

    reverse(0, nums.length - 1);       
    reverse(0, k - 1);                 
    reverse(k, nums.length - 1);      
};
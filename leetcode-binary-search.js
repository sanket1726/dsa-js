// Search in Rotated Sorted Array (JavaScript)
var twoSum = function(nums, target) {
    let min = 0;
    let max = nums.length;
    let middle = 0;
    let bufferMax=0;
    for(let i = 0 ; i< nums.length ; i++){
      if(nums[i]>nums[i+1]) {
        bufferMax = i
        break;
      }
    }
    
    if(target>=nums[0] && target<=nums[bufferMax]){
      max = bufferMax
    }
    if(target<nums[0]){
      min = bufferMax
    }
    
    while(min<max){
        middle = Math.floor((min+max)/2)
        if(nums[middle] === target) 
            return middle
        
        if(nums[middle]> target) 
            max=middle+1
        else
            min=middle
    }
    
    return -1
};

const res = twoSum([6,7,8,1,2,3,4,5],8)

console.log(res)

// O(n2)

function AddTwoNumbers(nums, target){
    length= nums.length

   for(let i=0; i< length; i++){
    for(let j=1; j< length; j++){
        console.log(i,j);
        if(nums[i] + nums[j] === target){
            return [i,j]
        }
    }
   }

}

console.log("answer:" +  AddTwoNumbers([2,3,4,5,6,7,8],7))  //target= 7,  0,5

// use objects
function optimisedTwoSum(nums, target){
    let obj= {};
    let length= nums.length 
    for(let i=0;i< length; i++){
let found= target- nums[i];
if(obj[found]){
    return [i, obj[found]]
}
    obj[nums[i]] =i
    }
}
console.log(optimisedTwoSum([ 3, 4, 5, 6, 7, 8], 6));

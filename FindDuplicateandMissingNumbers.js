// function findDuplicateandMissing(arr){

// //find all duplicates
// arr.sort((a,b)=>a-b);
// for(let i=0;i<arr.length;i++){
//     if(arr[i]=== arr[i+1]) console.log(arr[i]);
// }
// //find missing
// for(let i=0;i<arr.length-1;i++){
//     console.log(arr[i]);
//     if(!arr.includes(arr[i]+1)) console.log("sequential numbers not found");
// }
// }

function  printTwoElements(arr,size)
   {
    var i;
       console.log("The repeating number");
            
    for (i = 0; i < size; i++)
    {
        var abs_value = Math.abs(arr[i]);
        if (arr[abs_value - 1] > 0)
            arr[abs_value - 1] = -arr[abs_value - 1];
        else
            console.log(abs_value);
    }

    return abs_value;
}
printTwoElements([5,5,1,2,7,36],5)
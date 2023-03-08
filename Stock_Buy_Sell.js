function maximiseProfit(arr){
let maxProfit=0;
let currProfit=0;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length;j++){
            currProfit= arr[j]- arr[i]
            maxProfit= Math.max(currProfit,maxProfit)
        //  console.log(maxProfit);
        }
    }
    return maxProfit;
}

// console.log(maximiseProfit([7,6,4,3,1]))

function optimiseMaxProfit(arr){
    let maxProfit=0;
    let minPrice=9999999;
    for(let i=0; i<arr.length; i++){
    minPrice= Math.min(minPrice,arr[i])
    console.log("min", minPrice);
    maxProfit= Math.max(maxProfit, arr[i]- minPrice)
    console.log("max", maxProfit);
    }
    return maxProfit;
}

console.log(optimiseMaxProfit([7,1,5,3,6,4]))

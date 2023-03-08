

function swap(e1,e2){
    return [e1,e2]= [e2,e1];
}
function mergeSortedArrays(arr1,arr2){

    for(let i=0;i<arr1.length;i++){
        if(arr1[i]>arr2[0]){
            let temp= arr1[i];
            arr1[i]= arr2[0];
            arr2[0]= temp;
        }
        arr2.sort(function(a, b){return a-b});
    }
    return [arr1,arr2]
}

console.log(mergeSortedArrays([1 ,4 ,7 ,8 ,10],[9 ,3 ,2] ))



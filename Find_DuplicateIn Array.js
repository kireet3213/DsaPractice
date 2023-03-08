function findDuplicate(arr){

    //sort the given array

    arr.sort((a,b)=>{
        return a-b;
    })
    for(let i=0;i<arr.length;i++){
        if(arr[i]=== arr[i+1]){
            console.log("duplicate", arr[i]);
        }
    }
}

findDuplicate([1,2,3,4,4,1,1])
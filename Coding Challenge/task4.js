// Find intersection of two arrays
let arr1 = [1,2,3,4,5,6];
let arr2 = [1,3,5,7];
let tempArr = [];
for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i]===arr2[j]){
            tempArr.push(arr1[i]);
        }
    }
}
console.log("Intersection of two arrays: ",tempArr);


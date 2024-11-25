// Longest word from the given text
let str = "This is a coding challenge for the interview process";
let arr = str.split(" ");
let tempArray = [];
let maxLength =0;
for(let i=0; i<arr.length; i++){
    if(arr[i].length > maxLength){
        tempArray = [arr[i]];
        maxLength = arr[i].length;
    }
    else if (arr[i].length === maxLength){
        tempArray.push(arr[i]);
    }
}
console.log("Longest words:", tempArray);
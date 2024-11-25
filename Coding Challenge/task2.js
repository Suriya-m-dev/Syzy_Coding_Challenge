// From the given array of integers, finfd the largest sum of 3 integers
let arr = [1, 5, 8, 6, 7, 9, 9, 9];

// To find 1st largest number
let maxInt = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxInt) 
    maxInt = arr[i];
}

// To find 1st largest number
let maxInt2 = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxInt2 && arr[i] < maxInt) 
    maxInt2 = arr[i];
}

// To find 1st largest number
let maxInt3 = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxInt3 && arr[i] < maxInt2 && arr[i] < maxInt) 
    maxInt3 = arr[i];
}
console.log( "Largest sum of 3 digits:",maxInt,"+",maxInt2,"+",maxInt3,"=",maxInt + maxInt2 + maxInt3 );

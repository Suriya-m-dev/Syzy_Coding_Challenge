// Find vowels in a word
let str = "Challenge";
let arr = str.split('');
let vowels = [];
for(let i=0; i<arr.length; i++){
    if(arr[i]==='a' || arr[i]==='e' || arr[i]==='i' || arr[i]==='o' || arr[i]==='u'){
        vowels.push(arr[i]);
    }
}
console.log("Vowels in the given word: ",vowels);
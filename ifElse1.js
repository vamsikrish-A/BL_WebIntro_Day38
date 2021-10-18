
var random1 = Math.floor(Math.random() * 1000) % 999;
var random2 = Math.floor(Math.random() * 1000) % 999;
var random3 = Math.floor(Math.random() * 1000) % 999;
var random4 = Math.floor(Math.random() * 1000) % 999;
var random5 = Math.floor(Math.random() * 1000) % 999;

console.log("Random 3 Digit number-1: "+random1);
console.log("Random 3 Digit number-2: "+random2);
console.log("Random 3 Digit number-3: "+random3);
console.log("Random 3 Digit number-4: "+random4);
console.log("Random 3 Digit number-5: "+random5);

console.log("Maximum value :"+ Math.max(random1, random2, random3, random4, random5));
console.log("Maximum value :"+ Math.min(random1, random2, random3, random4, random5));

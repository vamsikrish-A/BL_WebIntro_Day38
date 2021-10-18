const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const FIVE = 5;
const SIX = 6;
const SEVEN = 7;
const EIGHT = 8;
const NINE = 9;

var singleDigit = Math.floor(Math.random() *10) %9;

if(singleDigit == 1) {
    console.log("ONE");
} else if (singleDigit == 2) {
    console.log("TWO");

}else if (singleDigit == 3) {
    console.log("THREE");

}else if (singleDigit == 4) {
    console.log("FOUR");
}else if (singleDigit == 5) {
    console.log("FIVE");
} else if (singleDigit == 6) {
    console.log("SIX");
} else if (singleDigit == 7) {
    console.log("SEVEN");
}else if (singleDigit == 8) {
    console.log("EIGHT");
} else {
    console.log("NINE");
}
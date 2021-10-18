const HEADS = 0;
const TAILS = 1;

var flipCoin = Math.floor(Math.random() * 10) %2;

if (flipCoin == 0){
    console.log("Heads It is..")
} else {
    console.log("Tails it is..")
}
const Monday = 1;
const tuesday = 2;
const wednesday = 3;
const thrusday = 4;
const Friday = 5;
const Saturday = 6;
const Sunday = 7;

var weekDays = Math.floor(Math.random() * 10) % 7;

if(weekDays == 1) {
    console.log("Monday");
} else if (weekDays == 2) {
    console.log("tuesday");

}else if (weekDays == 3) {
    console.log("Wednesday");

}else if (weekDays == 4) {
    console.log("Thrusday");
}else if (weekDays == 5) {
    console.log("Friday");
} else if (weekDays == 6) {
    console.log("Saturday");
} else {
    console.log("Sunday");
}
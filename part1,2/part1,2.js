
var massMark = 78;
var heightMark = 1.69;
var massJohn = 92;
var heightJohn = 1.95;
var massMark2 = 95;
var heightMark2 = 1.88;
var massJohn2 = 85;
var heightJohn2 = 1.76;


var MarkBMI = massMark/(heightMark**2);
var JohnBMI = massJohn/(heightJohn**2);
var MarkBMI2 = massMark2/(heightMark2**2);
var JohnBMI2 = massJohn2/(heightJohn2**2);

console.log("JohnBMI = " + JohnBMI);
console.log("MarkBMI = " + MarkBMI);
console.log("JohnBMI2 = " + JohnBMI2);
console.log("MarkBMI2 = " + MarkBMI2);

var markHigherBMI = MarkBMI > JohnBMI;
console.log(markHigherBMI);
var markHigherBMI2 = MarkBMI2 > JohnBMI2;
console.log(markHigherBMI2);

//part2
 if (markHigherBMI) {
   console.log("MarkBMI("+MarkBMI+")cao hon JohnBMI("+JohnBMI+")");
 } else {
    console.log("JohnBMI("+JohnBMI+ ") cao hon MarkBMI("+MarkBMI+")");
 }

 if (markHigherBMI2) {
   console.log("MarkBMI2("+MarkBMI2+")cao hon JohnBMI2("+JohnBMI2+")");
} else { 
     console.log("JohnBMI2("+JohnBMI2+ ") cao hon MarkBMI2("+MarkBMI2+")");

}
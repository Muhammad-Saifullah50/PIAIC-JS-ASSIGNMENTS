// Percentage Calculator

alert("Enter your marks for 6 subjects out of 100")

let val1 = prompt("Enter your English marks")
let val2 = prompt("Enter your Urdu marks")
let val3 = prompt("Enter your Islamiat marks")
let val4 = prompt("Enter your Chemistry marks")
let val5 = prompt("Enter your Physics marks")
let val6 = prompt("Enter your Math marks")

let course1 = parseInt(val1);
let course2 = parseInt(val2);
let course3 = parseInt(val3);
let course4 = parseInt(val4);
let course5 = parseInt(val5);
let course6 = parseInt(val6);

let obtainedMarks = course1 + course2 + course3 + course4 + course5 + course6
 
let totalMarks = 600

let result = "Your percentage is " + (obtainedMarks * 100) / totalMarks + "%"

alert(result)




var a = prompt("Enter your full name: ");
var b = prompt("Enter your address: ");
var c = prompt("Enter your phone number: ");
var pt = c ? parseInt(c) : 0;
var d = prompt("Enter your Email Id: ");
var uni = prompt("Enter your university name: ");
document.write("<h1>Myself: </h1>" + (a ? a : ""));
document.write("<br>");
document.write("<br>");
document.write("<h1>Address: </h1>" + (b ? b : ""));
document.write("<br>");
document.write("<br>");
document.write("<h1>Phone Number: </h1>" + pt);
document.write("<br>");
document.write("<br>");
document.write("<h1>Email Id: </h1>" + (d ? d : ""));
document.write("<br>");
document.write("<br>");
document.write("<h1>Objective: </h1>");
document.write("<h1>Highly motivated computer science student seeking an internship position to apply and further develop my technical skills in software development and gain real-world experience in the industry.</h1>");
document.write("<br>");
document.write("<br>");
document.write("<h1>Education: </h1>");
document.write("<h1>Bachelor of Science in Computer Science</h1>" + "<h1>University: </h1>" + (uni ? uni : ""));
document.write("<br>");
document.write("<br>");
var choice = prompt("1) Python. 2) Java. 3) Python, Java. 4) none. \nEnter choice to select your skills: ");
if (choice === "1") {
    document.write("<h1>I am proficient in the Python programming language...</h1>");
    document.write("<br>");
}
else if (choice === "2") {
    document.write("<h1>I am proficient in the Java programming language...</h1>");
    document.write("<br>");
}
else if (choice === "3") {
    document.write("<h1>I am proficient in the Python programming language...</h1>");
    document.write("<br>");
    document.write("<h1>I am proficient in the Java programming language...</h1>");
    document.write("<br>");
}
else if (choice === "4") {
    document.write("<br>");
}
else {
    alert("Choice Invalid!!");
}
var choice3 = prompt("1) C. 2) C++. 3) C, C++. 4) none. \nEnter choice to select your skills: ");
if (choice3 === "1") {
    document.write("<h1>I am proficient in the C programming language...</h1>");
    document.write("<br>");
}
else if (choice3 === "2") {
    document.write("<h1>I am proficient in the C++ programming language...</h1>");
    document.write("<br>");
}
else if (choice3 === "3") {
    document.write("<h1>I am proficient in the C programming language...</h1>");
    document.write("<br>");
    document.write("<h1>I am proficient in the C++ programming language...</h1>");
    document.write("<br>");
}
else if (choice3 === "4") {
    document.write("<br>");
}
else {
    alert("Choice Invalid!!");
}
var choice2 = prompt("1) Freelancing. 2) Web Development. 3) Freelancing, Web Development. 4) none \nEnter your skill: ");
if (choice2 === "1") {
    document.write("<h1>I work as a freelancer...</h1>");
    document.write("<br>");
}
else if (choice2 === "2") {
    document.write("<h1>I work as a web developer...</h1>");
    document.write("<br>");
}
else if (choice2 === "3") {
    document.write("<h1>I work as a freelancer...</h1>");
    document.write("<br>");
    document.write("<h1>I work as a web developer...</h1>");
    document.write("<br>");
}
else if (choice2 === "4") {
    document.write("<br>");
}
var pro4 = prompt("Enter your other languages in which you are skilled: ");
document.write("<h1>Languages: </h1>" + (pro4 ? pro4 : ""));
document.write("<br>");
document.write("<br>");
var pro = prompt("Enter your projects' names: ");
document.write("<h1>Projects: </h1>" + (pro ? pro : ""));
document.write("<br>");
document.write("<br>");
var pro1 = prompt("Enter your work experience: ");
document.write("<h1>Work Experience: </h1>" + (pro1 ? pro1 : ""));
document.write("<br>");
document.write("<br>");
document.write("<h1>Thank you for reviewing my resume. I am available upon request.</h1>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

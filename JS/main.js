document.write("i said \"hello world\"");   // this writing a string with quotation marks
var A = "this is a string";
document.write(A);
var B = "this is getting hard" + "this makes me sad"    // This is assigning a concatenated string 
document.write(B);

var dog = "bender", cat = "fiddle", cat_2 = "duck", cat_3 = "per"   // This is assigning multiple variables
document.write(dog);

var blues = "i have the blues.";    // This is assigning the variable the color blue
var blues = blues.fontcolor("blue");
document.write(blues);
3+3                     // THis is and expression
document.write(3+3);    // This is a statement

function My_First_Function() {  // Defining a function and naming it
    var str = "This text is green!"; // defining a variable and giving it a string value
    var result = str.fontcolor("green");    // Using the font color method
    document.getElementById("Green_Text") .innerHTML = result;  // Putting the value of result into HTML element with Green_text id
}


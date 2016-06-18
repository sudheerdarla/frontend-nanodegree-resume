/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append("sudheer");

// var awesomethoughts = "I am sudheer, and udacity is awesome!";
// var funthoughts = awesomethoughts.replace("awesome", "fun");
// $("#main").append(funthoughts);

// console.log(awesomethoughts);
// console.log(funthoughts);


var formattedName = HTMLheaderName.replace("%data%", "Sudheer");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// var s = "audacity";

// var udacityizer = function(s) {  
//     // Right now, the variable s === "audacity"
//     // Manipulate s to make it equal to "Udacity"
//     // Your code goes here!
//     s = s.slice(1);
//     s = s.replace("u", "U");
    
//     return s;
// };

// // Did your code work? The line below will tell you!
// console.log(udacityizer(s));


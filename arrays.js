let skills =["JavaScript" , "Angular" , "React" , "HTML" , "CSS"];

console.log(skills);
console.log("First skill: " + skills[0]);
console.log("Third skill: " + skills[2]);
console.log("Total skills: " + skills.length);


//Adding to an array
skills.push("TypeScript");
console.log("After adding: " + skills);


//Removing last item
skills.pop();
console.log("After removing: " + skills);


//Looping through array
console.log("All my skills: ");
//forEach - just does something, no new array is created
skills.forEach(function(skill){
    console.log("- " + skill); // just prints. nothing saved in new array
});

//map - transforms every item in array
//map- creates a NEW array with transformed items
let upperSkills= skills.map(function(skill){
    return skill.toUpperCase(); // saves result into a new array
})

console.log(upperSkills);



//let cities =["San francisco" , "San Jose" , "Oakland" , "Fremont"]; 
//console.log(cities[2]);
//console.log(cities.length);
//cities.push("Palo ALto");
//console.log(cities.length);
               

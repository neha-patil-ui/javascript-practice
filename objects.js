// Objects practice
let developer ={
    name: "Neha Patil",
    city: "Bay Area",
    experience: 5,
    skills: ["JavaScript", "Angular", "React"],
    isLookingForJob: true
};

console.log(developer);
console.log("Name: " + developer.name);
console.log("City: " + developer.city);
console.log("Skills: " + developer.skills);

//Adding a new propert
developer.email= "nehap2110@gmail.com";
console.log("Email:" + developer.email);

//Updating an existing property
developer.city="San Francisco";
console.log("Updated city: " + developer.city);

//Accessing array inside object
console.log("First skill: " + developer.skills[0]);
console.log("Totals skills: " + developer.skills.length);

//Adding a new skill to the array inside object
developer.skills.push("TypeScript");
console.log("Updated skills: " + developer.skills);


//Array of objects - used in EVERY real project
let jobs=[
    {title: "Frontend Developer", company: "Google", location: "Bay Area"},
    {title: "UI Developer", company: "Apple", location: "Cupertino"},
    {title: "React Developer", company: "Meta", location: "Menlo Park"},
];

//Adding a new job
jobs.push({title: "Angular Developer", company: "Salesforce", location: "San Francisco"});
//console.log(jobs);


//Loop through all jobs
jobs.forEach(function(job){
    console.log(job.title + " at " + job.company + " - " + job.location);
});
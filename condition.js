//Conditions practice
let isLookingForJob=true;
let experienceYears=5;
let hasPortfolio=false;

if(isLookingForJob === true){
    console.log("Neha is actively job hunting !");
}else{
    console.log("Neha is not looking right now.");
}


if(experienceYears >=3){
    console.log("Qualifies for mid to senior roles.");
}
else{
    console.log("Qualifies for junior roles.");
}

if(hasPortfolio === true){
    console.log("Protfolio ready!");
}
else{
    console.log("Protfolio needed - start building!");
}

//for loop
console.log("Counting up:");
for (let i=1; i<=5;i++){
    console.log("Number: " + i);
}

//Loop through skills array
let skills=["JavaScript" , "Angular", "React", "HTML", "CSS"];

console.log("My skills: ");
for (let i=0; i <skills.length; i++){
console.log(i + 1 + " . " + skills[i]);
}

//Conditions inside loops
let jobListings = [
{title: "Frontend developer", salary: 120000, remote: true},
{title: "UI developer", salary: 85000, remote: false},
{title: "React developer", salary: 140000, remote: true},
{title: "Angular developer", salary: 95000, remote: false},
{title: "Full Stack developer", salary: 160000, remote: true},
];

console.log("Jobs that match my criteria: ");
jobListings.forEach(function(job){
    if(job.salary >= 100000 && job.remote === true){
        console.log("✅ " + job.title + " - $ " + job.salary);
    }else{
        console.log("❌ " + job.title + " - $ " + job.salary);
    }
});
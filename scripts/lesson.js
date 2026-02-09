
const firstName = "Tonnam";
const lastName = "Kavee";
const fullName = firstName + " " + lastName;


const h1 = document.querySelector("h1");
h1.textContent = fullName;


const age = 13;
const ageElement = document.querySelector("#age");
ageElement.textContent = `Age: ${age}`;


const futureAge = age + 20;
const p = document.createElement("p");
p.textContent = `In twenty years, your age will be ${futureAge} years old.`;


ageElement.after(p);

// question 1

var petArray=["cat","cow","dog"];

// question 2
console.log("cow");


// question 3

petArray.push("sheep");

// question 4

var numberOfAnimals = petArray.length;
console.log(numberOfAnimals);

// question 5

var catObject = {
    name: "Rocky",
    color: "grey",
    age: 4
}

// question 6

console.log(catObject.age);

// question 7

var catArray=[
    {
        name: "Rocky",
        color: "grey",
        age: 4
    }
];

// question 8

for(var i=0; i < catArray.length; i++) {
    console.log(catArray[i].name);
    console.log(catArray[i].color);
    console.log(catArray[i].age);
}

// question 9   

function logToConsole(keyWord){
console.log(keyWord);
}


// question 10

logToConsole("donkey");
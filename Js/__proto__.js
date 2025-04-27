
// __proto__ examples...

const parent = {
    sayHello() {
        console.log("Hello!");
    }
};

const child = {
    name: "buddy"
};

child.__proto__ = parent;

child.sayHello();


// another example;

const animal = {
    eats: true
};

const dog = {
    bark: true
}

dog.__proto__ = animal;

console.log(dog.bark);
console.log(dog.eats);


// another example with function;

const vehicle = {
    start() {
        console.log("Vehicle started");     // use a function..
    }
};

const car = {
    brand: "Tesla"
};

car.__proto__ = vehicle;
car.start();


// another Example - real life example....................

const humanName = {
    name:"1Nonly"
};

const hisHobby = Object.create(humanName);
hisHobby.hobby = "Coding";

console.log(hisHobby.name);
console.log(hisHobby.hobby);


// another example - Family role.....

const grandfather = {
    grandFatherLastName: "Jaiswal"
};

const father = {
    fatherFirstName: "Naresh"
};

const son = {
   sonFullName: "Rohan Jaiswal",
   sonAge: 22
}

father.__proto__ = grandfather;
son.__proto__ = father;

console.log("Son age is:", son.sonAge);
console.log("Father's Name:", son.fatherFirstName);
console.log("GrandFather's last name:", son.grandFatherLastName);

// --------------------------- Visual Chain -----------------------------------//
// [ son ]
//   sonAge: 22
//   __proto__ → [ father ]
//                  fatherFirstName: "Naresh"
//                  __proto__ → [ grandfather ]
//                                  grandFatherLastName: "Jaiswal"
//                                  __proto__ → [ Object.prototype ]
//                                                  __proto__ → null

// ---------------------------------------------------------------------------------^&^&^&^&^&&-------------------------------------------
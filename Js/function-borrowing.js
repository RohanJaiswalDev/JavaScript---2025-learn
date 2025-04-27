
// ==============================================Call, apply and bind:=================================================


// call:
let student1 = {
    fullName: "Rohan Jaiswal",
    gender: "Male",
}
function studentInfo(age) {
    console.log(`full Name is: ${this.fullName}, a ${this.gender} gender and his age is ${age}.`);
}

studentInfo.call(student1, 22);

// ----------------------------------***////****-------------------------------

// apply:
let student2 = {
    fullName: "Aditya Jaiswal",
    age: 22,
}
function studentDetail(course) {
    console.log(`full Name is: ${this.fullName}, his age is ${this.age} and he is interested in ${course} course.`);
}

studentDetail.apply(student2, ["Front-end developer"]);

// bind

let student3 = {
    fullName: "Priyanka Madhwal",
    age: 19,
}
function student3Detail(hobby) {
    console.log(`full Name is: ${this.fullName}, her age is ${this.age} and she likes ${hobby}.`);
}

const student3Info = student3Detail.bind(student3, "Dancing");
student3Info();
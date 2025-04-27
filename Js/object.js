// Basic object Structure
const student = {
    fullName: "Rohan Jaiswal",
    age: 22,
    contact_No: 82875493774,
    address: {
        village: "Nathupura",
        district: "Burari",
        pincode: 110084
    },
    studentInfo: function () {
        console.log("This is a StudentInfo Function.");
    }
}
console.log(student);     // Print the object
console.log(student.address.pincode);     // Print the objects inside objects

// Access methods:
console.log(`Student's Age is ${student.age}`);      // Dot Notation Method
console.log(`Student's Contact Number is ${student["contact_No"]}`);      // Bracket Notation Method

// Updating, Adding and Deleting:
student.age = 21;   // updatting (student age in object)
student.gender = "Male";   // Adding (Gender in object)
delete student.contact_No   // Deleting (contact number  in object)

// object function - calling:
student.studentInfo();

// After updating all the thing of object...
console.log(student);

// Looping through objects:

// object
const student2 = {
    fullName: "Priyanka Madhwal",
    age: 22,
    address: {
        village: "Amrit Vihar",
        District: "Burari",
        pincode: 110084
    }
}
// How we go through each property (key) and get its value?
for (let key in student2) {
    console.log(key);         // showing only property....
    console.log(student2[key]);     // showing property with values....
}
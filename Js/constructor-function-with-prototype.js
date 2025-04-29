
// Constructor Function with Prototype....



// ******************* (ES5) CLASS  ************************* //

function Student1(id, fullName, course) {
    this.id = id;
    this.fullName = fullName;
    this.course = course;
}

Student1.prototype.getFullDetail = function () {
    return `My id is ${this.id}, his full name is ${this.fullName} and Course name is ${this.course}.`;
};

const studentDetail = new Student1("001", "Rohan Jaiswal", "Full-Stack");
console.log(studentDetail.getFullDetail());

// ******************* (ES6) CLASS ************************* //

class Student2 {
    constructor(id, fullName, course) {
        this.id = id;
        this.fullName = fullName;
        this.course = course;
    }

    getFullInfo() {
        return `My id is ${this.id}, her full name is ${this.fullName} and Course name is ${this.course}.`;
    }
}

const studentInfo = new Student2("002", "Priyanka Madhwal", "Full-Stack");
console.log(studentInfo.getFullInfo());


// ***************** Another Example - using ES6 class ********************* //     (BEST ONE IS THIS - ES6)  
class Employee{
    constructor(employee_id, employee_name){
            this.employee_id = employee_id;
            this.employee_name = employee_name;
    }

    getEmployeeInfo(){
        return `The Employee id is : ${this.employee_id} and  his Full Name is ${this.employee_name}`;
    }
}

const EmployeeDetail = new Employee("001", "Gaurav Gusain");
console.log(EmployeeDetail.getEmployeeInfo());

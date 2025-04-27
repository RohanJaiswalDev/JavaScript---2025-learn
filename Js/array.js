//  ================================================= Array and its methods and Properties..=============================================//

// Array:
let studentSubjects = ['Science', 'Mathematics', 'English'];
console.log(studentSubjects[0]);                                                     // To find the 1st index of Array..
console.log(studentSubjects[studentSubjects.length - 1]);            // To find the last index of Array..

console.log(studentSubjects.length);                                            // To find the length of Array..

studentSubjects.push('Hindi');                                                       // To add more element in the Array..
console.log(studentSubjects);

studentSubjects.pop();                                                                // To add more element in the Array..
console.log(studentSubjects);                       

studentSubjects.shift();                                                              // To removes the first element of the array....
console.log(studentSubjects);  

studentSubjects.unshift();                                                        // To Add Elements to the beginning of the array....
console.log(studentSubjects);

studentSubjects.splice(1,1,'Social-Science');                          // Adds or removes elements at a specific index.
console.log(studentSubjects);
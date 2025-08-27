const accountID = 144553
let accountEmail = "itachi@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountID = 2 // not allowed

accountEmail = "sid@google.com"
accountPassword = "Lucknow"

console.log(accountID);

console.table([accountEmail, accountID, accountPassword, accountCity])
let a = 4
{
    console.log(a);
}

//Number

let marks = 109;


//String 
let name = "Nitansh";
let subject = "Maths"; // 'Maths' // `Maths`

//template literals 
let message = `${name} got ${marks} marks out of 200 in ${subject}`;
// console.log(message);

//Boolean 
let isPassed = true; //false

//undefined and null

let abc=null;

console.log(abc)

//Objects 

const studentData = {
    name : "Siddhant",
    accountEmail : "test@test.com",
    subject : "Maths",
    marks : 109,
}

console.log(studentData.name)
console.log(studentData["accountEmail"])

//add a new key to object 
studentData.new = "this is new"

//update a key in object 
studentData.name = "newname"
console.log(studentData)

//Delete a key from object
delete studentData.marks

message = `${studentData.name} got ${studentData.marks} marks out of 200 in ${studentData.subject}`;
console.log(message);

//Array
//Collection of similar type if data which is indexed in a particular order
const names = ["Siddhant","Adarsh","WEKI"];
const allMarks = [109,108,176];

console.log(names,"\n",allMarks);

//access elements in array 
// arrayVariableName[index]
console.log(names[0]) // Siddhant
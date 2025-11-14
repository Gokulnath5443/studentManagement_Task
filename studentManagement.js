
// 💻 Student Management System
// ans:self code

 let students=[  {
    id: 1001,
    name: 'Krishna',
    age: 18,
    grade: 'A',
    course: 'CSE'
  },
  {
    id: 1002,
    name: 'Ram',
    age: 18,
    grade: 'A',
    course: 'JS'
  }]


  function addStudent() {
let qns=(prompt("You want add any one student say Yes/no:"))
if (qns==="yes"){
for (i=0;i<Infinity;i++){
let userid=Number(prompt("enter your student Id :"))
let username=(prompt("enter your student Name :"))
let userage=Number(prompt("enter your student Age :"))
let usergrade=(prompt("enter your student Grade :"))
let usercourse=(prompt("enter your student Course :"))

let newStudent={
    id:userid,name:username,age:userage,grade:usergrade,course:usercourse
}
students.push(newStudent)
console.log(`\n`)
let qn=(prompt("More student add say Yes/no:"))
console.log(`\n`)
if(qn=="no"){
    break;
}
}
console.log(students)}
  }
// ,,,,,,,,,,,,
function showStudents() {
let ques=(prompt("If you want see all the student list say Yes/no:"))
if (ques=="yes"){
let count=1
students.forEach(function(std){
 console.log( `No:${count++}`)
console.log(
    "Student ID :"+std.id ,`\n`,
    "Student Name :"+std.name,`\n`,
    "Student Age :"+std.age,`\n`,
    "Student Grade :"+std.grade,`\n`,
    "Student Course :"+std.course,`\n`)
})
}}
// ,,,,,,,,,,,,,,,,
function updateStudent() {
let quest=prompt("If you change student Grade or Course say Yes/no:")
if (quest=="yes"){
    let ID=Number(prompt("Please Enter you default student ID :"))
    let config="true"
    students.forEach(function(stds){
        
        if (stds.id==ID){
    
            stds.grade=prompt("Enter you new Grade:"),
            stds.course=prompt("Enter you new course:")
            config="false" 
        }
    })
     if(config=="true"){
        alert("Enter the correct UserId ")
        deleted()
    }
    console.log(students)
}}
// ,,,,,,,,
function deleteStudent() {
let question=prompt("If you delete student list Yes/no:")

if (question=="yes"){
function deleted(){
    let ID1=parseInt(prompt("Enter your delete student ID : "))
    let config="true"
    for(let i=0;i<students.length; i++){
        if(students[i].id==ID1){
            delete students[i]
            config="false" 
            console.log(students); 
        }
    }
    if(config=="true"){
        alert("Enter the correct UserId ")
        deleted()
    }
}
deleted()

}}
// ,,,,,,,,,,,,,,,,,,,,
function searchStudent(){
let question1=prompt("If you search any student say Yes/no:")
if (question1=="yes"){
    let ID1=Number(prompt("Please Enter you default student ID :"))
    let config="true"
    students.forEach(function(stds){
        
        if (stds.id==ID1){
     console.log(stds)
     config="false" 
        }
    })
     if(config=="true"){
        alert("Enter the correct UserId ")
        deleted()
    }
   
}
}
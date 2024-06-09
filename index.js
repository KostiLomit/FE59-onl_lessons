"use strict";
const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120, 
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3,
    }
}

///1///

const subjectsString = Object.keys(subjects).join(', ');
console.log(subjectsString);

///2///

let totalStudents = 0;
let totalTeachers = 0;

for (let subject in subjects) {
    totalStudents += subjects[subject].students;
    totalTeachers += subjects[subject].teachers;
}

console.log(`Total students: ${totalStudents}, Total teachers: ${totalTeachers}`);

///3///

const numberOfSubjects = Object.keys(subjects).length;
const middleStudentNumber = totalStudents / numberOfSubjects;
console.log(`Middle number of students in the subjects ${middleStudentNumber}`);

///4///

const entries = (Object.entries(subjects));
console.log(entries);

const newArr = entries.map(([name, info]) => {
    return {
        subject: name,
        students: info.students,
        teachers: info.teachers
    };
});

console.log(newArr);

///5///

newArr.sort((a,b) => b.teachers - a.teachers); 
console.log(newArr);
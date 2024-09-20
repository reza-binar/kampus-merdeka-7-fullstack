const students = [
    {
        name: "David Vincent Gurning",
        nickName: "David",
        class: "FSW-1",
        address: {
            province: "North Sumatera",
            city: "Medan",
        },
        education: {
            bachelor: "Universitas Teknologi Del",
        },
    },
    {
        name: "Yudriqul Aulia",
        nickName: "Yudi",
        class: "FSW-1",
        address: {
            province: "Jambi",
            city: "Jambi",
        },
        education: {
            bachelor: "Universitas Jambi",
        },
    },
    {
        name: "Iko Indra Gunawan",
        nickName: "Iko",
        class: "FSW-1",
        address: {
            province: "East Java",
            city: "Surabaya",
        },
        education: {
            bachelor: "UPN Veteran East Java",
        },
    },
    {
        name: "Dhiya Ul Faruq",
        nickName: "Faruq",
        class: "FSW-1",
        address: {
            province: "East Java",
            city: "Jember",
        },
        education: {
            bachelor: "Universitas Jember",
        },
    },
    {
        name: "Fariq Abdhe Manaf",
        nickName: "Fariq",
        class: "FSW-1",
        address: {
            province: "East Java",
            city: "Jember",
        },
        education: {
            bachelor: "Universitas Jember",
        },
    },
];

/* 
    My name is David Vincent Gurning, used to called David. I am from Medan, North Sumatera. And I am student of Universitas Teknologi Del.
    My name is Yudriqul Aulia, used to called Yudi. I am from Jambi, Jambi. And I am student of Universitas Jambi.
    My name is Iko Indra Gunawan, used to called Iko. I am from Surabaya, East Java. And I am student of UPN Veteran East Java.
*/
// The first way
// for (let index = 0; index < students.length; index++) {
//     const student = students[index]; // same to student variable below map function
//     const describeStudent = `My name is ${student.name}, used to called ${student.nickName}. I am from ${student.address.city}, ${student.address.province}. And I am student of ${student.education.bachelor}.`;
//     console.log(describeStudent);
// }

// The second way (recommended)
students.map((student) => {
    const describeStudent = `My name is ${student.name}, used to called ${student.nickName}. I am from ${student.address.city}, ${student.address.province}. And I am student of ${student.education.bachelor}.`;
    console.log(describeStudent);
});

/* 
    Print all student that from East Java
    My name is Iko Indra Gunawan, used to called Iko. I am from Surabaya, East Java. And I am student of UPN Veteran East Java.
*/
// The first way
students.map((student) => {
    if (student.address.province == "East Java") {
        const describeStudent = `My name is ${student.name}, used to called ${student.nickName}. I am from ${student.address.city}, ${student.address.province}. And I am student of ${student.education.bachelor}.`;
        console.log(describeStudent);
    }
});

// The second way
filteredStudents = students.filter((student) => {
    return (
        student.address.province == "East Java" && student.nickName == "Faruq"
    );
});
filteredStudents.map((student) => {
    const describeStudent = `My name is ${student.name}, used to called ${student.nickName}. I am from ${student.address.city}, ${student.address.province}. And I am student of ${student.education.bachelor}.`;
    console.log(describeStudent);
});

/* 
    TODO: make ascending and descending data by student name 
*/
// Asc
// students.sort((a, b) => {
//     if (a.name < b.name) {
//         return -1; // don't do anything
//     } else {
//         return 1; // swap
//     }

//     return 0; // don't do anything
// });
// console.log(students);

// Desc
students.sort((a, b) => {
    if (a.name < b.name) {
        return 1; // don't do anything
    } else {
        return -1; // swap
    }

    return 0; // don't do anything
});
console.log(students);

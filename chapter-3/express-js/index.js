const express = require("express"); // Import express with non-module
const students = require("./data/students.json"); // Import data student

/* Make/initiate expess application */
const app = express();
const port = 4000;

/* Make a routing and response */
app.get("/", (req, res) => {
    res.send(`Hello World, I am using nodemon!`);
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    // Get the id from params
    const { id } = req.params;

    // find student by id
    const student = students.find((student) => student.id == id);
    // If student has been found, it will be response the student data
    if (student) {
        res.json(student);
        return;
    }

    // If there is no student with the id that client request, it will response not found
    res.status(404).json({ message: "Student not found!" });
});

/* Run the express.js application */
app.listen(port, () => {
    console.log(`The express.js app is runing on port ${port}`);
});

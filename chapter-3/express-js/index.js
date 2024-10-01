const express = require("express"); // Import express with non-module
const students = require("./data/students.json"); // Import data student

/* Make/initiate expess application */
const app = express();
const port = 4000;

/* We need to activate body parser/reader */
app.use(express.json());

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

app.post("/students", (req, res) => {
    /* Validate the input from user */
    const { name, nickName, address, education } = req.body;
    if (!name || name == "") {
        res.status(400).json({
            message: "Name is required!",
        });
        return;
    }
    if (!nickName || nickName == "") {
        res.status(400).json({
            message: "Nickname is required!",
        });
        return;
    }
    if (!req.body.class || req.body.class == "") {
        res.status(400).json({
            message: "Class is required!",
        });
        return;
    }
    if (!address) {
        res.status(400).json({
            message: "Address is required!",
        });
        return;
    }
    if (!education) {
        res.status(400).json({
            message: "Education is required!",
        });
        return;
    }

    const { province, city } = address;
    if (!province) {
        res.status(400).json({
            message: "Province is required!",
        });
        return;
    }
    if (!city) {
        res.status(400).json({
            message: "City is required!",
        });
        return;
    }

    const { bachelor } = education;
    if (!bachelor) {
        res.status(400).json({
            message: "Bachelor is required!",
        });
        return;
    }

    /* Add data to current array students */
    const newStudent = {
        id: students + 1,
        name,
        nickName,
        class: req.body.class,
        address: {
            province,
            city,
        },
        education: {
            bachelor,
        },
    };
    students.push(newStudent);

    res.status(201).json(newStudent);
});

/* Run the express.js application */
app.listen(port, () => {
    console.log(`The express.js app is runing on port ${port}`);
});

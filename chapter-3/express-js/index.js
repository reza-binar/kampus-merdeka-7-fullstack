const express = require("express"); // Import express with non-module
const fs = require("fs");
const { z } = require("zod");
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
    // Make a validation schema
    const validateParams = z.object({
        id: z.string(),
    });

    validateParams.parse(req.params);

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
    // Validation body schema
    const validateBody = z.object({
        name: z.string(),
        nickName: z.string(),
        class: z.string(),
        address: z.object({
            province: z.string(),
            city: z.string(),
        }),
        education: z
            .object({
                bachelor: z.string().optional().nullable(),
            })
            .optional()
            .nullable(),
    });

    // Validate
    const result = validateBody.safeParse(req.body);
    if (!result.success) {
        // If validation fails, return error messages
        return res.status(400).json({
            message: "Validation failed",
            errors: result.error.errors.map((err) => ({
                field: err.path[0],
                issue: err.message,
            })),
        });
    }

    /* Add data to current array students */
    const newStudent = {
        id: students.length + 1,
        ...req.body,
    };
    students.push(newStudent);

    // TODO: save the latest data to json
    fs.writeFileSync(
        "./data/students.json",
        JSON.stringify(students, null, 2),
        "utf-8"
    );

    res.status(201).json(newStudent);
});

/* Run the express.js application */
app.listen(port, () => {
    console.log(`The express.js app is runing on port ${port}`);
});

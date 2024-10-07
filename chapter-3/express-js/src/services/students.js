const studentRepository = require("../repositories/students");

exports.getStudents = (name, nickName, bachelor) => {
    return studentRepository.getStudents(name, nickName, bachelor);
};

exports.getStudentById = (id) => {
    return studentRepository.getStudentById(id);
};

exports.createStudent = (data) => {
    return studentRepository.createStudent(data);
};

exports.updateStudent = (id, data) => {
    // find student is exist or not
    const existingStudent = studentRepository.getStudentById(id);
    if (!existingStudent) {
        return null;
    }

    // if exist, we will delete the student data
    const updatedStudent = studentRepository.updateStudent(id, data);
    if (!updatedStudent) {
        return null;
    }

    return updatedStudent;
};

exports.deleteStudentById = (id) => {
    // find student is exist or not
    const existingStudent = studentRepository.getStudentById(id);
    if (!existingStudent) {
        return null;
    }

    // if exist, we will delete the student data
    const deletedStudent = studentRepository.deleteStudentById(id);
    if (!deletedStudent) {
        return null;
    }

    return deletedStudent;
};

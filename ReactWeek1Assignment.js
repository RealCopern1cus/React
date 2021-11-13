class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students) {
        this.name = name;
        this.level = level;
        this.students = [];
    }
    registerStudent(studentToRegister) {
        if (this.students.filter(student => student.email === newStudent.email).length) {
            console.log(`${newStudent.name} is already registered to the bootcamp`);
        } else {
            this.students.push(newStudent);
            console.log(`${newStudent.name} will be registered to ${this.name}`);
        }
        return this.students;
    }
}
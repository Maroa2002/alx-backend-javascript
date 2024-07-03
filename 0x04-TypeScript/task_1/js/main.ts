import { StartOfSourceMap } from "source-map";

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): String;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): string;
}

class StudentClass implements Student{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): String {
        return this.firstName;
    }
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };


  console.log(director1);
  console.log(teacher3);

  const print_teacher = printTeacher("John", "Doe");
  console.log(print_teacher);

  const student = new StudentClass('George', 'Maroa');
  console.log(student.displayName());
  console.log(student.workOnHomework());
  
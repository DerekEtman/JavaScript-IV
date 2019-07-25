// CODE here for your Lambda Classes


class Person {
    constructor(info) {
        this.name = info.name,
            this.location = info.location,
            this.age = info.age
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty,
            this.favLanguage = instructorInfo.favLanguage,
            this.catchPhrase = instructorInfo.catchPhrase
    };
    demo(subject) {
        return `Today we are learning about ${subject}`
    };
    grade(student, subject) {
        return `${student} recieves a perfect score on ${subject}`
    };
    arbitraryGrading(){
        let positive = Math.floor(Math.random() * Math.floor(-100, 100));
        if (positive == 0) return this.arbitraryGrading();
        return positive;
    };
}

class Student extends Instructor {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground,
            this.className = studentInfo.className,
            this.favSubjects = studentInfo.favSubjects,
            this.grade = studentInfo.grade;
    }
    listsSubjects() {
        return this.favSubjects.join(", ");
    }
    prAssignment(subject) {
        return `${this.name} has submitted PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    graduate(){
        if (this.grade > 70){
            return `${this.name} is graduating!!!!`
        } else {
            return `${this.name} has some more work to do.`
        }
    }

};

class ProjectManagers extends Instructor {
    constructor(managerInfo) {
        super(managerInfo)
        this.gradClassName = managerInfo.gradClassName,
            this.favInstructor = managerInfo.favInstructor
    } //end Const
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`
    }
}


/*Instructors*/

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

/* Students*/
const abba = new Student({
    name: 'Abba',
    location: 'SmallVille',
    age: 12,
    favLanguage: 'C++',
    specialty: 'Backend',
    catchPhrase: `CATSSSS`,
    previousBackground: 'Played',
    className: 'SuperClass',
    favSubjects: ['math', 'science'],
    grade: 95,

})

const babba = new Student({
    name: 'Babba',
    location: 'Tall Town',
    age: 55,
    favLanguage: 'none',
    specialty: 'none',
    catchPhrase: `HO NO`,
    previousBackground: 'Crash Dummie',
    className: 'SuperClass',
    favSubjects: ['math', 'science'],
    grade: 54,

})

/* Project Managers */

const bill = new ProjectManagers({
    name: 'Bill',
    location: 'California',
    age: 98,
    favLanguage: 'Russian',
    specialty: 'frontend',
    catchPhrase: `YAS`,
    previousBackground: 'chef',
    gradClassName: 'Russ-class20141',
    favSubjects: ['english', 'cooking'],
    favInstructor: 'fred'

})



console.log(abba.listsSubjects());
console.log(abba.prAssignment('math'));
console.log(babba.sprintChallenge('science'));

console.log(fred.demo('underwater basket weaving'));
console.log(fred.grade(abba.name, 'dancing'));

console.log(bill.standup('#web22_chat'));
console.log(bill.debugsCode(babba.name, 'C#'));

/* Stretch */

console.log(babba.graduate());
console.log(abba.graduate());

console.log(fred.arbitraryGrading())
abstract class Person {
    name: string;

    jobTitle: string;

    constructor(name: string, jobTitle: string) {
        this.name = name;
        this.jobTitle = jobTitle;
    }

    abstract doCurrentAction(): string;
}

class Janitor extends Person {
    worksAtSchool: boolean;

    constructor(name: string, worksAtSchool: boolean) {
        super(name, "Janitor")
        this.worksAtSchool = worksAtSchool;
    }

    mopTheFloors(): void {
        console.log("Im cleaning the floors");
    }

    doCurrentAction(): string {
        return "I am cleaning the floors!"
    }
}

class Programmer extends Person {

    constructor(name: string) {
        super(name, "Programmer");
    }

    doCurrentAction(): string {
        return "I am working on the codebase!"
    }
}

// let person1 = new Person("Cooper", "Programmer");

// console.log(person1.name);

let janitor1 = new Janitor("Bert", false);
console.log(janitor1.name);
console.log(janitor1.jobTitle);
console.log(janitor1.worksAtSchool);

janitor1.mopTheFloors();

let programmer1 = new Programmer("Cooper");
console.log(programmer1.doCurrentAction());
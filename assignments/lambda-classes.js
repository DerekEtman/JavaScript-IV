// CODE here for your Lambda Classes


class Person{
    constructor(info){
        this.name = info.name,
        this.location = info.location,
        this.age = info.age
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


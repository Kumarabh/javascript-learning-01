// ------------------- object literal method

// const person = {
//     id: 101,
//     firstName: 'John',
//     lastName: 'Doe',
//     gender: 'Male',
//     getFullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// console.log(person.getFullName());

// ----------------------- object constructor method

// function Person(id, firstName, lastName, gender) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.gender = gender;
//     this.getFullName = function () {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// const john = new Person(101, 'John', 'Doe', 'Male');
// console.log(john.getFullName());

// ----------------------- object.create method

// const john = Object.create({}, {
//     id: { value: 101, enumerable: true },
//     firstName: { value: 'John', enumerable: true },
//     lastName: { value: 'doe', enumerable: true },
//     gender: { value: 'Male', enumerable: true },
//     getFullName: { value: function () { return this.firstName + ' ' + this.lastName }, enumerable: true}

// })

// console.log(john.getFullName());



// const person = {}

// person.id = 101;
// person.firstName = 'John';
// person.lastName = 'Doe';
// person.gender = 'Male';

// person.getFullName = function () {
//     return this.firstName + ' ' + this.lastName;
// }
// console.log(person);

function Person(id, firstName, lastName, gender) {

    console.log(new.target)
    if(new.target === undefined) {
        throw Error('Constructor function Can\'t be called as a regular function.')
    }
    // this = {}

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;

    // return this

}

// let john = new Person(101, 'John', 'Doe', 'Male');
// console.log(john);

let john = new Person(101, 'John', 'Doe', 'Male');
console.log(john);

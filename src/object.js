// -------------------------------- object literal
// const person = {
//     id: 101,
//     firstName: 'John',
//     lastName: 'Doe',
//     gender: 'male'
// }

// console.log(person);
// console.log(typeof person);

// --------------------------------- constructor function

// function Person (id, firstName, lastName, gender) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.gender = gender;
// }

// const john = new Person(101, 'John', 'Doe', 'Male');
// const james = new Person(101, 'James', 'Smith', 'Male');

// console.log(john);
// console.log(james);

// ----------------------------------- Object.create

// const john = Object.create({}, {
//     id: { value: 101, enumerable: true, writable: true, configurable: false },
//     firstName: { value: 'John', enumerable: true },
//     lastName: { value: 'Doe', enumerable: true },
//     gender: { value: 'Male', enumerable: true }
// })

// delete john.id;

// john.id = 105;
// console.log(john);
// console.log(Object.getOwnPropertyDescriptor(john, 'id'));



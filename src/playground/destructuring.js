// const person = {
//     name: 'Rob',
//     age: 28,
//     location: {
//         city: 'Leeds',
//         temp: 92
//     }
// }
//
// //const name = person.name;
// //const age = person.age;
//
// const {name, age} = person;
// console.log(`${name} is ${age}.`);
//
// const {temp: temperature, city} = person.location;
// console.log(`It is ${temperature} in ${city}.`);

const book = {
    title: 'Ego Book',
    author: 'Ryan',
    publisher: {

    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

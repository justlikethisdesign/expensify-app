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

// const book = {
//     title: 'Ego Book',
//     author: 'Ryan',
//     publisher: {
//         name: 'Penguin',
//     }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);

const address = [
    '1299 s Juniper Street',
    'Phili',
    'Penny',
    'HU67df'
];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);



const item = [
    'Coffee',
    '£2',
    '£3',
    '£5'
];

const [name, , med] = item;

console.log(`A medium ${name} costs ${med}`);

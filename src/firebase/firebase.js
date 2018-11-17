import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBDBcoT_BIadFj6P-gsKqe6j8oTHnzJvQE",
    authDomain: "expensify-ba061.firebaseapp.com",
    databaseURL: "https://expensify-ba061.firebaseio.com",
    projectId: "expensify-ba061",
    storageBucket: "expensify-ba061.appspot.com",
    messagingSenderId: "988298542549"
};

firebase.initializeApp(config);

const database = firebase.database();

// Child removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//Child Changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//Child Added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//
//     console.log(expenses);
// }, (e) => {
//     console.log('Error');
// })

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500 ,
//     createdAt: 345345345,
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     const sentence = `${val.name} is a ${val.job.title} at ${val.job.company}.`;
//     console.log(sentence);
// }, (e) => {
//     console.log('Error with data fetching', e);
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });
//
// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);
//
// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);
//
// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log('Error fetching data');
// });

// database.ref().set({
//     name: 'Rob',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Dev',
//         company: 'Google'
//     },
//     location: {
//         city: 'Leeds',
//         country: 'UK'
//     }
// }).then(() => {
//     console.log('Data saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });
//
// database.ref().update({
//     stressLevel: 9,
//     city: 'Seatle',
//     'job/company': 'Amazon',
// });

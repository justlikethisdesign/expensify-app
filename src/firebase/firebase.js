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

database.ref().set({
    name: 'Rob',
    age: 26,
    stressLevel: 6,
    job: {
        title: 'Dev',
        company: 'Google'
    },
    location: {
        city: 'Leeds',
        country: 'UK'
    }
}).then(() => {
    console.log('Data saved');
}).catch((e) => {
    console.log('This failed', e);
});

database.ref().update({
    stressLevel: 9,
    city: 'Seatle',
    'job/company': 'Amazon',
});

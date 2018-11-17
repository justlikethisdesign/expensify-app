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
    isSingle: false,
    location: {
        city: 'Leeds',
        country: 'UK'
    }
});

//database.ref().set('This is my data.');

database.ref('age').set(27);

database.ref('location/city').set('London');

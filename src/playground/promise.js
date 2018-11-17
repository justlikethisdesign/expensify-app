const promise = new Promise((resolve, reject) => {
    // resolve( 'This is my resolved data' );
    reject('Somethinh went wrong');
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

console.log('after');

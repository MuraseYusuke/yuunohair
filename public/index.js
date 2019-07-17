var config = {
    apiKey: "AIzaSyBE7fQjdOkbbsFzwnaMkmUHNSqb8scM-Nc",
    authDomain: "yuunohair-b93aa.firebaseapp.com",
    databaseURL: "https://yuunohair-b93aa.firebaseio.com",
    projectId: "yuunohair-b93aa",
    storageBucket: "yuunohair-b93aa.appspot.com",
    messagingSenderId: "113130972129",
    appId: "1:113130972129:web:ead5a1409939421e"
};
firebase.initializeApp(config);

console.log("firebase 起動");

var db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

var collection = db.collection('bookmarks');
var bookmarks = document.getElementById('bookmarks');

collection.get().then(snapshot => {
    snapshot.forEach(fb => {
        var li = document.createElement('li');
        li.textContent = fb.data().title + ":" + fb.data().label
        bookmarks.appendChild(li);
    })
})

console.log("firebase 終了");

// Initialize Firebase
// console.log("test");

// const admin = require('firebase-admin');
// console.log("test");

// const functions = require('firebase-functions');
// admin.initializeApp(functions.config().firebase);

// var db = admin.firestore();

// console.log("tste");

// var docRef = db.collection('header').doc('tst');

// var setAda = docRef.set({
//     first: 'ada',
//     last: 'lovelace',
//     born: 1815
// })

// var config = {
//     apiKey: "AIzaSyBE7fQjdOkbbsFzwnaMkmUHNSqb8scM-Nc",
//     authDomain: "yuunohair-b93aa.firebaseapp.com",
//     databaseURL: "https://yuunohair-b93aa.firebaseio.com",
//     projectId: "yuunohair-b93aa",
//     storageBucket: "yuunohair-b93aa.appspot.com",
//     messagingSenderId: "113130972129",
//     appId: "1:113130972129:web:ead5a1409939421e"
//   };
    
//     firebase.initializeApp(config);
    
//     var  db  =  firebase.firestore();
//     db.settings({
//     timestampsInSnapshots:  true
//     });
    
//     var  collection  =  db.collection('header');
//     var  bookmarks  =  document.getElementById('bookmarks');
//     collection.get().then(snapshot  => {
//         snapshot.forEach(fb  => {
//             console.log(fb.data().headerlogo);
//             // var  li  =  document.createElement('li');
//             // li.textContent  =  fb.data().title  +" : "+  fb.data().label  +" : "+  fb.data().url;
//             // bookmarks.appendChild(li);
//         });
//     });
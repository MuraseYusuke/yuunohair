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
        console.log(fb.data());
        var li = document.createElement('li');
        li.textContent = fb.data().title + ":" + fb.data().label
        bookmarks.appendChild(li);
    })
})

var collection = db.collection('menu');

collection.get().then(snapshot => {
    snapshot.forEach(fb => {
        var menuDiv = document.createElement('div');
        console.log(fb.data());
    })
})

console.log("firebase 終了");
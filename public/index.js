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

var db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

console.log('firebase 開始');

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

// const collection = db.collection('menu');
// const menuContents = document.getElementByClassName('menuContents');

// collection.get().then(snapshot => {
//     snapshot.forEach(fb => {
//         var menuDiv = document.createElement('div');
//         menuDiv.classList.add('menuList');
//         console.log(menuDiv);
//         console.log(fb.data());
//     })
// })

console.log("firebase 終了");
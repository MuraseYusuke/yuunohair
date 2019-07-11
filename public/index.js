// Initialize Firebase

var  config  = {
    apiKey:  "AIzaSyBE7fQjdOkbbsFzwnaMkmUHNSqb8scM-Nc",
    authDomain:  "yuunohair-b93aa.firebaseapp.com",
    databaseURL:  "https://yuunohair-b93aa.firebaseio.com",
    projectId:  "yuunohair-b93aa",
    storageBucket:  "yuunohair-b93aa.appspot.com",
    messagingSenderId:  "113130972129"
    };
    
    firebase.initializeApp(config);
    
    var  db  =  firebase.firestore();
    db.settings({
    timestampsInSnapshots:  true
    });
    
    var  collection  =  db.collection('bookmarks');
    var  bookmarks  =  document.getElementById('bookmarks');
    collection.get().then(snapshot  => {
        snapshot.forEach(fb  => {
            var  li  =  document.createElement('li');
            li.textContent  =  fb.data().title  +" : "+  fb.data().label  +" : "+  fb.data().url;
            bookmarks.appendChild(li);
        });
    });
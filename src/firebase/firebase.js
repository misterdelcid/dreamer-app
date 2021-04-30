import * as firebase from 'firebase'

//Configuring Firebase
var firebaseConfig = {
apiKey: "AIzaSyASb7gmZC3CdH4-Yf1DX-Nz99Qajshm9Ac",
authDomain: "dreamer-app-f7f23.firebaseapp.com",
databaseURL: "https://dreamer-app-f7f23.firebaseio.com",
projectId: "dreamer-app-f7f23",
storageBucket: "dreamer-app-f7f23.appspot.com",
messagingSenderId: "878570107053",
appId: "1:878570107053:web:e6391f0212f68e54829624",
measurementId: "G-Y8NVB2HNEK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();


export { firebase, database as default, googleAuthProvider, githubAuthProvider };


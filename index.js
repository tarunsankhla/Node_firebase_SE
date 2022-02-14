// var firebase = require('firebase-admin');
var firebase = require('firebase');

var express = require("express");
const cors = require("cors");
let bodyParser = require('body-parser');
// const firebase = require('firebase');
const app = express();
var jsonParser = bodyParser.json()
// const auth = firebase.auth();

// import { firebase } from 'firebase';
// require('firebase/auth')
// const auth = require('firebase/auth');
// const firebase = require('firebase');
// require('firebase/auth')
// const authConfig = require('../config/authConfig')
// const auth = firebase.auth();
// const initializeApp = require("https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js");

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "your own api key",
    authDomain: "your own authDomain",
    projectId: "your own projectIdy",
    storageBucket: "your own api key",
    messagingSenderId: "your own messagingSenderId",
    appId: "your own api id",
    measurementId: "your own api measurementId"
};

// Initialize Firebase
// const app1 =firebase.initializeApp(firebaseConfig)
// const app = initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(app1)

firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// node implementation
// var corsOptions = {
// origin: "http://localhost:8081"
// };

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
res.json({ message: "Hello Firebase" });
});



// app.use("./firebase");
// app.use('/firebase',require('./firebase'));
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});

app.post("/firebase",phone)
function phone (req, res) {
    console.log("verify : ",req.body)
    const {verificationId, otp} = req.body;
    console.log("verify : ",req.body);
    console.log("otp: ",req.body.otp);
    console.log("Verify id: ",req.body.verificationId);
    try {

        const credential =firebase.auth.PhoneAuthProvider.credential(verificationId, otp)
        console.log("credentials : ",credential);
        firebase.auth.signInWithCredential(credential)
        .then(() => {
            console.log('Signed in successfully !');
            // window.location.href()
            // window.location.assign('./profile');
        })
        .catch(error => {
            console.error(error);
        })
        // firebase.auth.signInWithCredential(credential)
        // .then(async(data) => {
        //     console.log("darta : ",data)
            
        // })
        // .catch(err => {
        //     console.log(err)
        //     return res.send({
        //         success: false,
        //         code: 501,
        //         exists: false,
        //         message: `Firebase error`,
        //         response: err
        //     })
        // })

    } catch (err) {
        console.log("error after phone",err)
    }
}


const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyCUd9iMVAg0I9IDACb1RH0ZJhc9hSBc13Y",
    authDomain: "fir-phone-number-bd868.firebaseapp.com",
    projectId: "fir-phone-number-bd868",
    storageBucket: "fir-phone-number-bd868.appspot.com",
    messagingSenderId: "344910745684",
    appId: "1:344910745684:web:a21c4940819a5266da9dc1",
    measurementId: "G-7JEPMVHTVW"
};

// Initialize Firebase
const app1 =firebase.initializeApp(firebaseConfig)
// const app = initializeApp(firebaseConfig);
const analytics = firebase.getAnalytics(app1);


function phone (req, res) {
    const {verificationId, otp} = req.body;
    console.log("verify : ",req.body);
    console.log("otp: ",req.body.otp);
    console.log("Verify id: ",req.body.verificationId);
    try {

        const credential =firebase.auth.PhoneAuthProvider.credential(verificationId, otp)

        auth.signInWithCredential(credential)
        .then(async(data) => {
            console.log(data)
            
        })
        .catch(err => {
            console.log(err)
            return res.send({
                success: false,
                code: 501,
                exists: false,
                message: `Firebase error`,
                response: err
            })
        })

    } catch (err) {
        console.log("error after phone",err)
    }
}

module.exports = app.post("/firebase",phone);
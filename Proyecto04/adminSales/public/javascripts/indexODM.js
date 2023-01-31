// Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyD2GcCZVQoqNOG5Z1LoIm3TqPtal-vO6UI",
    authDomain: "salesproyecto4.firebaseapp.com",
    databaseURL: "https://salesproyecto4-default-rtdb.firebaseio.com",
    projectId: "salesproyecto4",
    storageBucket: "salesproyecto4.appspot.com",
    messagingSenderId: "207842693802",
    appId: "1:207842693802:web:01f50aad0f46cce6af76d3",
    measurementId: "G-3ZY78KP568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function get(){

    
    var estado = app.ref('0')
    estado.on('value', function(snapshot){
        var data = snapshot.val();
        console.log(data.status);
    })

}
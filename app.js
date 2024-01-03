const firebaseConfig = {
  apiKey: "AIzaSyDgPUjJKjpOFar52kwCXfUJp7MTqLQgfWk",
  authDomain: "holmanfamilyvideos-41aec.firebaseapp.com",
  projectId: "holmanfamilyvideos-41aec",
  storageBucket: "holmanfamilyvideos-41aec.appspot.com",
  messagingSenderId: "437560471466",
  appId: "1:437560471466:web:79cbc6c695ea427fc285d3",
  measurementId: "G-MSD7QPCHXJ"
};
firebase.initializeApp(firebaseConfig);

const msgScreen = document.getElementById("messages"); //the <ul> that displays all the <li> msgs
const msgForm = document.getElementById("messageForm"); //the input form
const msgInput = document.getElementById("msg-input"); //the input element to write messages
const msgBtn = document.getElementById("msg-btn"); //the Send button

const db = firebase.database();
const msgRef = db.ref("/msgs"); 
//to store data in the msgs folder by creating a reference in database
let name="";
function init() {
  name = prompt("Please enter your name");
}
document.addEventListener('DOMContentLoaded', init);
msgForm.addEventListener('submit', sendMessage);

function sendMessage(e){
  e.preventDefault();
  const text = msgInput.value;

    if(!text.trim()) return alert('Please type a message'); //no msg submitted
    const msg = {
        name: name,
        text: text
    };

    msgRef.push(msg);
    msgInput.value = "";
}





const firebaseConfig = {
  apiKey: "AIzaSyDgPUjJKjpOFar52kwCXfUJp7MTqLQgfWk",
  authDomain: "holmanfamilyvideos-41aec.firebaseapp.com",
  databaseURL: "https://holmanfamilyvideos-41aec-default-rtdb.firebaseio.com",
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
const name = document.getElementById("msg-name"); //the input element to write messages
const msgBtn = document.getElementById("msg-btn"); //the Send button

const db = firebase.database();
const msgRef = db.ref("/msgs"); 
//to store data in the msgs folder by creating a reference in database
function init() {
  msgRef.on('child_added', updateMsgs);
}
document.addEventListener('DOMContentLoaded', init);
msgForm.addEventListener('submit', sendMessage);

function sendMessage(e){
  e.preventDefault();
  const text = msgInput.value;
   const gname = name.value;
    if(!gname.trim()) return alert('Please enter Name');
    if(!text.trim()) return alert('Please type a message'); //no msg submitted
    const msg = {
        name: name.toUpperCase(),
        text: text
    };

    msgRef.push(msg);
    msgInput.value = "";
    gname.value = name.toUpperCase();
}

const updateMsgs = data =>{
  const {name, text} = data.val(); //get name and text

  //load messages, display on left if not the user's name. Display on right if it is the user.
  const msg = `<li class="${name === name ? "msg my": "msg"}"><span class = "msg-span">
    <i class = "name">${name}: </i>${text}
    </span>
  </li>`

  msgScreen.innerHTML += msg; //add the <li> message to the chat window

  //auto scroll to bottom
  document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight;
}











//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = { apiKey: "AIzaSyALE3yxZU_-DsJzkPsErn-1U3MtAmLA9E0", 
authDomain: "kwitter-cb6d5.firebaseapp.com", 
databaseURL: "https://kwitter-cb6d5-default-rtdb.firebaseio.com", 
projectId: "kwitter-cb6d5", 
storageBucket: "kwitter-cb6d5.appspot.com", 
messagingSenderId: "472343980504", 
appId: "1:472343980504:web:bd0a9004c86220323aaaad" };
 // Initialize Firebase 
 firebase.initializeApp(firebaseConfig);
 
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}

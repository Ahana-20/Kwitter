
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCe91TeYWAi9fv0ceE2eBEXDuCll5rSE1M",
      authDomain: "kwitter-a6ee9.firebaseapp.com",
      databaseURL: "https://kwitter-a6ee9-default-rtdb.firebaseio.com",
      projectId: "kwitter-a6ee9",
      storageBucket: "kwitter-a6ee9.appspot.com",
      messagingSenderId: "645491571919",
      appId: "1:645491571919:web:fd7b2bb020b7b0c52f4bba",
      measurementId: "G-XN5MP2Q494"
    };
  
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
 document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";




function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("room_name " + Room_names);

            row ="<div class= 'room_name' id="+Room_names+" onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div> <hr>"; 
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function add_room(){
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose: "adding-room-name"

     });

     localStorage.setItem("Room-Name",room_name);
     window.location = "kwitter_page.html"
       /* Bad mein chnage karna h location ko*/
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}


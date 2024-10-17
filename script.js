if (!localStorage.getItem("username")) {
    saveName();
  } else {
    document.getElementById("display-name").innerHTML = localStorage.username;
    document.getElementById("uname").innerHTML = localStorage.username;
}
  
document.getElementById("save-btn").addEventListener("click", saveName);
document.getElementById("clear-btn").addEventListener("click", clearName);

function saveName() {
    localStorage.setItem("username", document.getElementById("username").value);
    displayName();
  } 


function displayName(){
    const setUsername = localStorage.getItem("username");
    document.getElementById("display-name").value = setUsername;
    document.getElementById("uname").value = setUsername;

}

function clearName(){
    localStorage.removeItem("username");
    document.getElementById("display-name").innerHTML = " ";
    document.getElementById("uname").innerHTML = "User";
}


const time = new Date().getHours();
let timedMessage;
if (time < 12){
    timedMessage = "Good Morning, ";
} else if (time < 17){
    timedMessage = "Good Afternoon, ";
} else {
    timedMessage = "Good Evening, ";
}
document.getElementById("greet").innerHTML = timedMessage;


const form = document.getElementById("formlogin");
form.addEventListener("submit", function(event){ 
    event.preventDefault();
    var username = form.Username.value;
    var password = form.Password.value;
    var guestinloggningen = guestinloggning(username, password);

if(guestinloggningen){
window.location.href = "index.html";
}
else{
    alert("Try it again!");
}
});

//Gäst konto
function guestinloggning(username, password){
    if(username === "guest" && password === "password"){
        return true;
    }
    else{
        return false;
    }
}

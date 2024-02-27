var userName = prompt("What is your name?");
document.getElementById("username-user").textContent = userName;


function validateForm(event){
    var name = document.getElementById("name-input").value;
    var dob = document.getElementById("cal-input").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var message = document.getElementById("message-input").value;
    event.preventDefault();

    if(name == ""){
        alert("Username cannot be empty")
    }
    else if(dob == ""){
        alert("Date of birth cannot be empty")
    }
    else if(!female && !male){
        alert("Gender cannot be empty")
    }
    else if(message == ""){
        alert("Message cannot be empty")
    }
    else{
        alert("You have succesfully send the message")
        var currentTime = new Date();
        document.getElementById("current-time").textContent = currentTime;
        document.getElementById("sender-name").textContent = name;
        document.getElementById("sender-dob").textContent = dob;
    
        if(female){
            document.getElementById("sender-gender").textContent = "Female";
        }
        else{
            document.getElementById("sender-gender").textContent = "Male";
        }
    
        document.getElementById("sender-message-view").textContent = message;
    }
    
}
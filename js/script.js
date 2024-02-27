 var user = prompt("Input Name :");
 document.getElementById("username").textContent = user;


function validate(){
    var nama = document.getElementById("nama").value;
    var tgllahir = document.getElementById("tgllahir").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var pesan = document.getElementById("psn").value;

    if(nama.length == 0){
        alert("Username cannot be empty")
    }
    else if(tgllahir == ""){
        alert("Date of birth cannot be empty")
    }
    else if(!male && !female){
        alert("You must pick one gender")
    }
    else if(pesan.length == 0){
        alert("Message cannot be empty")
    }
    else{
        var currTime = new Date();
        document.getElementById("rightTime").textContent = currTime;
        document.getElementById("rightNama").textContent = nama;
        document.getElementById("rightTgl").textContent = tgllahir;

        if(female){
            document.getElementById("rightGender").textContent = "Female";
        }
        else{
            document.getElementById("rightGender").textContent = "Male";
        }

        document.getElementById("rightPesan").textContent = pesan;

    }
    // event.preventDefault();
}
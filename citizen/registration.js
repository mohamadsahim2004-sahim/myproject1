document.getElementById("reg-form").addEventListenerEventListner("submit", function(event){

    let fnameinput = document.getElementById("fname");
    let regnoinput = document.getElementById("regno");
    let nicinput = document.getElementById("nic");
    let phoneinput = document.getElementById("phone");
    let districtinput = document.getElementById("district"); 
    let passwordinput = document.getElementById("password");
    let vpasswordinput = document.getElementById("vpassword");

    if (fnameinput.value.trim() === ""){

        event.preventDefault();
        alert("full name is Required!");
    }else if (regnoinput.value.trim() === ""){

        event.preventDefault();
        alert("RegNo is Required!");
    }else if (regnoinput.value.trim() === ""){

        event.preventDefault();
        alert("RegNo is Required!");
     }else if (nicinput.value.trim() === ""){

        event.preventDefault();
        alert("RegNo is Required!");
    }else if (regnoinput.value.trim() === ""){

        event.preventDefault();
        alert("RegNo is Required!");
    }else if (regnoinput.value.trim() === ""){

        event.preventDefault();
        alert("RegNo is Required!");
       
});

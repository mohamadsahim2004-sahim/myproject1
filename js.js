document.getElementById("re-form").addEventListener("submit", function(event) {
 
    let nameInput = document.getElementById("name");
    let ageInput = document.getElementById("age");
    
    if (nameInput.value.trim() === "") {

        event.preventDefault(); 
        alert("Name is required!");
    }else if (ageInput.value.trim() ===""){

        event.preventDefault();
        alert("age must required!");
    } else {
        event.preventDefault(); 
        alert("Form submitted successfully!");
    }
});
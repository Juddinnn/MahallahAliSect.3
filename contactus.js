function callUs() {
    var name = document.getElementById("username").value;
    var phone = document.getElementById("phone").value;
    var complaints = document.getElementById("complaints").value;

    if (name !== "" && phone !== "" && complaints !== "") {
        window.alert("You have successfully submitted a complaint! Thank you for your feedback!");

        console.log("Redirecting to contactus.html");
        window.location.href = 'contactus.html';
        
    } else {
        alert("Error! Please fill in all the fields in the form.");
    }

    
}

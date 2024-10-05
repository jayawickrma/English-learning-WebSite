function aplyCourse(){
    let templateParams ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        mobile : document.getElementById("contact").value,
        Gender :document.getElementById("gender").value,
        course :document.getElementById("course").value
    };

    // Send the email
    emailjs.send("service_b7a8a0s", "template_dk2ckz9", templateParams)
        .then(function (response) {
            alert("SUCCESS! Email sent: " + response.status);
        }, function (error) {
            alert("FAILED... Error: " + error);
        });
}
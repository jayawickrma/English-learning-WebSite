function sendMail(){
    let params ={
        name :document.getElementById("name").value,
        email :document.getElementById("email").value,
        subject :document.getElementById("subject").value,
        message :document.getElementById("message").value
    }
    emailjs.send("service_b7a8a0s", "template_dzovutd", params)
        .then(function (response) {
            alert("SUCCESS! Email sent: " + response.status);
        }, function (error) {
            alert("FAILED... Error: " + error);
        });
}
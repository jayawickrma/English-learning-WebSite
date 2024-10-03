function sendMail(){
    let params ={
        name :document.getElementById("name").value(),
        email :document.getElementById("email").value(),
        subject :document.getElementById("subject").value(),
        message :document.getElementById("message").value(),
    }
    emailjs.send("service_pm64cbc","template_dzovutd",params).then(alert("sent.."));
}
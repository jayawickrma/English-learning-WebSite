function sendMail(){
    let params ={
        to_name :document.getElementById("name").value(),
        from_name :document.getElementById("email").value(),
        subject :document.getElementById("subject").value(),
        message :document.getElementById("message").value(),
    }
    emailjs.send("service_657ab6c","template_v9j5mum",params).then(alert("Mail sent !!!"));
}
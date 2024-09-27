function sendMail(){
    let params={
        email : document.getElementById("name").value(),
        form_email :document.getElementById("email").value(),
        subject : document.getElementById("subject").value(),
        message : document.getElementById("message").value(),
    }
    emailjs.send("service_657ab6c","template_bfwxv2n",params).then(alert("Email sent !!!"));
}
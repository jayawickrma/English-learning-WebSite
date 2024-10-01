function sendMail(){
    let params ={
        name : document.getElementById("name").value,
        email :document.getElementById("email").value,
        subject :document.getElementById("subject").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_657ab6c","template_v9j5mum",params).then(alert("Email sent"));
}
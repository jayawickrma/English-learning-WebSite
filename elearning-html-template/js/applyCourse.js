function aplyCourse(){
    let params ={
        name : document.getElementById("name").value(),
        email : document.getElementById("email").value(),
        mobile : document.getElementById("contact").value(),
        course :document.getElementById("course").value(),
    }
    emailjs.send("service_b7a8a0s","",params).then(alert("email sent.."))
}
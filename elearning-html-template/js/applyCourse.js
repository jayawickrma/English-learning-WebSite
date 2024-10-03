function aplyCourse(){
    let params ={
        name : document.getElementById("name").value(),
        email : document.getElementById("email").value(),
        mobile : document.getElementById("contact").value(),
        course :document.getElementById("course").value(),
    }
    emailjs.send("service_pm64cbc","",params).then(alert("email sent.."))
}
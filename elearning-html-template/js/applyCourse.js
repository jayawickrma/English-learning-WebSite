function aplyCourse(){
    let params ={
        name : document.getElementById("name").value(),
        email : document.getElementById("email").value(),
        mobile : document.getElementById("contact").value(),
        course :document.getElementById("course").value(),
    }
    emailjs.send("","",params).then(alert("email sent.."))
}
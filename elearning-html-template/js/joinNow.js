function joinNow(){
    let params ={
        fname : document.getElementById("name").value(),
        email : document.getElementById("email").value(),
        mobile : document.getElementById("phone").value(),
        course : document.getElementById("course").value(),
    }
    emailjs.send("","",params).then(alert("email sent !!"));
}
function sendMail() {
    // Collect form data into params object
    let params = {
        to_name: document.getElementById("name").value,
        from_name: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs.send('service_657ab6c', 'template_v9j5mum', params)
        .then(function(response) {
            alert('Message sent successfully!', response);
        }, function(error) {
            alert('Message sending failed. Please try again.');
            console.log('FAILED...', error);
        });
}

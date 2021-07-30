
function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        UserName: "levimccormick26@gmail.com",
        PassWord: "olyidlluctomoupd",
        To: "levimccormick26@gmail.com",
        From: "levimccormick26@gmail.com",
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`
    }).then((message) => alert("mail sent successfully"))
}
function submitForm(e) {
    
    e.preventDefault();
    
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    
    // document.querySelector(".contact-form").reset()
    
    sendEmail(name, email, message)
}

document.querySelector(".contact-form").addEventListener("submit", submitForm)
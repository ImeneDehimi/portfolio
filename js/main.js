try{
function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_kqhx99f","template_ajxbwhj",parms).then(alert("Email Sent !"))
}
} catch(err){
    console.log(err);
}

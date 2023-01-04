function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("massage").value,
    };
}

const serviceID = "service_8m14ibn";
const templateID = "template_3m14tzr";

emailjs.send(serviceID,templateID,params).then((res) => {
    document.getElementById("namee").value = "";
    document.getElementById("emaill").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your message sent successfully!");
 })
 .catch((err) => console.log(err));
// $(document).ready(function(){
//     $("#contactForm").submit(function(e){
//         e.preventDefault();

//         //collect form data
//         var formData ={
//             name:$("#name").val(),
//             email:$("email").val(),
//             message:$("#message").val()
//         };

//         $.ajax({
//             url:"https://localhost:44358/api/producerAPI/SendEmailFromWeb",
//             type:"POST",
//             contentType:"application/json",
//             data: JSON.stringify(formData),
//             success: function(response){
//                 $("#success").html("<div class='alert alert-success'>Email sent successfully!</div>");
//                 $("#contactForm").trigger("reset");
//             },
//             error: function(xhr,status,error){
//                 console.error("Error:", xhr.responseText);
//                 $("#success").html("<div class='alert alert-danger'>Failed to send email. Try again.</div>")
//             }
//         });
//     });
// });




const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
script.onload = () => {
    emailjs.init("urBewfEV-R4_osJkT"/*publickey_id */);
};
document.body.appendChild(script);

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_8px7xu8"/*service_id */, "template_ddtfypj"/*template_id */, params)
        .then(response => {
            alert("Email sent successfully!");
            document.getElementById("contactForm").reset();
            
        }).catch(error => {
            alert("Failed to send email.");
        })
});


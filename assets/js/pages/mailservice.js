$(document).ready(function(){
    $("#contactForm").submit(function(e){
        e.preventDefault();

        //collect form data
        var formData ={
            name:$("#name").val(),
            email:$("email").val(),
            message:$("#message").val()
        };

        $.ajax({
            url:"https://localhost:44358/api/producerAPI/SendEmailFromWeb",
            type:"POST",
            contentType:"application/json",
            data: JSON.stringify(formData),
            success: function(response){
                $("#success").html("<div class='alert alert-success'>Email sent successfully!</div>");
                $("#contactForm").trigger("reset");
            },
            error: function(xhr,status,error){
                console.error("Error:", xhr.responseText);
                $("#success").html("<div class='alert alert-danger'>Failed to send email. Try again.</div>")
            }
        });
    });
});
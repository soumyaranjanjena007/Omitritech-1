$(document).ready(function(){
    const text = "We Appreciate your Time, Thank You...";
    const typewriter  = $("#typewriter");
    const letters = $('#letters')
    let i =0;
    
    function typeLetterByLetter(){
        if(i < text.length){
            letters.append(text.charAt(i));
            i++;
            setTimeout(typeLetterByLetter, 100);

        }
    }
    typeLetterByLetter();
    const highlighted = $(".highlight");
    if(highlighted.length){
        highlighted.css("background-color", "#90a1cb");
        setTimeout(function(){
            highlighted.css("background-color","transparent");
        },2000);
    }
})
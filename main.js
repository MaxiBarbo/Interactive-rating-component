
function ValueIn (e){
    let dato = e
localStorage.setItem("mydato",dato)
}

function cambiarValue(){
    document.getElementById('valorInput').innerHTML=localStorage.getItem("mydato");
}
cambiarValue()

$(function(){

    $("#mostrar_thank").click(function () {	 
        $('.thank_you').toggle("slow");

    });

});

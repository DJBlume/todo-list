// Cross off to do by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete to do
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text'").keypress(function(e){
    if(e.which === 13){
        //grabbing new to do from input
        var todoText = $(this).val();
        //clear input
        $(this).val("");
        //create new li and dd to ul
        $("ul").append("<li><span> <i class='far fa-trash-alt'></i> </span>" + todoText +"</li>")
    }        
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});
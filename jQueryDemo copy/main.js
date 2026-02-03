
$(document).ready(function() {alert("[hello earthlings]"); })


$(document).ready(function() {$("#ufo").draggable(); })
$(document).ready(function() {$("#cat").draggable(); })
$(document).ready(function() {$("#grapes").draggable(); })
$(document).ready(function() {$("#bananas").draggable(); })
$(document).ready(function() {$("#diamond").draggable(); })


$(document).ready(function() {
    $("#bananas").click(function(){
    $("#ufo").hide(); }); 
    })


$(document).ready(function() {
    $("#ufo").hover(function(){
    $(this).hide();
     }); 
    })


$(document).ready(function()  {
    $("#ufo").hover(function(){
            $("#earthling").append(" we come in peach");
            });
    })

$(document).ready(function()  {
    $("#ufo").hover(function(){
        $("#earthling").css("color", "violet");
            });

        })
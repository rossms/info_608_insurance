
var campus;
var type;
$(document).on('change', '#campus', function(e) {
    campus = this.options[e.target.selectedIndex].value;
    if(campus=="mccc"){
       $("#type option[value='13']").attr("disabled","disabled");
       $("#type option[value='14']").attr("disabled","disabled");
       $("#type option[value='ls']").removeAttr("disabled");
       $("#type option[value='pbm']").removeAttr("disabled");
    }else{
        $("#type option[value='ls']").attr("disabled","disabled");
        $("#type option[value='pbm']").attr("disabled","disabled");
        $("#type option[value='13']").removeAttr("disabled");
        $("#type option[value='14']").removeAttr("disabled");
    }
});
$(document).on('change', '#type', function(e) {
    type = this.options[e.target.selectedIndex].value;
});
function putCost(){
    var basicCost;
    var preferredCost;
    if(campus=="mccc"){
        if(type=="ls"){
            basicCost = "$2,226";
            preferredCost = "$3,078";
        }else if (type=="pbm"){
            basicCost = "$2,226";
            preferredCost = "$3,078";
        }else{
            basicCost = "$2,055";
            preferredCost = "$2,850";
        }
    }else{
        if (type=="13"){
            basicCost = "$2,226";
            preferredCost = "$3,078";
        }else if (type=="14"){
            basicCost = "$2,396";
            preferredCost = "$3,306";
        }else{
            basicCost = "$2,055";
            preferredCost = "$2,850";
        }
    }
    $("#basicCost").html(basicCost);
    $("#preferredCost").html(preferredCost);
    var current = $.featherlight.current();
    current.close();
}
function slideSwitch() {
        var $active = $('div#slideshow IMG.active');
        var $next = $active.next();

        $next.addClass('active');

        $active.removeClass('active');
}

$(function() {
        setInterval( "slideSwitch()", 5000 );
});

var $rotator = $(".rotator");
$rotator.find("img:gt(0)").hide();
setTimeout(Rotate, 1000);

function Rotate() {
    var $current = $rotator.find("img:visible");
    var $next = $current.next();
    if ($next.length == 0) $next = $rotator.find("img:eq(0)");
    $current.hide();
    $next.css("margin", "0 auto");
    $next.css("display", "block");
    $next.show();
    setTimeout(Rotate, 7000);
}

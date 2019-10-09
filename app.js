$("#div1").mouseenter(function() {
    $("#div2").show();
    $("#div3").hide();
}).mouseleave(function() {
    $("#div2").hide();
    $("#div3").show();
});
$("#div4").mouseenter(function() {
    $("#div5").show();
    $("#div6").hide();
}).mouseleave(function() {
    $("#div5").hide();
    $("#div6").show();
});
$(document).ready(function() {
	// when document loaded:
    
    $("#div16").hide();

	$("#button1").mouseup(function() {
        alert("button4 gedrückt");
	});

	$("#button2").mouseup(function() {
        alert("button2 gedrückt");
	});

	$("#div5").mouseup(function() {
        let KWH = $("#input17").val()*1;
        let Module = Math.floor(KWH / 150);
        let kosten = Module * 270;
        let kostenkwh = 0.35;
        let rechnet = Math.floor(kosten / (kostenkwh * KWH));
        $("#div16").html("Sie benötigen ca. " + Module + " Module. <br> Ihre kosten belaufen sich auf "+ kosten+
        " Euro Material. <br> Das System wird sich nach "+ rechnet+ " Jahren rechnen.");
        $("#div16").show();
	});

	$("#button3").mouseup(function() {
        alert("button3 gedrückt");
	});

	$("#button4").mouseup(function() {
        alert("button4 gedrückt");
	});

});

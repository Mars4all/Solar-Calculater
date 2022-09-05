$(document).ready(function() {
	// when document loaded:
  // Die loik der Berechnung  
    $("#div16").hide();
    $("#table30").hide();
    $("#table60").hide();
    $("#table1").hide();
    $("#table2").hide();
   
	$("#buttonberechnen").mouseup(function() {
        let KWH = $("#kwh").val()*1;





        $("#Nord30").html(KWH);
        $("#West30").html(KWH);
        $("#Ost30").html(KWH);
        $("#Sued30").html(KWH);

        $("#Nord60").html(KWH);
        $("#West60").html(KWH);
        $("#Ost60").html(KWH);
        $("#Sued60").html(KWH)

        
        
       // let Anzahl300module = Math.round(Tagesverbrauch / Modultagesleistung);  // Quelle: https://www.energie-experten.org/erneuerbare-energien/photovoltaik/planung/anlagen-groesse
       
        

       $("#table30").show();
       $("#table60").show();
       $("#table1").show();
       $("#table2").show();

	});

	
// Hier Login Logik

	$("#Einloggen").mouseup(function() {
                let mail = $("#Email").val();
                let pwd = $("#Password").val();
                
                
                alert("mail und Passwort korrekt");
	});

});

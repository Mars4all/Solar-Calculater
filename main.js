$(document).ready(function() {
	// when document loaded:
  // Die loik der Berechnung  
    let modul_400w = 400;
    let kosten_modul_400w = 249;
  
  
  $("#div16").hide();
  $("#table0").hide();
    $("#table30").hide();
    $("#table45").hide();
    $("#table60").hide();
    $("#table1").hide();
    $("#table2").hide();
    $("#table3").hide();
    $("#table4").hide();
   
	$("#buttonberechnen").mouseup(function() {
        let KWH = $("#kwh").val()*1;
        let Tagesverbrauch = KWH / 360;

        // Berechnung mit einer Neigung von 60%
        let Anzahl_400w_module_0_Grad = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.87);

        // Berechnung mit einer Neigung von 30%
        let Anzahl_400w_module_nord_30 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.61);
        let Anzahl_400w_module_west_30 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.82);
        let Anzahl_400w_module_ost_30 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.82);
        let Anzahl_400w_module_sued_30 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000));


         // Berechnung mit einer Neigung von 45%
         let Anzahl_400w_module_nord_45 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.475);
         let Anzahl_400w_module_west_45 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.77);
         let Anzahl_400w_module_ost_45 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.77);
         let Anzahl_400w_module_sued_45 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.99);

        // Berechnung mit einer Neigung von 60%

        let Anzahl_400w_module_nord_60 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.35);
        let Anzahl_400w_module_west_60 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.70);
        let Anzahl_400w_module_ost_60 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.70);
        let Anzahl_400w_module_sued_60 = Math.round(Tagesverbrauch / ((4*modul_400w)/ 1000)/0.94);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        // Zuweisung bei Flachdach
        $("#Nord_0").html(Anzahl_400w_module_0_Grad );
        $("#West_0").html(Anzahl_400w_module_0_Grad);
        $("#Ost_0").html(Anzahl_400w_module_0_Grad);
        $("#Sued_0").html(Anzahl_400w_module_0_Grad);

        // Zuweisung Kosten bei Flachdach
        $("#kosten0Nord").html(Anzahl_400w_module_0_Grad*kosten_modul_400w+",- €");
        $("#kosten0West").html(Anzahl_400w_module_0_Grad*kosten_modul_400w+",- €");
        $("#kosten0Ost").html(Anzahl_400w_module_0_Grad*kosten_modul_400w+",- €");
        $("#kosten0Sued").html(Anzahl_400w_module_0_Grad*kosten_modul_400w+",- €");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Zuweisung bei 30° Schräge
        $("#Nord30").html(Anzahl_400w_module_nord_30);
        $("#West30").html(Anzahl_400w_module_west_30);
        $("#Ost30").html(Anzahl_400w_module_ost_30);
        $("#Sued30").html(Anzahl_400w_module_sued_30);

        // Zuweisung Kosten 30°
        $("#kosten30Nord").html(Anzahl_400w_module_nord_30*kosten_modul_400w+",- €");
        $("#kosten30West").html(Anzahl_400w_module_west_30*kosten_modul_400w+",- €");
        $("#kosten30Ost").html(Anzahl_400w_module_ost_30*kosten_modul_400w+",- €");
        $("#kosten30Sued").html(Anzahl_400w_module_sued_30*kosten_modul_400w+",- €");
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
         // Zuweisung bei 45° Schräge
         $("#Nord45").html(Anzahl_400w_module_nord_45);
         $("#West45").html(Anzahl_400w_module_west_45);
         $("#Ost45").html(Anzahl_400w_module_ost_45);
         $("#Sued45").html(Anzahl_400w_module_sued_45);

         // Zuweisung Kosten 45° 
         $("#kosten45Nord").html(Anzahl_400w_module_nord_45*kosten_modul_400w+",- €");
         $("#kosten45West").html(Anzahl_400w_module_west_45*kosten_modul_400w+",- €");
         $("#kosten45Ost").html(Anzahl_400w_module_ost_45*kosten_modul_400w+",- €");
         $("#kosten45Sued").html(Anzahl_400w_module_sued_45*kosten_modul_400w+",- €");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Zuweisung bei 60° Schräge
        $("#Nord60").html(Anzahl_400w_module_nord_60);
        $("#West60").html(Anzahl_400w_module_west_60);
        $("#Ost60").html(Anzahl_400w_module_ost_60);
        $("#Sued60").html(Anzahl_400w_module_sued_60);


         // Zuweisung bei 60° Schräge
         $("#kosten60Nord").html(Anzahl_400w_module_nord_60*kosten_modul_400w+",- €");
         $("#kosten60West").html(Anzahl_400w_module_west_60*kosten_modul_400w+",- €");
         $("#kosten60Ost").html(Anzahl_400w_module_ost_60*kosten_modul_400w+",- €");
         $("#kosten60Sued").html(Anzahl_400w_module_sued_60*kosten_modul_400w+",- €");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        
       // Tabellen einblenden 
       $("#table30").show();
       $("#table45").show();
       $("#table60").show();
       $("#table1").show();
       $("#table2").show();
       $("#table3").show();
       $("#table4").show();

	});

	
// Hier Login Logik

	$("#Einloggen").mouseup(function() {
                let mail = $("#Email").val();
                let pwd = $("#Password").val();
                
                
                alert("mail und Passwort korrekt");
	});

});

$(document).ready(function() {
    let modul_400w = 400;
    let kosten_modul_400w = 249;
  
    $("#table0").hide();
    $("#table30").hide();
    $("#table45").hide();
    $("#table60").hide();
    $("#table1").hide();
    $("#table2").hide();
    $("#table3").hide();
    $("#table4").hide();
    $("#button_Daten_uebernehmen2").hide();
   
	$("#buttonberechnen").mouseup(function() {
        let KWH = $("#kwh").val()*1;
        let kostenkwh = $("#kwh-Preis").val()*1;

        let Tagesverbrauch = KWH / 360;
        let kostenjahr = kostenkwh * KWH;

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

        let kostenNord0 = Anzahl_400w_module_0_Grad*kosten_modul_400w;
        let kostenWest0 = Anzahl_400w_module_0_Grad*kosten_modul_400w;
        let kostenOst0 = Anzahl_400w_module_0_Grad*kosten_modul_400w;
        let kostenSued0 = Anzahl_400w_module_0_Grad*kosten_modul_400w;

        let JahrenNord0 = Math.round( kostenNord0 /  kostenjahr );
        let Jahrenwest0 = Math.round(kostenWest0  / kostenjahr );
        let JahrenOst0 = Math.round(  kostenOst0 / kostenjahr);
        let Jahrensued0 = Math.round(  kostenSued0 /kostenjahr );


        // Zuweisung Kosten bei Flachdach
        $("#kosten0Nord").html(kostenNord0+",- € <br> Rechnet sich nach ca "+JahrenNord0+" Jahren");
        $("#kosten0West").html(kostenWest0+",- € <br> Rechnet sich nach ca "+Jahrenwest0+" Jahren");
        $("#kosten0Ost").html(kostenOst0+",- € <br> Rechnet sich nach ca "+JahrenOst0+" Jahren");
        $("#kosten0Sued").html(kostenSued0+",- € <br> Rechnet sich nach ca "+Jahrensued0+" Jahren");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Zuweisung bei 30° Schräge
        $("#Nord30").html(Anzahl_400w_module_nord_30);
        $("#West30").html(Anzahl_400w_module_west_30);
        $("#Ost30").html(Anzahl_400w_module_ost_30);
        $("#Sued30").html(Anzahl_400w_module_sued_30);

        let kostenNord30 = Anzahl_400w_module_nord_30*kosten_modul_400w;
        let kostenWest30 = Anzahl_400w_module_west_30*kosten_modul_400w;
        let kostenOst30 = Anzahl_400w_module_ost_30*kosten_modul_400w;
        let kostenSued30 = Anzahl_400w_module_sued_30*kosten_modul_400w;

        let JahrenNord30 = Math.round( kostenNord30 /  kostenjahr );
        let Jahrenwest30 = Math.round(kostenWest30  / kostenjahr );
        let JahrenOst30 = Math.round(  kostenOst30 / kostenjahr);
        let Jahrensued30 = Math.round(  kostenSued30 /kostenjahr );

        // Zuweisung Kosten 30°
        $("#kosten30Nord").html(kostenNord30+",- € <br> Rechnet sich nach ca "+JahrenNord30+" Jahren");
        $("#kosten30West").html(kostenWest30+",- € <br> Rechnet sich nach ca "+Jahrenwest30+" Jahren");
        $("#kosten30Ost").html(kostenOst30+",- € <br> Rechnet sich nach ca "+JahrenOst30+" Jahren");
        $("#kosten30Sued").html(kostenSued30+",- € <br> Rechnet sich nach ca "+Jahrensued30+" Jahren");
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
         // Zuweisung bei 45° Schräge
         $("#Nord45").html(Anzahl_400w_module_nord_45);
         $("#West45").html(Anzahl_400w_module_west_45);
         $("#Ost45").html(Anzahl_400w_module_ost_45);
         $("#Sued45").html(Anzahl_400w_module_sued_45);

         let kostenNord45 = Anzahl_400w_module_nord_45*kosten_modul_400w;
         let kostenWest45 = Anzahl_400w_module_west_45*kosten_modul_400w;
         let kostenOst45 = Anzahl_400w_module_ost_45*kosten_modul_400w;
         let kostenSued45 = Anzahl_400w_module_sued_45*kosten_modul_400w;

         let JahrenNord45 = Math.round( kostenNord45 /  kostenjahr );
         let Jahrenwest45 = Math.round(kostenWest45  / kostenjahr );
         let JahrenOst45 = Math.round(  kostenOst45 / kostenjahr);
         let Jahrensued45 = Math.round(  kostenSued45 /kostenjahr );


         // Zuweisung Kosten 45° 
         $("#kosten45Nord").html(kostenNord45+",- € <br> Rechnet sich nach ca "+JahrenNord45+" Jahren");
         $("#kosten45West").html(kostenWest45+",- € <br> Rechnet sich nach ca "+Jahrenwest45+" Jahren");
         $("#kosten45Ost").html(kostenOst45+",- € <br> Rechnet sich nach ca "+JahrenOst45+" Jahren");
         $("#kosten45Sued").html(kostenSued45+",- € <br> Rechnet sich nach ca "+Jahrensued45+" Jahren");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Zuweisung bei 60° Schräge
        $("#Nord60").html(Anzahl_400w_module_nord_60);
        $("#West60").html(Anzahl_400w_module_west_60);
        $("#Ost60").html(Anzahl_400w_module_ost_60);
        $("#Sued60").html(Anzahl_400w_module_sued_60);

        let kostenNord60 = Anzahl_400w_module_nord_60*kosten_modul_400w;
         let kostenWest60 = Anzahl_400w_module_west_60*kosten_modul_400w;
         let kostenOst60 = Anzahl_400w_module_ost_60*kosten_modul_400w;
         let kostenSued60 = Anzahl_400w_module_sued_60*kosten_modul_400w;

         let JahrenNord60 = Math.round( kostenNord60 /  kostenjahr );
         let Jahrenwest60 = Math.round(kostenWest60  / kostenjahr );
         let JahrenOst60 = Math.round(  kostenOst60 / kostenjahr);
         let Jahrensued60 = Math.round(  kostenSued60 /kostenjahr );


         // Zuweisung bei 60° Schräge
         $("#kosten60Nord").html(kostenNord60+",- € <br> Rechnet sich nach ca "+JahrenNord60+" Jahren");
         $("#kosten60West").html(kostenWest60+",- € <br> Rechnet sich nach ca "+Jahrenwest60+" Jahren");
         $("#kosten60Ost").html(kostenOst60+",- € <br> Rechnet sich nach ca "+JahrenOst60+" Jahren");
         $("#kosten60Sued").html(kostenSued60+",- € <br> Rechnet sich nach ca "+Jahrensued60+" Jahren");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////      

//////////////Karte////////////////////////////////////////////////////////////////////////////////////////////////


        
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
//////////////////////////////////////////////////////////
 // Hier die Lgig der Datenübernahme der Karte
 $("#button_Daten_uebernehmen").mouseup(function() {
        $("#button_Daten_uebernehmen2").show();

 });

 $(".versenden_daten_Anbieter").mouseup(function() {
        alert("Ihre Daten wurden erfolgreich zum Anbieter versendet und wird sich zeitnah mit Ihnen in Verbindung setzen");

 });

 
});
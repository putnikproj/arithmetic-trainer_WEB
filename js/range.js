// Slider-range function
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 1,
        max: 50,
        values: [ 3, 15 ],
        slide: function( event, ui ) {
        $( "#fn" ).val( ui.values[ 0 ] );
        $( "#sn" ).val( ui.values[ 1 ] );
        }
    });
    $( "#fn" ).val( $( "#slider-range" ).slider( "values", 0 ) );
    $( "#sn" ).val( $( "#slider-range" ).slider( "values", 1 ) );

    // Изменения местоположения ползунков
        $("input#fn").change(function(){
            var value1=$("input#fn").val();
            var value2=$("input#sn").val();
                if(parseInt(value1) > parseInt(value2)){
                    value1 = value2;
                    $("input#fn").val(value1);
                }
                $("#slider-range").slider("values", 0, value1);
        });

        $("input#sn").change(function(){
            var value1=$("input#fn").val();
            var value2=$("input#sn").val();
                if(parseInt(value1) > parseInt(value2)){
                    value2 = value1;
                    $("input#sn").val(value2);
                }
                $("#slider-range").slider("values", 1, value2);
        });
    // Фильтрация ввода
        jQuery('#fn, #sn').keypress(function(event){
            var key, keyChar;
            if(!event) var event = window.event;

            if (event.keyCode) key = event.keyCode;
            else if(event.which) key = event.which;

            if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 )
                return true;
            keyChar=String.fromCharCode(key);

            if(!/\d/.test(keyChar)) return false;
        });
    
});

// Common slider function
$( function() {
    $( "#range" ).slider({
      range: "min",
      value: 3,
      min: 1,
      max: 30,
      slide: function( event, ui ) {
        $( "#amountrange" ).val( ui.value );
      }
    });
    $( "#amountrange" ).val( $( "#range" ).slider( "value" ) );

    // Изменения местоположения ползунков
    $("input#amountrange").change(function(){
        var value1=$("input#amountrange").val();
        $("input#amountrange").val(value1);
        $("#range").slider("value", value1);
    });

    // Фильтрация ввода
    jQuery('#amountrange').keypress(function(event){
        var key, keyChar;
        if(!event) var event = window.event;

        if (event.keyCode) key = event.keyCode;
        else if(event.which) key = event.which;

        if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 )
            return true;
        keyChar=String.fromCharCode(key);

        if(!/\d/.test(keyChar)) return false;
    });
} );
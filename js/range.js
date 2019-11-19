// Slider-range function
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 1,
        max: 50,
        values: [ 3, 15 ],
        slide: function( event, ui ) {
        $( "#first-range-number" ).val( ui.values[ 0 ] );
        $( "#second-range-number" ).val( ui.values[ 1 ] );
        }
    });
    $( "#first-range-number" ).val( $( "#slider-range" ).slider( "values", 0 ) );
    $( "#second-range-number" ).val( $( "#slider-range" ).slider( "values", 1 ) );

    // Изменения местоположения ползунков
        $("input#first-range-number").change(function(){
            var value1=$("input#first-range-number").val();
            var value2=$("input#second-range-number").val();
                if(parseInt(value1) > parseInt(value2)){
                    value1 = value2;
                    $("input#first-range-number").val(value1);
                }
                $("#slider-range").slider("values", 0, value1);
        });

        $("input#second-range-number").change(function(){
            var value1=$("input#first-range-number").val();
            var value2=$("input#second-range-number").val();
                if(parseInt(value1) > parseInt(value2)){
                    value2 = value1;
                    $("input#second-range-number").val(value2);
                }
                $("#slider-range").slider("values", 1, value2);
        });
    // Фильтрация ввода
        jQuery('#first-range-number, #second-range-number').keypress(function(event){
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
        $( "#amount-range-number" ).val( ui.value );
      }
    });
    $( "#amount-range-number" ).val( $( "#range" ).slider( "value" ) );

    // Изменения местоположения ползунков
    $("input#amount-range-number").change(function(){
        var value1=$("input#amount-range-number").val();
        $("input#amount-range-number").val(value1);
        $("#range").slider("value", value1);
    });

    // Фильтрация ввода
    jQuery('#amount-range-number').keypress(function(event){
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
/**
 * Created by chris on 6/25/15.
 */

var G = {};

var go = function() {
    //alert('Facebook script');

    // CREATE BUTTONS
    G.stop_button = $('<button id="stop_button" style="float: left"> Stop </button>');
    G.stop_button.click(function(){
        G.do_stop = true;
    });

    G.go_button = $('<button id="go_button" style="float: left"> Go </button>');
    G.go_button.click(function(){
        G.do_stop = false;
        setTimeout(auto_scroll, 500);
    });

    // Insert buttons
    var blue_bar = $('#blueBarNAXAnchor');
    blue_bar.prepend(G.stop_button);
    blue_bar.prepend(G.go_button);


    $(window).scroll(function(){
        set_suggested();
    });



    //setTimeout(set_suggested, 500);
};

var auto_scroll = function(){
    if(G.do_stop){
        return;
    }

    window.scrollTo(0, document.body.scrollHeight);
    setTimeout(auto_scroll, 500);
};

var set_suggested = function(){
    $('._4-u2').each(function(index, value){
        value = $(value);
        var suggested = value.find("span:contains('Suggested Post')");
        suggested = $(suggested);
        suggested.css('background-color', '#FFE0E0');

        var sponsored = value.find('.uiStreamSponsoredLink');
        sponsored = $(sponsored);
        sponsored.css('background-color', '#FFE0E0');

        if( suggested.length > 0 || sponsored.length > 0 ){

        }else{
            value.css('background-color', 'blue');
            value.css('display', 'none');
        }
    });
};


go();

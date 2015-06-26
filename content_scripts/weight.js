/**
 * Created by chris on 6/25/15.
 */

var G = {};

var go = function() {
    //alert('Weight script 3');

    var measurements_section = $('section.measurements');
    measurements_section.prepend('<div class="hexport"></div>');
    measurements_section.prepend('<div class="hlog"></div>');
    G.hlog = $('.hlog');
    G.hexport = $('.hexport');
    log_line('Weight script 4');


    setTimeout(loadMore, 2000);
};

var loadMore = function(){
    var loadMoreButton = $('a.loadMore');
    if( loadMoreButton.hasClass('disabled') ){
        log_line('Finished loading');
        do_export();
    }else{
        loadMoreButton = $(loadMoreButton);
        loadMoreButton.click();
        loadMoreButton = loadMoreButton.find('.text');
        $(loadMoreButton).click();
         setTimeout(loadMore, 500);
    }
};

var log_line = function(line_text){
    G.hlog.prepend('<div>' + line_text + '</div>');
};

var do_export = function(){
    var container = $('.historyLog').first('ul');
    container = $(container);

    container.find('li').each(function(index, value){
        value = $(value);
        var time   = value.attr('data-history-log-time');
        var weight = value.attr('data-history-log-weight-formatted');
        weight = weight.replace(' lbs', '');
        var fat    = value.attr('data-history-log-body-fat-formatted');
        fat = fat.replace('% fat', '');

        log_line(time + '; ' + weight + '; ' + fat);
    });
};

go();




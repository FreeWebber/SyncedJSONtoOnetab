
$(function(){ //'use strict';

cl = console.log; //cl($('textarea[name=tabs]'));

//$('textarea[name=tabs]').on('change input', function(){ convert(this.value); });

var $ta = $('textarea[name=ot]'),
    $html = $('div.html_links'),
endvar;

$ta.html('');
$html.html('');

$('.convert_btn').on('click', function(){
    $('.ref_loader').css({visibility: 'visible'});
    setTimeout(convert, 500);
});

function convert(val){
    $ta.html('').show();
    $html.html('');
    var val = $('textarea[name=tabs]').val();
    if(!val){
        $('.ref_loader').css({visibility: 'hidden'});
        return;
    }

    try {
        var data = JSON.parse(val);
    } catch(e) { //cl(e);
        $ta.html('cant convert');
        $html.html('cant convert');
        $('.ref_loader').css({visibility: 'hidden'});
        return;
    } //    cl(data);    return;

    var ta = '';
    var html = '';

    $.each(data.tabs, function(k, v){
        let title = this.title;
        if(!title){
            title = 'Untitled';
            var url = '';
            try {
                url = new URL(this.urlHistory); cl(url);
            } catch {
            } //cl(url);
            if(url && url.host){
                title = `Untitled `+ url.host;
            }
        }
        ta+= this.urlHistory +' | '+ title +"\n";
        html+= `<a href='${this.urlHistory}'>${title}</a><br/>`;
    });

    $ta.append(ta); //$ta.append(k+1 +'. ' +this.urlHistory +' | '+ this.title +"\n");
    $html.append(html);

    $('.qty').html(data.tabs.length);
    $('.ref_loader').css({visibility: 'hidden'});
}

});
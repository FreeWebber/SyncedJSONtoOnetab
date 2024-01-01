
$(function(){ //'use strict';

cl = console.log; //cl($('textarea[name=tabs]'));

//$('textarea[name=tabs]').on('change input', function(){ convert(this.value); });

var $ta = $('textarea[name=ot]'),
    $html = $('div.html_links'),
endvar;

download = function download(url, name){
    const a = document.createElement('a');
    a.href = url;
    a.download = name; //a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click(); //document.body.removeChild(a);
}

get_date = function get_date(){
    var d = new Date();
    var day = "0" + d.getDate();
    var month = "0" + d.getMonth()+1; //cl(month);
    var date = (d.getYear()+'').substring(1, 3) +'.'+ month.substr(-2) +'.'+ day.substr(-2); cl(date);
    return date;
} //cl(get_date());

$ta.html('');
$html.html('');

$('.convert_btn').on('click', function(){
    $('.ref_loader').css({visibility: 'visible'});
    setTimeout(convert, 500);
});

$('.save_to_file_btn').on('click', function(){
    var url = URL.createObjectURL(new Blob([$ta.val()], {type: "text/plain"})); //self.cl(url);
    var fname = get_date() +` 50.txt`; //cl(fname);
    download(url, fname);
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

    $ta.html(ta); //$ta.append(k+1 +'. ' +this.urlHistory +' | '+ this.title +"\n");
    $html.html(html);

    $('.qty').html(data.tabs.length);
    $('.ref_loader').css({visibility: 'hidden'});
}

});
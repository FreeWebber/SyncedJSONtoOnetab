
$(function(){ //'use strict';

cl = console.log; //cl($('textarea[name=tabs]'));

$('.convert_btn').on('click', function(){ convert($('textarea[name=tabs]').val()); });
$('textarea[name=tabs]').on('change input', function(){ convert(this.value); });

var $otta = $('textarea[name=ot]');
    $otta.html('');

function convert(val){
    $otta.html('');
    if(!val) return;
    try {
        var data = JSON.parse(val);
    } catch(e) {
        cl(e);
        $otta.html('cant convert');
        return;
    }
    $.each(data.tabs, function(k, v){
        $otta.append(this.urlHistory +' | '+ this.title +"\n"); //$otta.append(k+1 +'. ' +this.urlHistory +' | '+ this.title +"\n");
    });
}

});
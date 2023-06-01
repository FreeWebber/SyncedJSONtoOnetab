
$(function(){ //'use strict';

cl = console.log; //cl($('textarea[name=tabs]'));

$('.convert_btn').on('click', function(){ convert($('textarea[name=tabs]').val()); });
$('textarea[name=tabs]').on('change input', function(){ convert(this.value); });

function convert(val){
    var data = JSON.parse(val);
    var $otta = $('textarea[name=ot]');
    $otta.html('');
    $.each(data.tabs, function(k, v){
        $otta.append(this.urlHistory +' | '+ this.title +"\n"); //$otta.append(k+1 +'. ' +this.urlHistory +' | '+ this.title +"\n");
    });
}

});
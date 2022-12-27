
$(function(){ //'use strict';

cl = console.log;
//cl($('textarea[name=tabs]'));
var $otta = $('textarea[name=ot]');
$('textarea[name=tabs]').on('change input', function(){
    var data = JSON.parse(this.value);
    $otta.html('');
    $.each(data.tabs, function(k, v){
        $otta.append(this.urlHistory +' | '+ this.title +"\n");
        //$otta.append(k+1 +'. ' +this.urlHistory +' | '+ this.title +"\n");
    })
})

});
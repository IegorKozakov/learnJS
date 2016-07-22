"use strict";

var encript_form = document.getElementById('encript_form');
var decript_form = document.getElementById('decript_form');

encript_form.onsubmit = function(data){
    var text = document.getElementById('encript_text').value;

    var encripted = pl.encrypt(text);
    document.getElementById('result').innerHTML = encripted;
    return false;
};
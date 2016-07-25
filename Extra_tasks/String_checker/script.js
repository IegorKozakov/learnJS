"use strict";

var check_form = document.getElementById('check_form');

check_form.onsubmit = function(event){
    event.preventDefault();

    var text = document.getElementById('check_text').value;

    var data = SC.check(text);

    if(data){
        alert(data);
    }
    return false;
};
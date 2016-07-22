'use strict';

function PigLatina(){}

PigLatina.prototype.encrypt = function(str){
    var wordList = str.toLowerCase().split(' ');

    var updated = wordList.map(function(word){
        if(this.checkLetterType(word.substring(0, 1))){
            return word+'way';
        } else {
            var firstConsonatCount = 1;
            (function checkFierstConsonatCount (cutedWord, self){
                if(!self.checkLetterType(cutedWord)){
                    firstConsonatCount ++;
                    checkFierstConsonatCount(word.substring(firstConsonatCount, firstConsonatCount+1), self);
                }
            }(word.substring(firstConsonatCount, firstConsonatCount+1), this));

            return word.slice(firstConsonatCount) + word.substring(0, firstConsonatCount) + 'ay';
        }
    },this);

    return updated.join(' ');
};

PigLatina.prototype.checkLetterType = function(word){
    return word.match(/[aeiou]/);
};

var pl = new PigLatina();
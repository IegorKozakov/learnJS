'use strict';

function StringCheck(){
    this.minQueries = 1;
    this.maxQueries = 10000;
    this.minStrings = 1;
    this.maxStrings = 10000;
    this.minStringsinQuery = 1;
    this.maxStringsinQuery = 20;
}

StringCheck.prototype.check = function(str){
    this.values = str.split('\n');
    this.data = [];
    this.result = '';
    this.error = false;
    this.fillIncomingData(0);
    if(!this.error){
        this.fillResults();
    }
    return this.showResult();
};

StringCheck.prototype.fillIncomingData = function(start){
    if(this.values[start] !== undefined){
        if(Number.isNaN(Number(this.values[start]))) {
            this.Error();
            return;
        }

        var linesCount = Number(this.values[start]);

        if(linesCount !== 0 && this.minStrings > linesCount || linesCount > this.maxStrings){
            this.Error('Too much queries');
            return;
        }

        linesCount ++;
        var current = {
            arg: this.values[start+1],
            data: this.values.slice(start+2, linesCount+start),
            result: '0'
        };

        this.data.push(current);
        this.fillIncomingData(linesCount + start);
    } else {
        this.data.push({
            result: '0'
        });
    }
};

StringCheck.prototype.fillResults = function (){

    if(this.minQueries > this.data.length -1 || this.data.length -1 > this.maxQueries ){
        this.Error('Too much servings for one query');
        return;
    }

    this.data.map(function(current){
        if(current.arg && current.data){
            if(this.minStrings > current.data.length || current.data.length > this.maxStrings){
                this.Error('Too much strings');
                return;
            }
            current.data.forEach(function (item){
                if(this.minStringsinQuery > item.length || item.length > this.maxStringsinQuery){
                    this.Error('Check yoru strings size');
                    return;
                }

                if(item.indexOf(current.arg) !== -1){
                   current.result ++
                }
            }, this);
        }
        this.result += current.result+'\n';
        return current;
    }, this);
};

StringCheck.prototype.Error = function (message){
    this.error = true;

    alert(message || 'Check incoming data!!!');
};

StringCheck.prototype.showResult = function (){
    if(!this.error){
        return this.result;
    }
};
var SC = new StringCheck();
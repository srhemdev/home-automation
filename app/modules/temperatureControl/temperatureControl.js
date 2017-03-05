/**
 * Temperature control module
 */


var temperatureControl = (function($){
    var arrowUp = $('.arrow-up'),
        arrowDown = $('.arrow-down'),
        temperature = $('.temperatureValue');

    function temperatureControl(config){
        this.config = config;

        if(!this.config.query) {
            this.config.query ={temperature :  this.config.temperature || '40'};
        }
    }

    temperatureControl.prototype.increaseTemperature = function() {
        if(arrowDown.hasClass('disabled')) {
            arrowDown.removeClass('disabled');
        }

        if(this.config.temperature == 32) {
            arrowUp.addClass('disabled');
            return;
        }
        this.config.temperature++;
        this.updateTemperature();
        this.config.query.temperature =  this.config.temperature;

        this.updateData(this.config);
    }

    temperatureControl.prototype.decreaseTemperature = function ()  {
        if(arrowUp.hasClass('disabled')) {
            arrowUp.removeClass('disabled');
        }

        if(this.config.temperature == 16) {
            arrowDown.addClass('disabled');
            return;
        }
        this.config.temperature--;
        this.updateTemperature();
        this.config.query.temperature =  this.config.temperature;
        this.updateData(this.config);
    }

    temperatureControl.prototype.updateTemperature =function (){
        temperature.text(this.config.temperature);
    }


    return temperatureControl;
})(jQuery);

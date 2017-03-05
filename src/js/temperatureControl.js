/**
 * Temperature control module
 */


var temperatureControl = (function($){
    function temperatureControl(config){

        this.config = config;

        var arrowUp = $('.arrow-up'),
            arrowDown = $('.arrow-down'),
            temperature = $('.temperatureValue');

        if(!this.config.query) {
            this.config.query ={temperature :  this.config.temperature || '40'};
        }

        this.increaseTemperature = function() {
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

        this.decreaseTemperature = function ()  {
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

        this.updateTemperature =function (){
            temperature.text(this.config.temperature);
        }

    }

    return temperatureControl;
})(jQuery);

/**
 * Temperature control module
 */


var temperatureControl = (function($){
    function temperatureControl(config){
        this.config = config;
        if(!this.config.query) {
            this.config.query ={temperature :  this.config.temperature || '40'};
        }

        this.increaseTemperature = function() {
            this.config.temperature++;
            $('.temperatureValue').text(this.config.temperature);
            this.config.query.temperature =  this.config.temperature;

            this.updateData(this.config);
        }

        this.decreaseTemperature =function (){
            this.config.temperature--;
            $('.temperatureValue').text(this.config.temperature);
            this.config.query.temperature =  this.config.temperature;
            this.updateData(this.config);
        }

        this.init =function (){
            $('.temperatureValue').text(this.config.temperature);
        }

    }

    return temperatureControl;
})(jQuery);

/**
 * Temperature control module
 */


var temperatureControl = (function(){
    function temperatureControl(config){
        this.config = config;
        this.increaseTemperature = function(range) {
            console.log(range);
        }

        this.decreaseTemperature = function(range) {
            console.log(range);
        }
    }

    return temperatureControl;
})();

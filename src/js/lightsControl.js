/**
 * Lights control module
 */


var lightsControl = (function(){
    function lightsControl(config){
        this.config = config;
        this.adjustLightRange = function(range) {
            console.log(range);
        }

    }
    return lightsControl;
})();
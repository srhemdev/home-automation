/**
 * Curtains control module
 */


var curtainsControl = (function(){
    function curtainsControl(config) {
        // some defaults
        this.config = config;
        this.adjustTemperatureRange = function(range) {
            console.log(range);
        }
    }

    return curtainsControl;

})();
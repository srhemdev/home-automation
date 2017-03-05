/**
 * Lights control module
 */


var lightsControl = (function($){
    function lightsControl(config){
        this.config = config;
        if(!this.config.query) {
            this.config.query ={range :  this.config.range || '40'};
        }
    }

    lightsControl.prototype.adjustLightRange = function() {
        this.config.range = $('.lightRange').val();
        this.config.query.range = this.config.range;
        this.updateData(this.config);
    }

    return lightsControl;
})(jQuery);
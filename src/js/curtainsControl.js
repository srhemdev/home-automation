/**
 * Curtains control module
 */


var curtainsControl = (function($){
    function curtainsControl(config) {
        // some defaults
        this.config = config;
        if(!this.config.query) {
            this.config.query ={range :  this.config.range || '40'};
        }
        this.adjustCurtain = function() {
            this.config.range = $('.curtainRange').val();
            this.config.query.range = this.config.range;
            this.updateData(this.config);
        }
    }

    return curtainsControl;

})(jQuery);
/**
 * Switch control module
 */

var switchControl = (function($){

    function switchControl() {}

    switchControl.prototype.get = function(config) {
        var display = $('#' + config.id + ' ' + config.displayClassName),
            toggle = $('#' + config.id  + ' ' + config.toggleClassName);

        $.getJSON(config.stateUrl, function(data) {
            if(data.state) {
                display.slideDown();
                toggle.addClass('active')
            } else {
                display.slideUp();
                toggle.removeClass('active')
            }
        });
    }

    switchControl.prototype.toggle = function(config) {
        // Toggle states and send update.
        var display = $('#' + config.id  + ' ' + config.displayClassName),
            toggle = $('#' + config.id  + ' ' + config.toggleClassName);

        toggle.toggleClass('active');

        if(toggle.hasClass('active')) {
            display.slideDown();
        } else {
            display.slideUp();
        }

        // Trigger update to server if necessary.
        if(config.stateUrl){
             this.updateData(config)
        }
    }

    switchControl.prototype.updateData = function(config) {
        config.query.state = $(config.toggleClassName).hasClass('active');

        $.ajax
        ({
            type: "POST",
            dataType : 'json',
            async: false,
            url: config.stateUrl,
            data: { data: JSON.stringify(config.query) },
            success: function () {

            },
            failure: function() {

            }
        });
    }

    switchControl.prototype.delete = function toggle(config) {
        $('div#' + config.id + '.control').remove();
        var options = $('.control-options')[0].children;
        if(!options.length) {
           $('.controlPanel .empty-message').show();
        }
    }

    switchControl.build = function (constr, config) {
        if (typeof switchControl[constr] !== "function") {
            throw {
                name:    "switchControl",
                message: "You cannot create " + constr + "  in this factory"
            };
        }

        for (var fn in switchControl.prototype) {
            // Here, the method borrowing technique is used to
            // selectively inherit from the switchControl
            if (typeof switchControl[constr].prototype[fn] !== "function") {
                switchControl[constr].prototype[fn] = switchControl.prototype[fn];
            }
        }
        // create a new control using the factory
        return new switchControl[constr](config);
    };

    switchControl.temperatureControl = temperatureControl;
    switchControl.lightsControl = lightsControl;
    switchControl.curtainsControl = curtainsControl;


    return switchControl;
})(jQuery);
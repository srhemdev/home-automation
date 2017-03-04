/**
 * Switch control module
 */

var switchControl = (function($){

    function switchControl(config) {}

    switchControl.prototype.get = function toggle(config) {
        var id = '#' + config.id;
        $.getJSON(config.stateUrl, function(data) {

            console.log(data);
        });
    }

    switchControl.prototype.toggle = function toggle(config) {
        // Toggle states and send update.
        var id = '#' + config.id;
        var className = '.' + config.id +' .display';
        $(id).toggleClass(config.class);
        if($(id).hasClass(config.class)) {
            $(className).removeClass('hidden')
        } else {
            $(className).addClass('hidden')
        }
        // Trigger update to server if necessary.
        if(config.stateUrl){
            $.ajax
            ({
                type: "POST",
                dataType : 'json',
                async: false,
                url: config.stateUrl,
                data: { data: JSON.stringify({ 'state': $(id).hasClass(config.class)}) },
                success: function () {

                },
                failure: function() {

                }
            });
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
            if (  typeof switchControl[constr].prototype[fn] !== "function"
                || switchControl[constr].prototype[fn].toString().indexOf('[native code]') > -1 ) {
                switchControl[constr].prototype[fn] = switchControl.prototype[fn];
            }
        }
        // create a new automobile using the factory
        return new switchControl[constr](config);
    };

    switchControl.temperatureControl = temperatureControl;
    switchControl.lightsControl = lightsControl;
    switchControl.curtainsControl = curtainsControl;


    return switchControl;
})(jQuery);
/**
 * Temperature control module
 */


var temperatureControl = (function($){


    function temperatureControl(config){
        var vm = this;
        var arrowUp, arrowDown, temperature;

        vm.config = config;

        if(!vm.config.query) {
            vm.config.query ={temperature :  vm.config.temperature || '40'};
        }

        function init() {
            vm.get(vm.config);

            $(vm.config.parent).append('<div class="control" id="' + vm.config.id + '">\
                                            <div class="flex-row space-between">\
                                               <div><i class="material-icons">filter_drama</i>Temperature</div>\
                                               <div class="flex-row">\
                                                    <div class="toggle"  title="Thermometer On/Off"></div>\
                                                    <i class="material-icons delete">cancel</i>\
                                               </div>\
                                            </div>\
                                           <div class="flex-row temperatureDigits" title="Thermometer On/Off">\
                                               <span class="temperatureValue"></span>°C\
                                           </div>\
                                           <div class="display flex-row hidden arrows">\
                                               <span class="arrow-down" title="Decrease temperature"></span>\
                                               <span class="arrow-up" title="Increase temperature"></span>\
                                           </div>\
                                        </div>');
            arrowUp = $('#' + vm.config.id +' .arrow-up');
            arrowDown = $('#' + vm.config.id +  ' .arrow-down');
            temperature = $('#' + vm.config.id +' .temperatureValue');

            updateTemperature();

            arrowUp.on('click', increaseTemperature);
            arrowDown.on('click', decreaseTemperature);

            $("#" + vm.config.id + ' .toggle').on('click', function(){
                vm.toggle(vm.config);
            });

            $("#" + vm.config.id + ' .delete').on('click', function(){
                vm.delete(vm.config);
            });
        }


        function updateTemperature() {
            temperature.text(vm.config.temperature);
        }

        function increaseTemperature() {
            if(arrowDown.hasClass('disabled')) {
                arrowDown.removeClass('disabled');
            }

            if(vm.config.temperature == 32) {
                arrowUp.addClass('disabled');
                return;
            }
            vm.config.temperature++;
            updateTemperature();
            vm.config.query.temperature =  vm.config.temperature;

            vm.updateData(vm.config);
        }

        function decreaseTemperature() {
            if(arrowUp.hasClass('disabled')) {
                arrowUp.removeClass('disabled');
            }

            if(vm.config.temperature == 16) {
                arrowDown.addClass('disabled');
                return;
            }
            vm.config.temperature--;
            updateTemperature();
            vm.config.query.temperature =  vm.config.temperature;
            vm.updateData(vm.config);
        }

        init();
    }

    return temperatureControl;
})(jQuery);
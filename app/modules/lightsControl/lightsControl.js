/**
 * Lights control module
 */


var lightsControl = (function($){
        function lightsControl(config){
            var vm = this;
            vm.config = config;

            if(!vm.config.query) {
                vm.config.query ={range :  vm.config.range || '40'};
            }

            $(vm.config.parent).append('<div class="control" id="' + vm.config.id + '">\
                                        <div class="flex-row space-between">\
                                            <div>\
                                                <i class="material-icons">lightbulb_outline</i>Lights\
                                            </div>\
                                            <div class="flex-row">\
                                                <div class="toggle"  title="Lights On/Off"></div>\
                                                <i class="material-icons delete">cancel</i>\
                                            </div>\
                                        </div>\
                                            <div class="display flex-row hidden">\
                                            <input class="lightRange" type="range" step="3" \/>\
                                            </div>\
                                        </div>');

            function init() {

                vm.get(vm.config);

                $("#" + vm.config.id +' .toggle').on('click', function(){
                    vm.toggle(vm.config);
                });

                $("#" + vm.config.id + ' .delete').on('click', function(){
                    vm.delete(vm.config);
                });

                $("#" + vm.config.id +' .lightRange').on('change', adjustLightRange);
            }

            function adjustLightRange() {
                vm.config.range = $("#" + vm.config.id + ' .lightRange').val();
                vm.config.query.range = vm.config.range;
                vm.updateData(vm.config);
            }

            init();
        }

        return lightsControl;
})(jQuery);
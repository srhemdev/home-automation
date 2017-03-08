/**
 * Curtains control module
 * Inherits the methods from switchControl factory class
 * and has its own methods specific to its control
 */


var curtainsControl = (function($){

        function curtainsControl(config) {
            //set the config for curtains control.
            var vm = this;
            // some defaults
            vm.config = config;

            if(!vm.config.query) {
                vm.config.query ={range :  vm.config.range || '40'};
            }

            $(vm.config.parent).append('<div class="control" id="' + vm.config.id + '">\
                                            <div class="flex-row space-between">\
                                                <div><i class="material-icons">settings</i>Curtains</div>\
                                                <div class="flex-row">\
                                                    <div class="toggle"  title="Curtain Close/Open"></div>\
                                                    <i class="material-icons delete">cancel</i>\
                                                </div>\
                                            </div>\
                                            <div class="display flex-row hidden">\
                                                <input class="curtainRange" type="range" step="3" />\
                                            </div>\
                                        </div>');

            //initialize the curtains control
            function init() {
                vm.get(vm.config);

                $("#" + vm.config.id + ' .toggle').on('click', function(){
                    vm.toggle(vm.config);
                });

                $("#" + vm.config.id + ' .delete').on('click', function(){
                    vm.delete(vm.config);
                });

                $("#" + vm.config.id +' .curtainRange').on('change', adjustCurtain);
            }

            //function to adjust curtain openness range from 0-100
            // (based on how much open do you want the curtain to be.)
            function adjustCurtain() {
                vm.config.range = $("#" + vm.config.id + ' .curtainRange').val();
                vm.config.query.range = vm.config.range;
                vm.updateData(vm.config);
            }

            init();
        }



        return curtainsControl;

})(jQuery);
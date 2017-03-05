/**
 * Curtains control module
 */


var curtainsControl = (function($){

        function curtainsControl(config) {
            var vm = this;
            // some defaults
            vm.config = config;

            if(!vm.config.query) {
                vm.config.query ={range :  vm.config.range || '40'};
            }

            $(vm.config.parent).append('<div class="control" id="curtain">\
                                            <div class="flex-row space-between">\
                                                <div><i class="material-icons">settings</i>Curtains</div>\
                                                <div class="toggle"  title="Curtain Close/Open"></div>\
                                            </div>\
                                            <div class="display flex-row hidden">\
                                                <input class="curtainRange" type="range" step="3" />\
                                            </div>\
                                        </div>');


            function init() {
                vm.get(vm.config);

                $('#curtain .toggle').on('click', function(){
                    vm.toggle(vm.config);
                });

                $('.curtainRange').on('change', adjustCurtain);
            }

            function adjustCurtain() {

                console.log('hello')
                vm.config.range = $('.curtainRange').val();
                vm.config.query.range = vm.config.range;
                vm.updateData(vm.config);
            }

            init();
        }



        return curtainsControl;

})(jQuery);
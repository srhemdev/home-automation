/**
 * Control Panel to add new controls
 */


(function($){
    $(document).ready(function(){

        //Create the controls you want to see in the control panel
        var configObject = {
            state: false,
            toggleClassName: '.toggle',
            displayClassName:'.display',
            parent: '.control-options'
            },
            obj = {};

        function selectChoice(choice) {
            var control = '';
            var config = Object.create(configObject);
            config.id = choice + Math.floor((Math.random() * 1000000) + 1);

            switch(choice) {
                case 'light':
                    config.range = 20;
                    config.stateUrl = MockData.lightStatusUrl;
                    control = 'lightsControl';
                    break;
                case 'curtain':
                    config.range = 50;
                    config.stateUrl = MockData.curtainStatusUrl;
                    control = 'curtainsControl'
                    break;
                case 'temperature':
                    config.temperature = 22;
                    config.stateUrl = MockData.temperatureUrl;
                    control = 'temperatureControl';
                    break;
            }

            switchControl.build(control, config);
        }

        $('#control-choice-add').click(function(){
            var value = $('.control-choice').val();
            selectChoice(value)

        });

        function init() {
            var controls = ['light', 'curtain', 'temperature'];
            controls.forEach(function(control){
                selectChoice(control);
            });
        }

        init();


    })

})($);